"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  Crown,
  Dumbbell,
  Gem,
  HeartPulse,
  LineChart,
  Medal,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  X,
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

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for beginners taking their first step toward a healthier lifestyle.",
    price: "$29",
    cta: "Get Started",
    icon: Dumbbell,
    features: [
      "Full Gym Access",
      "Fitness Assessment",
      "Locker Room Access",
      "Community Support",
      "Basic Progress Tracking",
    ],
  },
  {
    name: "Premium",
    badge: "MOST POPULAR",
    tagline: "Designed for members committed to achieving measurable results.",
    price: "$59",
    cta: "Join Premium",
    icon: Crown,
    featured: true,
    features: [
      "Everything in Starter",
      "Personalized Workout Plan",
      "Nutrition Guidance",
      "Progress Monitoring",
      "Priority Member Support",
      "Monthly Fitness Review",
    ],
  },
  {
    name: "Elite Transformation",
    tagline: "The ultimate fitness experience with maximum coaching and accountability.",
    price: "$99",
    cta: "Become Elite",
    icon: Gem,
    features: [
      "Everything in Premium",
      "One-on-One Coaching",
      "Advanced Nutrition Planning",
      "Transformation Tracking",
      "VIP Support",
      "Exclusive Member Benefits",
    ],
  },
];

const comparisonRows = [
  { feature: "Gym Access", starter: "Full access", premium: "Full access", elite: "Full access" },
  { feature: "Workout Plans", starter: "Basic guidance", premium: "Personalized", elite: "Advanced custom" },
  { feature: "Nutrition Support", starter: false, premium: "Guidance", elite: "Advanced planning" },
  { feature: "Progress Tracking", starter: "Basic", premium: "Monitored", elite: "Transformation tracking" },
  { feature: "Personal Coaching", starter: false, premium: false, elite: "One-on-one" },
  { feature: "VIP Benefits", starter: false, premium: false, elite: true },
];

const trustCards = [
  {
    title: "Expert Guidance",
    description: "Receive support from experienced fitness professionals.",
    icon: Medal,
  },
  {
    title: "Results-Focused Programs",
    description: "Structured systems designed for measurable progress.",
    icon: Target,
  },
  {
    title: "Supportive Community",
    description: "Train alongside motivated individuals pursuing similar goals.",
    icon: UsersRound,
  },
  {
    title: "Flexible Membership Options",
    description: "Choose the membership that aligns with your lifestyle and objectives.",
    icon: ShieldCheck,
  },
];

const journeySteps = [
  {
    title: "Join",
    description: "Choose the membership that matches your goals.",
    icon: BadgeCheck,
  },
  {
    title: "Assessment",
    description: "Understand your current fitness level.",
    icon: ClipboardCheck,
  },
  {
    title: "Custom Plan",
    description: "Receive a structured roadmap for success.",
    icon: LineChart,
  },
  {
    title: "Train Consistently",
    description: "Build discipline through guided training.",
    icon: Dumbbell,
  },
  {
    title: "Transform",
    description: "Achieve sustainable physical and mental growth.",
    icon: HeartPulse,
  },
];

const stats = [
  { value: 2000, suffix: "+", label: "Active Members", icon: UsersRound },
  { value: 500, suffix: "+", label: "Transformations Completed", icon: Sparkles },
  { value: 92, suffix: "%", label: "Monthly Goal Progress", icon: Target },
  { value: 24, suffix: "/7", label: "Member Support Access", icon: MessagesSquare },
];

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#dfb866]">
      {children}
    </p>
  );
}

function FeatureValue({ value }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center text-[#dfb866]" aria-label="Included">
        <Check className="size-5" />
      </span>
    );
  }

  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center text-white/28" aria-label="Not included">
        <X className="size-5" />
      </span>
    );
  }

  return <span>{value}</span>;
}

