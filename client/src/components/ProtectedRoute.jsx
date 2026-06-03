"use client";

import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children, allowedRoles = ["member", "admin"] }) {
  const { user, loading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!isAuthenticated) {
      router.replace("/sign-in");
      return;
    }

    if (user && !allowedRoles.includes(user.role)) {
      router.replace(user.role === "admin" ? "/admin/dashboard" : "/dashboard");
    }
  }, [allowedRoles, isAuthenticated, loading, router, user]);

  if (loading || !isAuthenticated || !user || !allowedRoles.includes(user.role)) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#050707] px-6 text-white">
        <motion.div
          className="w-full max-w-sm space-y-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="h-3 w-28 rounded bg-white/10" />
          <div className="h-24 rounded border border-white/10 bg-white/5" />
          <div className="h-24 rounded border border-white/10 bg-white/5" />
        </motion.div>
      </main>
    );
  }

  return children;
}
