"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  BadgeCheck,
  Brain,
  CircleDot,
  Dumbbell,
  Flame,
  Gem,
  Handshake,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const images = {
  identity:
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=88",
  coaching:
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=88",
  culture:
    "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=88",
  environment:
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=88",
  growth:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=88",
  promise:
    "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=1800&q=90",
};

const philosophyCards = [
  {
    title: "Discipline Over Motivation",
    description: "Motivation fades. Discipline creates long-term success.",
    icon: ShieldCheck,
  },
  {
    title: "Consistency Creates Transformation",
    description: "Small daily actions lead to extraordinary results.",
    icon: TrendingUp,
  },
  {
    title: "Community Fuels Growth",
    description: "People achieve more when they train together.",
    icon: UsersRound,
  },
];

const differenceItems = [
  {
    title: "Real Coaching",
    description: "We guide members instead of simply providing equipment.",
    image: images.coaching,
    icon: BadgeCheck,
  },
  {
    title: "Results-Driven Culture",
    description: "Every workout has purpose and measurable progress.",
    image: images.culture,
    icon: Target,
  },
  {
    title: "Premium Environment",
    description: "Clean, modern, energetic, and motivating atmosphere.",
    image: images.environment,
    icon: Gem,
  },
  {
    title: "Personal Growth",
    description: "Fitness is about building character as much as building strength.",
    image: images.growth,
    icon: Brain,
  },
];

const values = [
  { title: "Discipline", icon: ShieldCheck },
  { title: "Commitment", icon: Flame },
  { title: "Growth", icon: TrendingUp },
  { title: "Respect", icon: Handshake },
  { title: "Excellence", icon: Sparkles },
  { title: "Community", icon: UsersRound },
];

const journey = [
  {
    title: "Join",
    description: "Step into a serious environment built for change.",
    icon: CircleDot,
  },
  {
    title: "Learn",
    description: "Understand movement, rhythm, recovery, and purpose.",
    icon: Leaf,
  },
  {
    title: "Train",
    description: "Build strength through focused, consistent execution.",
    icon: Dumbbell,
  },
  {
    title: "Transform",
    description: "Turn effort into confidence, energy, and visible progress.",
    icon: HeartPulse,
  },
  {
    title: "Maintain",
    description: "Make fitness a lifestyle that stays with you.",
    icon: ShieldCheck,
  },
];

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#dfb866]">
      {children}
    </p>
  );
}

function ImagePanel({ src, alt, className = "" }) {
  return (
    <div
      className={`relative min-h-[22rem] overflow-hidden rounded border border-white/10 bg-cover bg-center shadow-2xl shadow-black/40 ${className}`}
      style={{ backgroundImage: `url(${src})` }}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.64)),linear-gradient(90deg,rgba(223,184,102,0.16),transparent_40%,rgba(255,0,0,0.12))]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#dfb866]/60 to-transparent" />
    </div>
  );
}

