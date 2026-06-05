"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
  hero:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1800&q=90",
  consultation:
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1800&q=90",
};

const fitnessGoals = [
  "Weight Loss",
  "Muscle Building",
  "Strength Training",
  "General Fitness",
  "Athletic Performance",
  "Other",
];

const contactCards = [
  {
    title: "Phone Number",
    value: "+251 900 000 000",
    detail: "Talk with the KingoGM team",
    href: "tel:+251900000000",
    icon: Phone,
  },
  {
    title: "Email Address",
    value: "hello@kingogm.com",
    detail: "Send goals, questions, or membership requests",
    href: "mailto:hello@kingogm.com",
    icon: Mail,
  },
  {
    title: "Gym Location",
    value: "Addis Ababa, Ethiopia",
    detail: "Modern training facility near the city center",
    href: "https://www.google.com/maps/search/?api=1&query=Addis+Ababa+Ethiopia",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    value: "Monday - Friday: 5:00 AM - 10:00 PM",
    detail: "Saturday - Sunday: 6:00 AM - 8:00 PM",
    href: "#hours",
    icon: Clock,
  },
];

const trustStats = [
  { label: "Response Time", value: "< 24 hrs" },
  { label: "Expert Coaches", value: "15+" },
  { label: "Member Satisfaction", value: "98%" },
  { label: "Free Consultation", value: "Included" },
];

const quickActions = [
  {
    title: "Call Us",
    description: "Speak directly with our team.",
    button: "Call Now",
    href: "tel:+251900000000",
    icon: Phone,
  },
  {
    title: "WhatsApp Support",
    description: "Get quick answers and support.",
    button: "Chat on WhatsApp",
    href: "https://wa.me/251900000000",
    icon: MessageCircle,
  },
  {
    title: "Visit the Gym",
    description: "Tour our facility and meet our team.",
    button: "Get Directions",
    href: "https://www.google.com/maps/search/?api=1&query=Addis+Ababa+Ethiopia",
    icon: Navigation,
  },
];

const faqs = [
  {
    question: "Do I need previous gym experience?",
    answer:
      "No. Our coaches help beginners start safely with clear guidance, proper form, and a plan that fits their current fitness level.",
  },
  {
    question: "Can I try the gym before joining?",
    answer:
      "Yes. You can book a free consultation or visit the facility to meet the team, explore the space, and discuss your goals before choosing a plan.",
  },
  {
    question: "Do you offer personal training?",
    answer:
      "Yes. KingoGM offers one-on-one coaching, performance training, nutrition guidance, and accountability support for focused transformation.",
  },
  {
    question: "What membership options are available?",
    answer:
      "We offer flexible starter, premium, and elite transformation memberships designed around access, coaching level, and support needs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send a message, schedule a consultation, or visit the gym. Our team will help you choose the right first step based on your goal.",
  },
];

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#dfb866]">
      {children}
    </p>
  );
}

function FieldError({ message }) {
  if (!message) return null;

  return <p className="mt-2 text-sm text-[#ff6969]">{message}</p>;
}