function AnimatedStat({ value, suffix, label, icon: Icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.45 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (!isInView) return undefined;

    const controls = animate(count, value, {
      duration: 1.55,
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
        <Icon className="size-7 shrink-0 text-[#dfb866]" />
        <motion.p className="text-right text-4xl font-black uppercase text-white sm:text-5xl">
          {rounded}
        </motion.p>
      </div>
      <p className="mt-5 text-sm font-bold uppercase leading-6 text-white/64">{label}</p>
    </motion.article>
  );
}

export default function MembershipPlansSection() {
  return (
    <section
      id="membership"
      className="relative overflow-hidden bg-[#050707] text-white"
      aria-labelledby="membership-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(255,0,0,0.13),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(223,184,102,0.14),transparent_30%),radial-gradient(circle_at_48%_88%,rgba(255,255,255,0.06),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050707_0%,rgba(11,12,12,0.98)_45%,#050707_100%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
            <SectionLabel>Membership</SectionLabel>
            <h2
              id="membership-heading"
              className="mt-5 text-3xl font-black uppercase leading-[1.04] sm:text-5xl lg:text-6xl"
            >
              MEMBERSHIP PLANS BUILT FOR REAL RESULTS
            </h2>
          </motion.div>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Whether you&apos;re starting your fitness journey, pursuing long-term
            transformation, or striving for peak performance, we have a membership
            designed to help you achieve your goals.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid items-stretch gap-5 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <motion.article
                key={plan.name}
                className={`relative flex flex-col rounded border p-6 shadow-2xl backdrop-blur transition sm:p-7 ${
                  plan.featured
                    ? "border-[#dfb866]/65 bg-[linear-gradient(180deg,rgba(223,184,102,0.16),rgba(255,255,255,0.055))] shadow-[#dfb866]/10 lg:-mt-5 lg:mb-5"
                    : "border-white/10 bg-white/[0.045] shadow-black/25"
                }`}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
              >
                {plan.badge && (
                  <div className="absolute right-5 top-5 rounded bg-[#FF0000] px-3 py-1.5 text-[0.68rem] font-black uppercase text-white shadow-xl shadow-[#FF0000]/20">
                    {plan.badge}
                  </div>
                )}

                <div className="grid size-13 place-items-center rounded border border-[#dfb866]/35 bg-[#dfb866]/10">
                  <Icon className="size-6 text-[#dfb866]" />
                </div>
                <h3 className="mt-7 text-2xl font-black uppercase leading-tight sm:text-3xl">{plan.name}</h3>
                <p className="mt-4 min-h-20 text-sm leading-7 text-white/64">{plan.tagline}</p>

                <div className="mt-7 flex items-end gap-2">
                  <p className="text-5xl font-black tracking-normal text-white">{plan.price}</p>
                  <p className="pb-2 text-sm font-bold uppercase text-white/48">/ month</p>
                </div>

                <div className="mt-8 grid gap-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-white/76">
                      <span className="grid size-6 shrink-0 place-items-center rounded bg-[#dfb866]/12 text-[#dfb866]">
                        <Check className="size-4" />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.a
                  href="/sign-up"
                  className={`mt-9 inline-flex h-14 items-center justify-center gap-2 rounded px-7 text-sm font-black uppercase transition focus:outline-none focus:ring-2 focus:ring-[#dfb866] focus:ring-offset-2 focus:ring-offset-black ${
                    plan.featured
                      ? "bg-[#FF0000] text-black shadow-xl shadow-[#FF0000]/20 hover:bg-white"
                      : "border border-white/20 bg-white/[0.04] text-white hover:border-[#dfb866] hover:bg-[#dfb866] hover:text-black"
                  }`}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                  <ArrowRight className="size-4" />
                </motion.a>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-24 lg:mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={stagger}
        >
          <motion.div className="max-w-3xl" variants={fadeUp}>
            <SectionLabel>Compare Plans</SectionLabel>
            <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
              Choose by the support you need, not just the price.
            </h3>
          </motion.div>

          <motion.div
            className="mt-10 overflow-x-auto rounded border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/25"
            variants={fadeUp}
          >
            <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-black/30">
                  {["Feature", "Starter", "Premium", "Elite"].map((heading) => (
                    <th key={heading} className="px-5 py-5 text-xs font-black uppercase tracking-[0.16em] text-white/62">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/8 last:border-b-0">
                    <td className="px-5 py-5 font-black uppercase text-white">{row.feature}</td>
                    <td className="px-5 py-5 font-semibold text-white/68"><FeatureValue value={row.starter} /></td>
                    <td className="px-5 py-5 font-semibold text-[#dfb866]"><FeatureValue value={row.premium} /></td>
                    <td className="px-5 py-5 font-semibold text-white/82"><FeatureValue value={row.elite} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-24 lg:mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={stagger}
        >
          <motion.div className="mx-auto max-w-3xl text-center" variants={fadeUp}>
            <SectionLabel>Why Choose KingoGM</SectionLabel>
            <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
              A membership built around momentum, clarity, and accountability.
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  className="rounded border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/20 transition hover:border-[#dfb866]/50 hover:bg-white/[0.065]"
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="grid size-12 place-items-center rounded border border-[#FF0000]/35 bg-[#FF0000]/10">
                    <Icon className="size-6 text-[#FF0000]" />
                  </div>
                  <h4 className="mt-6 text-lg font-black uppercase leading-tight">{card.title}</h4>
                  <p className="mt-4 text-sm leading-7 text-white/62">{card.description}</p>
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
            <SectionLabel>Membership Journey</SectionLabel>
            <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
              YOUR JOURNEY STARTS HERE
            </h3>
          </motion.div>

          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.title}
                  className="relative rounded border border-white/10 bg-black/32 p-6 shadow-xl shadow-black/20"
                  variants={fadeUp}
                  transition={{ duration: 0.52, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded border border-[#dfb866]/35 bg-[#dfb866]/10">
                      <Icon className="size-6 text-[#dfb866]" />
                    </span>
                    {index < journeySteps.length - 1 && (
                      <ArrowDown className="size-5 text-[#FF0000] lg:-rotate-90" aria-hidden="true" />
                    )}
                  </div>
                  <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-white/38">
                    Step {index + 1}
                  </p>
                  <h4 className="mt-2 text-xl font-black uppercase leading-tight">{step.title}</h4>
                  <p className="mt-4 text-sm leading-7 text-white/62">{step.description}</p>
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
            <SectionLabel>Trust & Statistics</SectionLabel>
            <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
              Real members. Real progress. Real standards.
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
