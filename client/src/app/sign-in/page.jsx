"use client";

import { useAuth } from "@/context/AuthContext";
import { getApiError } from "@/lib/api";
import { motion } from "framer-motion";
import { Dumbbell, Eye, EyeOff, Loader2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignInPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur", defaultValues: { remember: true } });

  const onSubmit = async (values) => {
    setServerMessage("");

    try {
      const data = await login({
        email: values.email.trim().toLowerCase(),
        password: values.password,
      });

      router.replace(data.user.role === "admin" ? "/admin/dashboard" : "/dashboard");
    } catch (error) {
      setServerMessage(getApiError(error));
    }
  };

  return (
    <main className="min-h-screen bg-[#050707] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <motion.section
          className="mx-auto w-full max-w-lg rounded border border-white/12 bg-white/[0.045] p-5 shadow-2xl shadow-black/45 backdrop-blur sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-lg font-black">
            <Dumbbell className="size-5 text-[#dfb866]" />
            KingoGM
          </Link>
          <p className="text-sm font-black uppercase text-[#FF0000]">Sign In</p>
          <h1 className="mt-2 text-3xl font-black">Welcome back</h1>
          <p className="mt-3 text-sm leading-6 text-white/60">
            New to KingoGM? <Link href="/sign-up" className="font-bold text-[#dfb866]">Create an account</Link>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="text-sm font-bold text-white/82">Email Address</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="mt-2 h-12 w-full rounded border border-white/12 bg-black/35 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-[#dfb866]"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email address is required",
                  pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email address" },
                })}
              />
              {errors.email && <p className="mt-2 text-sm text-[#ff6969]">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-bold text-white/82">Password</label>
              <div className="relative mt-2">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  className="h-12 w-full rounded border border-white/12 bg-black/35 px-4 pr-12 text-white outline-none transition placeholder:text-white/28 focus:border-[#dfb866]"
                  placeholder="Enter your password"
                  {...register("password", { required: "Password is required" })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/55 hover:text-white"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-2 text-sm text-[#ff6969]">{errors.password.message}</p>}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <label className="flex items-center gap-3 text-white/70">
                <input
                  type="checkbox"
                  className="size-4 rounded border-white/20 bg-black accent-[#dfb866]"
                  {...register("remember")}
                />
                Remember Me
              </label>
              <Link href="#" className="font-bold text-[#dfb866]">Forgot Password?</Link>
            </div>

            {serverMessage && <p className="rounded border border-[#ff6969]/25 bg-[#ff6969]/10 px-4 py-3 text-sm text-[#ffb1b1]">{serverMessage}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-14 w-full items-center justify-center rounded bg-[#FF0000] px-6 text-sm font-black uppercase text-white shadow-xl shadow-[#FF0000]/15 transition hover:bg-[#dfb866] hover:text-black disabled:cursor-not-allowed disabled:opacity-65"
            >
              {isSubmitting ? <Loader2 className="size-5 animate-spin" /> : "Sign In"}
            </button>
          </form>
        </motion.section>

        <motion.section
          className="hidden lg:block"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="inline-flex size-14 items-center justify-center rounded border border-[#dfb866]/35 bg-[#dfb866]/10 text-[#dfb866]">
            <ShieldCheck className="size-7" />
          </div>
          <h2 className="mt-8 text-5xl font-black leading-tight">Secure access for every member and admin.</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/64">
            Sign in to manage memberships, review activity, and keep your gym operations moving with clarity.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