export default function ContactUsSection() {
  const [serverMessage, setServerMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      fitnessGoal: "",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    setServerMessage("");
    setSuccessMessage("");

    const contactPayload = {
      fullname: values.fullname.trim(),
      email: values.email.trim().toLowerCase(),
      phone: values.phone.trim(),
      fitnessGoal: values.fitnessGoal,
      message: values.message.trim(),
      createdAt: new Date().toISOString(),
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      console.info("KingoGM contact payload ready for backend:", contactPayload);
      setSuccessMessage("Message sent. Our team will contact you shortly.");
      reset();
    } catch (error) {
      setServerMessage("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050707] text-white"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(255,0,0,0.14),transparent_28%),radial-gradient(circle_at_88%_34%,rgba(223,184,102,0.12),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050707_0%,rgba(13,14,14,0.98)_42%,#050707_100%)]" />

      <div className="relative">
        <motion.div
          className="relative min-h-[34rem] overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${images.hero})` }}
          initial={{ opacity: 0.75, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.68)_48%,rgba(0,0,0,0.3)_100%),linear-gradient(180deg,rgba(0,0,0,0.2)_0%,#050707_100%)]" />
          <motion.div
            className="relative mx-auto flex min-h-[34rem] w-full max-w-7xl flex-col justify-center px-5 py-24 sm:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={stagger}
          >
            <motion.div className="max-w-4xl" variants={fadeUp}>
              <SectionLabel>Contact KingoGM</SectionLabel>
              <h2
                id="contact-heading"
                className="mt-5 max-w-4xl text-3xl font-black uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl"
              >
                READY TO START YOUR TRANSFORMATION?
              </h2>
            </motion.div>
            <motion.p
              className="mt-6 max-w-2xl text-base leading-8 text-white/76 sm:text-lg"
              variants={fadeUp}
            >
              Whether your goal is fat loss, muscle gain, strength development,
              or a healthier lifestyle, our team is ready to help you take the
              first step.
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap gap-3" variants={fadeUp}>
              {["Free consultation", "Expert coaching", "Premium facility"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded border border-white/12 bg-black/35 px-4 py-3 text-sm font-bold text-white/82 backdrop-blur"
                >
                  <CheckCircle2 className="size-4 text-[#dfb866]" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              className="rounded border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/35 backdrop-blur sm:p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>Send A Message</SectionLabel>
                <h3 className="mt-3 text-2xl font-black uppercase leading-tight sm:text-3xl">
                  Tell us where you want to go.
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  Share your goal and our team will help you choose the right
                  coaching, membership, or consultation path.
                </p>
              </motion.div>

              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <motion.div variants={fadeUp}>
                    <label htmlFor="fullname" className="text-sm font-bold text-white/82">
                      Full Name
                    </label>
                    <input
                      id="fullname"
                      type="text"
                      autoComplete="name"
                      className="mt-2 h-12 w-full rounded border border-white/12 bg-black/35 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-[#dfb866] focus:bg-black/50"
                      placeholder="Your full name"
                      {...register("fullname", {
                        required: "Full name is required",
                        minLength: { value: 2, message: "Enter at least 2 characters" },
                      })}
                    />
                    <FieldError message={errors.fullname?.message} />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label htmlFor="email" className="text-sm font-bold text-white/82">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      className="mt-2 h-12 w-full rounded border border-white/12 bg-black/35 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-[#dfb866] focus:bg-black/50"
                      placeholder="you@example.com"
                      {...register("email", {
                        required: "Email address is required",
                        pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email address" },
                      })}
                    />
                    <FieldError message={errors.email?.message} />
                  </motion.div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <motion.div variants={fadeUp}>
                    <label htmlFor="phone" className="text-sm font-bold text-white/82">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-2 h-12 w-full rounded border border-white/12 bg-black/35 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-[#dfb866] focus:bg-black/50"
                      placeholder="+251 900 000 000"
                      {...register("phone", {
                        required: "Phone number is required",
                        minLength: { value: 7, message: "Enter a valid phone number" },
                      })}
                    />
                    <FieldError message={errors.phone?.message} />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label htmlFor="fitnessGoal" className="text-sm font-bold text-white/82">
                      Fitness Goal
                    </label>
                    <select
                      id="fitnessGoal"
                      className="mt-2 h-12 w-full rounded border border-white/12 bg-black/35 px-4 text-white outline-none transition focus:border-[#dfb866] focus:bg-black/50"
                      {...register("fitnessGoal", { required: "Choose a fitness goal" })}
                    >
                      <option value="" className="bg-[#050707]">
                        Select your goal
                      </option>
                      {fitnessGoals.map((goal) => (
                        <option key={goal} value={goal} className="bg-[#050707]">
                          {goal}
                        </option>
                      ))}
                    </select>
                    <FieldError message={errors.fitnessGoal?.message} />
                  </motion.div>
                </div>

                <motion.div variants={fadeUp}>
                  <label htmlFor="message" className="text-sm font-bold text-white/82">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="mt-2 w-full resize-none rounded border border-white/12 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-[#dfb866] focus:bg-black/50"
                    placeholder="Tell us about your goals, schedule, or questions."
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 10, message: "Enter at least 10 characters" },
                    })}
                  />
                  <FieldError message={errors.message?.message} />
                </motion.div>

                <AnimatePresence>
                  {successMessage && (
                    <motion.p
                      className="rounded border border-[#dfb866]/30 bg-[#dfb866]/10 px-4 py-3 text-sm font-bold text-[#f5d99a]"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      {successMessage}
                    </motion.p>
                  )}
                  {serverMessage && (
                    <motion.p
                      className="rounded border border-[#ff6969]/35 bg-[#ff6969]/10 px-4 py-3 text-sm font-bold text-[#ff9a9a]"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      {serverMessage}
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-14 w-full items-center justify-center gap-3 rounded bg-[#FF0000] px-8 text-sm font-black uppercase text-black shadow-xl shadow-black/25 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  whileHover={{ y: isSubmitting ? 0 : -3, scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? <Loader2 className="size-5 animate-spin" /> : null}
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="grid content-start gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={card.title}
                    href={card.href}
                    id={card.title === "Working Hours" ? "hours" : undefined}
                    className="group rounded border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/20 backdrop-blur transition hover:border-[#dfb866]/55 hover:bg-white/[0.07]"
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded border border-[#dfb866]/35 bg-[#dfb866]/10 transition group-hover:border-[#FF0000]/55 group-hover:bg-[#FF0000]/10">
                        <Icon className="size-6 text-[#dfb866] transition group-hover:text-[#FF0000]" />
                      </span>
                      <span>
                        <span className="block text-xs font-black uppercase tracking-[0.18em] text-white/42">
                          {card.title}
                        </span>
                        <span className="mt-2 block text-lg font-black text-white">{card.value}</span>
                        <span className="mt-2 block text-sm leading-6 text-white/58">{card.detail}</span>
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            className="mt-20 grid gap-5 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <motion.article
                  key={action.title}
                  className="group rounded border border-white/10 bg-black/34 p-7 shadow-xl shadow-black/25 backdrop-blur transition hover:border-[#dfb866]/55 hover:bg-white/[0.06]"
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Icon className="size-8 text-[#dfb866] transition group-hover:text-[#FF0000]" />
                  <h3 className="mt-6 text-xl font-black uppercase">{action.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{action.description}</p>
                  <a
                    href={action.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-[#dfb866] transition group-hover:text-white"
                  >
                    {action.button}
                    <ArrowRight className="size-4" />
                  </a>
                </motion.article>
              );
            })}
          </motion.div>

          <motion.div
            className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            {trustStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded border border-white/10 bg-white/[0.04] px-5 py-6 text-center backdrop-blur"
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <p className="text-2xl font-black text-[#dfb866] sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-white/52">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-24 grid gap-8 lg:grid-cols-[0.86fr_1.14fr]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Find Us</SectionLabel>
              <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
                FIND US
              </h3>
              <p className="mt-5 text-base leading-8 text-white/68">
                Visit KingoGM in Addis Ababa for a facility tour, consultation,
                or a conversation with our coaching team.
              </p>
              <div className="mt-7 grid gap-4">
                {[
                  { label: "Address", value: "Addis Ababa, Ethiopia", icon: MapPin },
                  { label: "Parking", value: "Member and visitor parking available near the facility.", icon: Navigation },
                  { label: "Nearby", value: "Close to central business and neighborhood access roads.", icon: ShieldCheck },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-4 border-l border-[#dfb866]/45 bg-white/[0.035] px-4 py-4">
                      <Icon className="mt-1 size-5 shrink-0 text-[#dfb866]" />
                      <div>
                        <p className="text-sm font-black uppercase text-white">{item.label}</p>
                        <p className="mt-1 text-sm leading-6 text-white/60">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="min-h-[24rem] overflow-hidden rounded border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/35"
              variants={fadeUp}
            >
              <iframe
                title="KingoGM gym location map"
                src="https://www.google.com/maps?q=Addis%20Ababa%20Ethiopia&output=embed"
                className="h-[24rem] w-full border-0 grayscale invert-[0.9] contrast-125 lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-24 grid gap-10 lg:grid-cols-[0.86fr_1.14fr]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Questions</SectionLabel>
              <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
                Frequently Asked Questions
              </h3>
              <p className="mt-5 text-base leading-8 text-white/68">
                A confident first step comes from knowing what to expect. Here
                are the most common questions before joining KingoGM.
              </p>
            </motion.div>

            <motion.div className="grid gap-3" variants={stagger}>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div
                    key={faq.question}
                    className="overflow-hidden rounded border border-white/10 bg-white/[0.045]"
                    variants={fadeUp}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-black uppercase leading-6 text-white sm:text-base">
                        {faq.question}
                      </span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDown className="size-5 text-[#dfb866]" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                          <p className="px-5 pb-5 text-sm leading-7 text-white/62">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-24 overflow-hidden rounded border border-white/10 bg-cover bg-center shadow-2xl shadow-black/40"
            style={{ backgroundImage: `url(${images.consultation})` }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.28 }}
            variants={stagger}
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9),rgba(0,0,0,0.62),rgba(0,0,0,0.38)),linear-gradient(180deg,rgba(255,0,0,0.18),rgba(0,0,0,0.72))]" />
            <div className="relative px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
              <motion.div className="max-w-3xl" variants={fadeUp}>
                <SectionLabel>Free Consultation</SectionLabel>
                <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-5xl">
                  BOOK YOUR FREE FITNESS CONSULTATION
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">
                  Meet with our team, discuss your goals, and receive guidance
                  on the best path toward your transformation.
                </p>
                <motion.a
                  href="#contact-form"
                  className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded bg-[#FF0000] px-8 text-sm font-black uppercase text-black shadow-xl shadow-black/25 transition hover:bg-white"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CalendarCheck className="size-5" />
                  Schedule Consultation
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="mt-14 rounded border border-[#dfb866]/25 bg-[#dfb866]/[0.08] px-6 py-12 text-center shadow-2xl shadow-black/25 sm:px-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <div className="mx-auto grid size-14 place-items-center rounded border border-[#dfb866]/35 bg-black/28">
                <Sparkles className="size-7 text-[#dfb866]" />
              </div>
              <h3 className="mt-6 text-3xl font-black uppercase leading-tight sm:text-5xl">
                YOUR FITNESS JOURNEY STARTS TODAY
              </h3>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68">
                The first step is often the hardest. We&apos;re here to help you make it.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <motion.a
                  href="#membership"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded bg-[#FF0000] px-8 text-sm font-black uppercase text-black transition hover:bg-white"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <UsersRound className="size-5" />
                  Join Now
                </motion.a>
                <motion.a
                  href="#contact-form"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded border border-white/18 px-8 text-sm font-black uppercase text-white transition hover:border-[#dfb866] hover:bg-[#dfb866] hover:text-black"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="size-5" />
                  Contact Our Team
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
