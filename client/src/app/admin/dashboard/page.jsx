"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import api, { getApiError } from "@/lib/api";
import { motion } from "framer-motion";
import { CreditCard, Dumbbell, LogOut, ShieldCheck, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function AdminDashboardContent() {
  const router = useRouter();
  const { logout, user } = useAuth();
  const [overview, setOverview] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/users/admin/overview")
      .then(({ data }) => setOverview(data))
      .catch((requestError) => setError(getApiError(requestError)));
  }, []);

  const handleLogout = () => {
    logout();
    router.replace("/sign-in");
  };

  const cards = [
    { label: "Total Members", value: overview?.totalMembers ?? "0", icon: Users },
    { label: "Active Members", value: overview?.activeMembers ?? "0", icon: ShieldCheck },
    { label: "Total Users", value: overview?.totalUsers ?? "0", icon: Users },
    { label: "Subscriptions", value: "Ready", icon: CreditCard },
  ];

  return (
    <main className="min-h-screen bg-[#050707] text-white">
      <div className="grid min-h-screen lg:grid-cols-[17rem_1fr]">
        <aside className="border-b border-white/10 bg-black/35 px-5 py-5 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded border border-[#dfb866]/40 bg-[#dfb866]/10">
              <Dumbbell className="size-5 text-[#dfb866]" />
            </span>
            <span className="text-xl font-black">KingoGM Admin</span>
          </div>

          <nav className="mt-8 flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {["Overview", "Members", "Subscriptions", "Users"].map((item, index) => (
              <button
                key={item}
                type="button"
                className={`shrink-0 rounded px-4 py-3 text-left text-sm font-bold ${
                  index === 0 ? "bg-[#FF0000] text-white" : "text-white/65 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-8 inline-flex items-center gap-2 rounded border border-white/12 px-4 py-3 text-sm font-bold text-white/72 transition hover:border-[#FF0000]/60 hover:text-white"
          >
            <LogOut className="size-4" />
            Logout
          </button>
        </aside>

        <section className="px-4 py-6 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <div className="border-b border-white/10 pb-6">
              <p className="text-sm font-black uppercase text-[#FF0000]">Admin Dashboard</p>
              <h1 className="mt-2 text-3xl font-black sm:text-4xl">Operations overview</h1>
              <p className="mt-2 text-sm text-white/55">Signed in as {user?.fullname}. Manage members, subscriptions, and users from here.</p>
            </div>

            {error && <p className="mt-6 rounded border border-[#ff6969]/25 bg-[#ff6969]/10 px-4 py-3 text-sm text-[#ffb1b1]">{error}</p>}

            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.label} className="rounded border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/20">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm text-white/58">{card.label}</p>
                      <Icon className="size-5 text-[#dfb866]" />
                    </div>
                    <p className="mt-4 text-2xl font-black">{card.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 grid gap-5 xl:grid-cols-3">
              {["Member Management", "Subscription Management", "User Administration"].map((title) => (
                <div key={title} className="rounded border border-white/10 bg-white/[0.045] p-5">
                  <h2 className="text-lg font-black">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    This protected area is ready for the next set of CRUD tools and reporting tables.
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default function AdminDashboardPage() {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminDashboardContent />
    </ProtectedRoute>
  );
}
