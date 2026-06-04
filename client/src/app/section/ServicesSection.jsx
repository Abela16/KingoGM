"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarCheck,
  ClipboardCheck,
  Dumbbell,
  Gauge,
  HeartPulse,
  LineChart,
  MessagesSquare,
  Salad,
  ShieldCheck,
  Target,
  Trophy,
  UsersRound,
} from "lucide-react";
import { useEffect, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
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
  featured:
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1500&q=88",
  oneOnOne:
    "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1000&q=88",
  group:
    "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=1000&q=88",
  nutrition:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=88",
  online:
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1000&q=88",
  performance:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=88",
  cta:
    "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1800&q=90",
};

const featuredBenefits = [
  { label: "Personalized workout programs", icon: ClipboardCheck },
  { label: "Goal tracking and progress monitoring", icon: LineChart },
  { label: "Nutrition guidance", icon: Salad },
  { label: "Accountability coaching", icon: CalendarCheck },
  { label: "Performance assessments", icon: Gauge },
];

const services = [
  {
    title: "One-on-One Coaching",
    description:
      "Personalized training sessions designed around individual goals, experience level, and physical condition.",
    image: images.oneOnOne,
    icon: Target,
  },
  {
    title: "Group Training",
    description:
      "Motivating group workouts that combine accountability, community, and professional coaching.",
    image: images.group,
    icon: UsersRound,
  },
  {
    title: "Nutrition Planning",
    description:
      "Custom nutrition strategies designed to support fat loss, muscle growth, energy, and recovery.",
    image: images.nutrition,
    icon: Salad,
  },
  {
    title: "Online Coaching",
    description:
      "Remote fitness coaching with workout plans, progress tracking, and continuous support.",
    image: images.online,
    icon: MessagesSquare,
  },
  {
    title: "Performance Training",
    description:
      "Advanced programs designed for athletes and individuals seeking peak physical performance.",
    image: images.performance,
    icon: Trophy,
  },
];

const processSteps = [
  {
    step: "Step 1",
    title: "Consultation",
    description: "Fitness assessment and goal discovery.",
    icon: ClipboardCheck,
  },
  {
    step: "Step 2",
    title: "Custom Strategy",
    description: "Personalized training and nutrition planning.",
    icon: Target,
  },
  {
    step: "Step 3",
    title: "Guided Training",
    description: "Professional coaching and progress tracking.",
    icon: Dumbbell,
  },
  {
    step: "Step 4",
    title: "Transformation",
    description: "Sustainable results through consistency and accountability.",
    icon: HeartPulse,
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Transformations Completed", icon: BadgeCheck },
  { value: 2000, suffix: "+", label: "Members Trained", icon: UsersRound },
  { value: 95, suffix: "%", label: "Client Satisfaction", icon: ShieldCheck },
  { value: 5, suffix: "+", label: "Years of Coaching Experience", icon: BarChart3 },
];

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#dfb866]">
      {children}
    </p>
  );
}

