"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import {
  CalendarDays,
  CreditCard,
  Dumbbell,
  LayoutDashboard,
  LogOut,
  Phone,
  User,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const stats = [
  { label: "Current Plan", value: "No active plan", icon: Dumbbell },
  { label: "Days Remaining", value: "0", icon: CalendarDays },
  { label: "Total Visits", value: "0", icon: LayoutDashboard },
  { label: "Payment Status", value: "No payments", icon: CreditCard },
];

function SkeletonCard() {
  return <div className="h-32 animate-pulse rounded border border-white/10 bg-white/[0.04]" />;
}

function EmptyState({ title, text }) {
  return (
    <div className="rounded border border-dashed border-white/14 bg-black/20 p-5 text-sm text-white/58">
      <p className="font-bold text-white/82">{title}</p>
      <p className="mt-2 leading-6">{text}</p>
    </div>
  );
}

function DashboardContent() {
  const router = useRouter();
  const { user, logout, refreshProfile } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    refreshProfile().finally(() => setLoading(false));
  }, [refreshProfile]);

  const handleLogout = () => {
    logout();
    router.replace("/sign-in");
  };

  return (
    <main className="min-h-screen bg-[#050707] text-white">
      <div className="grid min-h-screen lg:grid-cols-[17rem_1fr]">
        <aside className="border-b border-white/10 bg-black/35 px-5 py-5 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded border border-[#dfb866]/40 bg-[#dfb866]/10">
              <Dumbbell className="size-5 text-[#dfb866]" />
            </span>
            <span className="text-xl font-black">KingoGM</span>
          </div>

          <nav className="mt-8 flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {["Dashboard", "Membership", "Attendance", "Payments"].map((item, index) => (
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
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-black uppercase text-[#FF0000]">Member Dashboard</p>
                <h1 className="mt-2 text-3xl font-black sm:text-4xl">Welcome, {user?.fullname}</h1>
                <p className="mt-2 text-sm text-white/55">Track your membership, visits, and recent payment activity.</p>
              </div>
              <div className="rounded border border-[#dfb866]/25 bg-[#dfb866]/10 px-4 py-3 text-sm font-bold text-[#f3d28d]">
                Status: {user?.isActive ? "Active Account" : "Inactive Account"}
              </div>
            </div>

            {loading ? (
              <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {[1, 2, 3, 4].map((item) => <SkeletonCard key={item} />)}
              </div>
            ) : (
              <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="rounded border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/20">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm text-white/58">{stat.label}</p>
                        <Icon className="size-5 text-[#dfb866]" />
                      </div>
                      <p className="mt-4 text-2xl font-black">{stat.value}</p>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-6 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded border border-white/10 bg-white/[0.045] p-5">
                <h2 className="text-lg font-black">Profile Information</h2>
                <div className="mt-5 flex items-center gap-4">
                  <div className="relative size-20 overflow-hidden rounded border border-white/12 bg-white/[0.08]">
                    {user?.profileImage ? (
                      <Image src={user.profileImage} alt={`${user.fullname} profile`} fill className="object-cover" />
                    ) : (
                      <div className="grid size-full place-items-center text-white/55">
                        <User className="size-7" />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xl font-black">{user?.fullname}</p>
                    <p className="truncate text-sm text-white/58">{user?.email}</p>
                    <p className="mt-2 flex items-center gap-2 text-sm text-white/58">
                      <Phone className="size-4 text-[#dfb866]" />
                      {user?.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded border border-white/10 bg-white/[0.045] p-5">
                <h2 className="text-lg font-black">Membership Information</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <EmptyState title="Current Membership Plan" text="No active membership plan is connected to this account yet." />
                  <EmptyState title="Subscription Dates" text="Start and end dates will appear after a subscription is assigned." />
                  <EmptyState title="Membership Status" text="Membership status will update automatically from subscription records." />
                  <EmptyState title="Days Remaining" text="Days remaining will be calculated when the plan has an end date." />
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-5 xl:grid-cols-2">
              <div className="rounded border border-white/10 bg-white/[0.045] p-5">
                <h2 className="text-lg font-black">Attendance Information</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <EmptyState title="Total Visits" text="Attendance check-ins have not been recorded for this member." />
                  <EmptyState title="Last Check-in Date" text="The latest visit date will appear after the first check-in." />
                </div>
              </div>

              <div className="rounded border border-white/10 bg-white/[0.045] p-5">
                <h2 className="text-lg font-black">Payment Information</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <EmptyState title="Recent Payments" text="No payment history is available for this account yet." />
                  <EmptyState title="Payment Status" text="Payment state will update after billing records are added." />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute allowedRoles={["member"]}>
      <DashboardContent />
    </ProtectedRoute>
  );
}
