"use client";

import { featureItems } from "../data/featureItems";
import { slides } from "../data/slidesImage";
import AboutUsSection from "./AboutUsSection";
import MembershipPlansSection from "./MembershipPlansSection";
import ServicesSection from "./ServicesSection";
import AuthEntryModal from "@/components/AuthEntryModal";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Crown,
  Dumbbell,
  Menu,
  X,
} from "lucide-react";


const navItems = ["Home", "About", "Services", "Membership", "Contact"];


const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M14 8.1h2.4V4.2A30 30 0 0 0 13 4c-3.4 0-5.7 2-5.7 5.7V13H3.5v4.4h3.8V24H12v-6.6h3.8l.6-4.4H12V10c0-1.2.3-1.9 2-1.9Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.7 1.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M21.6 7.2s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.3-1C15.2 3.5 12 3.5 12 3.5s-3.2 0-6.4.3c-.4.1-1.4.1-2.3 1-.7.7-.9 2.4-.9 2.4S2 9.2 2 11.1v1.8c0 1.9.4 3.9.4 3.9s.2 1.7.9 2.4c.9.9 2.1.9 2.6 1 1.9.2 6.1.3 6.1.3s3.2 0 6.4-.3c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.4.9-2.4s.4-2 .4-3.9v-1.8c0-1.9-.4-3.9-.4-3.9ZM10 15.1V8.4l5.8 3.4L10 15.1Z" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function GymHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [authOpen, setAuthOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = slides[activeSlide];
  const titleParts = currentSlide.title.split(currentSlide.accent);

  return (
    <main className="min-h-screen bg-[#050707] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 1.15, ease: "easeOut" }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.68)_44%,rgba(0,0,0,0.25)_78%),linear-gradient(180deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.16)_38%,rgba(0,0,0,0.92)_100%)]" />

        <header
          className={`fixed left-0 right-0 top-0 z-30 transition duration-300 ${
            scrolled
              ? "border-b border-white/10 bg-black/90 shadow-2xl shadow-black/50 backdrop-blur"
              : "bg-transparent"
          }`}
        >
          <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
            <motion.a
              href="#"
              className="flex items-center gap-2 text-xl font-black"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="relative grid size-9 place-items-center rounded border border-[#d9ad58]/50 bg-black/25">
                <Crown className="absolute -top-3 size-5 fill-[#FF0000] text-[#FF0000]" />
                <Dumbbell className="size-5 text-white" />
              </span>
              <span>KingoGM</span>
            </motion.a>

            <div className="hidden items-center gap-10 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-semibold text-white/82 transition hover:text-[#FF0000]"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <motion.a
                href="#join"
                className="hidden rounded border border-white/55 px-7 py-3 text-sm font-black uppercase tracking-normal transition bg-[#FF0000] hover:bg-white hover:text-black sm:inline-flex"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.55 }}
              >
                Contact us
              </motion.a>
              <motion.button
                type="button"
                onClick={() => setAuthOpen(true)}
                className="hidden rounded border border-white/55 px-7 py-3 text-sm font-black uppercase tracking-normal transition hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-black sm:inline-flex"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.55 }}
              >
                Get Started
              </motion.button>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="grid size-11 place-items-center rounded border border-white/25 bg-white/5 text-white lg:hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </nav>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="border-t border-white/10 bg-black/95 px-5 py-4 lg:hidden"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="rounded px-2 py-3 text-sm font-semibold text-white/85 hover:bg-white/[0.08]"
                    >
                      {item}
                    </a>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      setAuthOpen(true);
                    }}
                    className="mt-2 rounded bg-[#dfb866] px-4 py-3 text-center text-sm font-black uppercase text-black"
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 pb-48 pt-28 sm:px-8 lg:pb-52">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.p
              className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#FF0000] sm:text-sm"
              variants={fadeUp}
              transition={{ duration: 0.55 }}
            >
              Discipline &bull; Strength &bull; Consistency
            </motion.p>
            <motion.h1
              key={currentSlide.title}
              className="max-w-3xl text-3xl font-black uppercase leading-[0.94] text-white drop-shadow-2xl sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {titleParts[0]}
              <span className="block text-[#FF0000]">{currentSlide.accent}</span>
              {titleParts[1]}
            </motion.h1>
            <motion.div
              className="my-7 h-0.5 w-16 bg-[#FF0000]"
              variants={fadeUp}
              transition={{ duration: 0.55 }}
            />
            <motion.p
              className="max-w-xl text-base leading-7 text-white/82 sm:text-lg"
              variants={fadeUp}
              transition={{ duration: 0.55 }}
            >
              Transform your body, elevate your mind, and become the strongest
              version of yourself. World-class equipment, expert trainers, and a
              community that pushes you to grow.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-4 sm:flex-row"
              variants={fadeUp}
              transition={{ duration: 0.55 }}
            >
              <motion.a
                id="join"
                href="#contact"
                className="inline-flex h-14 items-center justify-center rounded bg-[#FF0000] px-9 text-sm font-black uppercase text-black shadow-xl shadow-black/25 transition hover:bg-white"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Now
              </motion.a>
              <motion.a
                href="#services"
                className="inline-flex h-14 items-center justify-center rounded border border-[#FF0000] px-9 text-sm font-black uppercase text-white transition hover:bg-[#FF0000] hover:text-black"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Programs
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-4 left-1/2 z-20 w-[min(94vw,76rem)] -translate-x-1/2 rounded border border-white/12 bg-black/55 px-6 py-5 shadow-2xl shadow-black/45 backdrop-blur-md sm:bottom-7 lg:px-9"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.65, ease: "easeOut" }}
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featureItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex min-w-0 items-start gap-4">
                  <Icon className="mt-1 size-8 shrink-0 text-[#dfb866]" strokeWidth={1.6} />
                  <div className="min-w-0">
                    <h2 className="text-sm font-black uppercase text-white">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-white/70">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-5 text-white/75 lg:flex">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/[0.08] transition hover:border-[#dfb866] hover:text-[#dfb866]"
              whileHover={{ x: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

      </section>
      <AboutUsSection />
      <ServicesSection />
      <MembershipPlansSection />
      <AuthEntryModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </main>
  );
}