export default function AboutUsSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050707] text-white"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,0,0,0.12),transparent_28%),radial-gradient(circle_at_84%_48%,rgba(223,184,102,0.1),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050707_0%,rgba(11,12,12,0.96)_38%,#050707_100%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.65, ease: "easeOut" }}>
            <ImagePanel
              src={images.identity}
              alt="Focused athlete training with intensity inside a premium gym"
              className="lg:min-h-[38rem]"
            />
          </motion.div>

          <motion.div variants={stagger}>
            <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
              <SectionLabel>About KingoGM</SectionLabel>
              <h2
                id="about-heading"
                className="mt-5 max-w-3xl text-3xl font-black uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl"
              >
                WE DON&apos;T JUST BUILD BODIES.
                <span className="mt-3 block text-[#FF0000]">
                  WE BUILD DISCIPLINE, CONFIDENCE, AND LIFESTYLE.
                </span>
              </h2>
            </motion.div>
            <motion.p
              className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              KingoGM is more than a place to train. It is a disciplined environment
              where people develop strength, consistency, confidence, and lifelong
              healthy habits. Every detail exists to help members show up with purpose
              and leave with momentum.
            </motion.p>
            <motion.div
              className="mt-8 grid gap-4 sm:grid-cols-3"
              variants={stagger}
            >
              {["Strength", "Mindset", "Lifestyle"].map((item) => (
                <motion.div
                  key={item}
                  className="border-l border-[#dfb866]/60 bg-white/[0.035] px-4 py-4"
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <p className="text-sm font-black uppercase text-white">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-24 lg:mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.div className="max-w-2xl" variants={fadeUp}>
            <SectionLabel>Our Philosophy</SectionLabel>
            <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
              Built for the days when excuses sound convincing.
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {philosophyCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  className="group rounded border border-white/10 bg-white/[0.045] p-7 shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-[#dfb866]/55 hover:bg-white/[0.07]"
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                >
                  <div className="grid size-12 place-items-center rounded border border-[#dfb866]/35 bg-[#dfb866]/10 transition group-hover:border-[#FF0000]/55 group-hover:bg-[#FF0000]/10">
                    <Icon className="size-6 text-[#dfb866] transition group-hover:text-[#FF0000]" />
                  </div>
                  <h4 className="mt-6 text-xl font-black uppercase leading-tight">{card.title}</h4>
                  <p className="mt-4 text-sm leading-7 text-white/64">{card.description}</p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-24 lg:mt-32">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <SectionLabel>The KingoGM Difference</SectionLabel>
            <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
              A training culture designed around trust, progress, and presence.
            </h3>
          </motion.div>

          <div className="mt-12 space-y-8 lg:space-y-12">
            {differenceItems.map((item, index) => {
              const Icon = item.icon;
              const isReversed = index % 2 === 1;
              return (
                <motion.article
                  key={item.title}
                  className="grid items-stretch gap-0 overflow-hidden rounded border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/25 lg:grid-cols-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.28 }}
                  variants={stagger}
                >
                  <motion.div
                    className={isReversed ? "lg:order-2" : ""}
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <ImagePanel
                      src={item.image}
                      alt={`${item.title} at KingoGM`}
                      className="min-h-[18rem] rounded-none border-0 lg:min-h-[28rem]"
                    />
                  </motion.div>
                  <motion.div
                    className="flex flex-col justify-center p-7 sm:p-10 lg:p-12"
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="grid size-12 place-items-center rounded border border-[#FF0000]/35 bg-[#FF0000]/10">
                      <Icon className="size-6 text-[#FF0000]" />
                    </div>
                    <h4 className="mt-6 text-2xl font-black uppercase sm:text-3xl">{item.title}</h4>
                    <p className="mt-4 max-w-xl text-base leading-8 text-white/68">{item.description}</p>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          className="mt-24 lg:mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.div className="mx-auto max-w-3xl text-center" variants={fadeUp}>
            <SectionLabel>Core Values</SectionLabel>
            <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
              The standards behind every session.
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.title}
                  className="flex items-center gap-4 rounded border border-white/10 bg-black/30 p-5 shadow-xl shadow-black/20 transition hover:border-[#dfb866]/50 hover:bg-white/[0.055]"
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded bg-white/[0.06]">
                    <Icon className="size-5 text-[#dfb866]" />
                  </span>
                  <h4 className="text-lg font-black uppercase">{value.title}</h4>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="mt-24 lg:mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div className="max-w-3xl" variants={fadeUp}>
            <SectionLabel>Transformation Journey</SectionLabel>
            <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
              Progress becomes powerful when the path is clear.
            </h3>
          </motion.div>

          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {journey.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.title}
                  className="relative rounded border border-white/10 bg-white/[0.04] p-6"
                  variants={fadeUp}
                  transition={{ duration: 0.52, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded border border-[#dfb866]/35 bg-[#dfb866]/10">
                      <Icon className="size-6 text-[#dfb866]" />
                    </span>
                    {index < journey.length - 1 && (
                      <ArrowDown className="size-5 text-[#FF0000] lg:-rotate-90" aria-hidden="true" />
                    )}
                  </div>
                  <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-white/38">
                    Step {index + 1}
                  </p>
                  <h4 className="mt-2 text-xl font-black uppercase">{step.title}</h4>
                  <p className="mt-4 text-sm leading-7 text-white/62">{step.description}</p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${images.promise})` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.72)_50%,rgba(0,0,0,0.4)),linear-gradient(180deg,#050707_0%,rgba(0,0,0,0.08)_24%,#050707_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Our Promise</SectionLabel>
              <p className="mt-5 text-3xl font-black uppercase leading-tight sm:text-5xl">
                Our promise is simple.
              </p>
            </motion.div>
            <motion.p
              className="mt-8 text-xl font-semibold leading-9 text-white/86 sm:text-2xl sm:leading-10"
              variants={fadeUp}
            >
              We provide the environment,
              <br />
              the support,
              <br />
              the coaching,
              <br />
              and the accountability.
            </motion.p>
            <motion.p
              className="mt-8 text-2xl font-black uppercase leading-tight text-white sm:text-4xl"
              variants={fadeUp}
            >
              The effort is yours.
              <span className="block text-[#FF0000]">The transformation follows.</span>
            </motion.p>
            <motion.a
              href="/sign-up"
              className="mt-10 inline-flex h-14 items-center justify-center rounded bg-[#FF0000] px-9 text-sm font-black uppercase text-black shadow-2xl shadow-black/30 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#dfb866] focus:ring-offset-2 focus:ring-offset-black"
              variants={fadeUp}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Journey
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
