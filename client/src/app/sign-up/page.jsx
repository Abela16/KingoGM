"use client";

import { useAuth } from "@/context/AuthContext";
import { getApiError } from "@/lib/api";
import { motion } from "framer-motion";
import { CheckCircle2, Dumbbell, Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const strengthLabels = ["Weak", "Fair", "Good", "Strong"];

function getPasswordStrength(password = "") {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  return Math.min(score, 4);
}

export default function SignUpPage() {
  const router = useRouter();
  const { register: createAccount } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const passwordRegistration = register("password", {
    required: "Password is required",
    minLength: { value: 8, message: "Password must be at least 8 characters" },
    onChange: (event) => setPasswordValue(event.target.value),
  });
  const strength = useMemo(() => getPasswordStrength(passwordValue), [passwordValue]);

  const onSubmit = async (values) => {
    setServerMessage("");
    setSuccess("");

    try {
      const data = await createAccount({
        fullname: values.fullname.trim(),
        email: values.email.trim().toLowerCase(),
        phone: values.phone.trim(),
        password: values.password,
      });

      setSuccess("Account created. Taking you to your dashboard...");
      router.replace(data.user.role === "admin" ? "/admin/dashboard" : "/dashboard");
    } catch (error) {
      setServerMessage(getApiError(error));
    }
  };

  return (
    <main className="min-h-screen bg-[#050707] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.section
          className="hidden lg:block"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link href="/" className="inline-flex items-center gap-3 text-2xl font-black">
            <span className="grid size-11 place-items-center rounded border border-[#dfb866]/45 bg-[#dfb866]/10">
              <Dumbbell className="size-5 text-[#dfb866]" />
            </span>
            KingoGM
          </Link>
          <h1 className="mt-10 text-5xl font-black leading-tight">
            Premium membership management starts here.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-white/64">
            Create your gym account to track attendance, subscriptions, payments, and profile details from one secure dashboard.
          </p>
          <div className="mt-8 grid max-w-md gap-3">
            {["Secure JWT authentication", "Member-first dashboard", "Built for admin scalability"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/75">
                <CheckCircle2 className="size-5 text-[#dfb866]" />
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mx-auto w-full max-w-xl rounded border border-white/12 bg-white/[0.045] p-5 shadow-2xl shadow-black/45 backdrop-blur sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-8">
            <Link href="/" className="mb-7 inline-flex items-center gap-2 text-lg font-black lg:hidden">
              <Dumbbell className="size-5 text-[#dfb866]" />
              KingoGM
            </Link>
            <p className="text-sm font-black uppercase text-[#FF0000]">Sign Up</p>
            <h2 className="mt-2 text-3xl font-black">Create your member account</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Already training with us? <Link href="/sign-in" className="font-bold text-[#dfb866]">Sign in</Link>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label htmlFor="fullname" className="text-sm font-bold text-white/82">Full Name</label>
              <input
                id="fullname"
                type="text"
                autoComplete="name"
                className="mt-2 h-12 w-full rounded border border-white/12 bg-black/35 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-[#dfb866]"
                placeholder="Abel Tesfaye"
                {...register("fullname", { required: "Full name is required" })}
              />
              {errors.fullname && <p className="mt-2 text-sm text-[#ff6969]">{errors.fullname.message}</p>}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
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
                <label htmlFor="phone" className="text-sm font-bold text-white/82">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 h-12 w-full rounded border border-white/12 bg-black/35 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-[#dfb866]"
                  placeholder="+251 900 000 000"
                  {...register("phone", {
                    required: "Phone number is required",
                    minLength: { value: 7, message: "Enter a valid phone number" },
                  })}
                />
                {errors.phone && <p className="mt-2 text-sm text-[#ff6969]">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="password" className="text-sm font-bold text-white/82">Password</label>
                <div className="relative mt-2">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    className="h-12 w-full rounded border border-white/12 bg-black/35 px-4 pr-12 text-white outline-none transition placeholder:text-white/28 focus:border-[#dfb866]"
                    placeholder="Create a password"
                    {...passwordRegistration}
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
                <div className="mt-3 flex gap-1">
                  {[1, 2, 3, 4].map((bar) => (
                    <span
                      key={bar}
                      className={`h-1.5 flex-1 rounded ${strength >= bar ? "bg-[#dfb866]" : "bg-white/12"}`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-xs text-white/48">
                  Strength: {strength ? strengthLabels[strength - 1] : "Add 8+ characters"}
                </p>
                {errors.password && <p className="mt-2 text-sm text-[#ff6969]">{errors.password.message}</p>}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="text-sm font-bold text-white/82">Confirm Password</label>
                <div className="relative mt-2">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    className="h-12 w-full rounded border border-white/12 bg-black/35 px-4 pr-12 text-white outline-none transition placeholder:text-white/28 focus:border-[#dfb866]"
                    placeholder="Repeat password"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) => value === passwordValue || "Passwords do not match",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((visible) => !visible)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/55 hover:text-white"
                    aria-label={showConfirmPassword ? "Hide password confirmation" : "Show password confirmation"}
                  >
                    {showConfirmPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="mt-2 text-sm text-[#ff6969]">{errors.confirmPassword.message}</p>}
              </div>
            </div>

            {serverMessage && <p className="rounded border border-[#ff6969]/25 bg-[#ff6969]/10 px-4 py-3 text-sm text-[#ffb1b1]">{serverMessage}</p>}
            {success && <p className="rounded border border-[#7ee787]/25 bg-[#7ee787]/10 px-4 py-3 text-sm text-[#a7f3b7]">{success}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-14 w-full items-center justify-center rounded bg-[#FF0000] px-6 text-sm font-black uppercase text-white shadow-xl shadow-[#FF0000]/15 transition hover:bg-[#dfb866] hover:text-black disabled:cursor-not-allowed disabled:opacity-65"
            >
              {isSubmitting ? <Loader2 className="size-5 animate-spin" /> : "Create Account"}
            </button>
          </form>
        </motion.section>
      </div>
    </main>
  );
}
