"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LogIn, Sparkles, UserPlus, X } from "lucide-react";
import Link from "next/link";

export default function AuthEntryModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/75 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-entry-title"
          onMouseDown={onClose}
        >
          <motion.div
            className="w-full max-w-md rounded border border-white/12 bg-[#090b0b] p-6 text-white shadow-2xl shadow-black/60"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded border border-[#dfb866]/40 bg-[#dfb866]/10 text-[#dfb866]">
                  <Sparkles className="size-5" />
                </div>
                <h2 id="auth-entry-title" className="text-2xl font-black text-white">
                  Start your KingoGM account
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Access membership tools, attendance, payments, and your gym profile.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid size-10 shrink-0 place-items-center rounded border border-white/10 bg-white/5 text-white/75 transition hover:bg-white/10 hover:text-white"
                aria-label="Close authentication options"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mt-7 grid gap-3">
              <Link
                href="/sign-in"
                onClick={onClose}
                className="group flex items-center justify-between rounded border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#FF0000]/70 hover:bg-[#FF0000]/10"
              >
                <span>
                  <span className="block text-sm font-black uppercase text-white">Sign In</span>
                  <span className="mt-1 block text-sm text-white/58">
                    Continue to your dashboard.
                  </span>
                </span>
                <LogIn className="size-5 text-[#FF0000] transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/sign-up"
                onClick={onClose}
                className="group flex items-center justify-between rounded border border-[#dfb866]/30 bg-[#dfb866]/10 p-4 transition hover:border-[#dfb866] hover:bg-[#dfb866]/15"
              >
                <span>
                  <span className="block text-sm font-black uppercase text-white">Sign Up</span>
                  <span className="mt-1 block text-sm text-white/58">
                    Create a member account.
                  </span>
                </span>
                <UserPlus className="size-5 text-[#dfb866] transition group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