function AnimatedStat({ value, suffix, label, icon: Icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (!isInView) return undefined;

    const controls = animate(count, value, {
      duration: 1.6,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, isInView, value]);

  return (
    <motion.article
      ref={ref}
      className="rounded border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/20 transition hover:border-[#dfb866]/45 hover:bg-white/[0.065]"
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="flex items-start justify-between gap-4">
        <Icon className="size-7 text-[#dfb866]" />
        <motion.p className="text-4xl font-black uppercase text-white sm:text-5xl">
          {rounded}
        </motion.p>
      </div>
      <p className="mt-5 text-sm font-bold uppercase leading-6 text-white/64">{label}</p>
    </motion.article>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050707] text-white"
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(223,184,102,0.12),transparent_28%),radial-gradient(circle_at_88%_28%,rgba(255,0,0,0.13),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050707_0%,rgba(13,14,14,0.98)_48%,#050707_100%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
            <SectionLabel>Services</SectionLabel>
            <h2
              id="services-heading"
              className="mt-5 text-3xl font-black uppercase leading-[1.04] sm:text-5xl lg:text-6xl"
            >
              TRANSFORMATION STARTS WITH THE RIGHT SYSTEM
            </h2>
          </motion.div>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Whether your goal is fat loss, muscle building, strength development,
            athletic performance, or long-term health, our coaching systems are
            designed to deliver measurable results.
          </motion.p>
        </motion.div>

        <motion.article
          className="mt-14 overflow-hidden rounded border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/35 lg:grid lg:grid-cols-[1.05fr_0.95fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.div
            className="relative min-h-[23rem] overflow-hidden bg-cover bg-center lg:min-h-[38rem]"
            style={{ backgroundImage: `url(${images.featured})` }}
            role="img"
            aria-label="Personal coaching session focused on measurable transformation"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.68)),linear-gradient(90deg,rgba(255,0,0,0.12),transparent_45%,rgba(223,184,102,0.12))]" />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center p-7 sm:p-10 lg:p-12"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Featured System</SectionLabel>
              <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
                Elite Personal Coaching
              </h3>
              <p className="mt-5 text-base leading-8 text-white/68">
                A focused transformation system built around your body, your schedule,
                your goals, and the accountability needed to keep progress moving.
              </p>
            </motion.div>

            <motion.div className="mt-7 grid gap-3" variants={stagger}>
              {featuredBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.label}
                    className="flex items-center gap-3 border-l border-[#dfb866]/45 bg-black/24 px-4 py-3"
                    variants={fadeUp}
                  >
                    <Icon className="size-5 shrink-0 text-[#dfb866]" />
                    <span className="text-sm font-bold text-white/82">{benefit.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.a
              href="/sign-up"
              className="mt-8 inline-flex h-14 w-fit items-center justify-center gap-2 rounded bg-[#FF0000] px-8 text-sm font-black uppercase text-black shadow-2xl shadow-black/25 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#dfb866] focus:ring-offset-2 focus:ring-offset-black"
              variants={fadeUp}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Transformation
              <ArrowRight className="size-4" />
            </motion.a>
          </motion.div>
        </motion.article>

        <motion.div
          className="mt-24 lg:mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          <motion.div className="max-w-3xl" variants={fadeUp}>
            <SectionLabel>Coaching Services</SectionLabel>
            <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
              Goal-based programs for real, trackable progress.
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  className={`group overflow-hidden rounded border border-white/10 bg-white/[0.045] shadow-xl shadow-black/20 transition hover:border-[#dfb866]/50 hover:bg-white/[0.065] ${
                    index === services.length - 1 ? "md:col-span-2 xl:col-span-1" : ""
                  }`}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                >
                  <div
                    className="relative min-h-64 overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                    role="img"
                    aria-label={`${service.title} at KingoGM`}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.72))]" />
                    <div className="absolute left-5 top-5 grid size-11 place-items-center rounded border border-white/15 bg-black/45 backdrop-blur">
                      <Icon className="size-5 text-[#dfb866]" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-black uppercase leading-tight">{service.title}</h4>
                    <p className="mt-4 min-h-24 text-sm leading-7 text-white/62">{service.description}</p>
                    <a
                      href="/sign-up"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-[#dfb866] transition group-hover:text-[#FF0000]"
                    >
                      Learn More
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="mt-24 lg:mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={stagger}
        >
          <motion.div className="mx-auto max-w-3xl text-center" variants={fadeUp}>
            <SectionLabel>Transformation Process</SectionLabel>
            <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
              HOW WE HELP YOU SUCCEED
            </h3>
          </motion.div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className="relative rounded border border-white/10 bg-black/32 p-6 shadow-xl shadow-black/20"
                  variants={fadeUp}
                  transition={{ duration: 0.52, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded border border-[#FF0000]/35 bg-[#FF0000]/10">
                      <Icon className="size-6 text-[#FF0000]" />
                    </span>
                    {index < processSteps.length - 1 && (
                      <ArrowDown className="size-5 text-[#dfb866] lg:-rotate-90" aria-hidden="true" />
                    )}
                  </div>
                  <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-white/38">
                    {item.step}
                  </p>
                  <h4 className="mt-2 text-xl font-black uppercase">{item.title}</h4>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
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
            <SectionLabel>Results & Trust</SectionLabel>
            <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
              Systems measured by progress, not promises.
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${images.cta})` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.76)_52%,rgba(0,0,0,0.42)),linear-gradient(180deg,#050707_0%,rgba(0,0,0,0.08)_28%,#050707_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Start Strong</SectionLabel>
              <h3 className="mt-5 text-3xl font-black uppercase leading-tight sm:text-5xl">
                YOUR GOALS DESERVE MORE THAN GUESSWORK.
              </h3>
            </motion.div>
            <motion.p
              className="mt-6 max-w-2xl text-base leading-8 text-white/76 sm:text-lg"
              variants={fadeUp}
            >
              Train with a proven system designed to help you achieve lasting
              results through expert coaching, accountability, and consistency.
            </motion.p>
            <motion.div className="mt-9 flex flex-col gap-4 sm:flex-row" variants={fadeUp}>
              <motion.a
                href="/sign-up"
                className="inline-flex h-14 items-center justify-center rounded bg-[#FF0000] px-9 text-sm font-black uppercase text-black shadow-2xl shadow-black/30 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#dfb866] focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Now
              </motion.a>
              <motion.a
                href="#membership"
                className="inline-flex h-14 items-center justify-center rounded border border-white/30 bg-white/[0.04] px-9 text-sm font-black uppercase text-white transition hover:border-[#dfb866] hover:bg-[#dfb866] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#dfb866] focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Membership Plans
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
