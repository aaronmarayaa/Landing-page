import { ArrowRight, MousePointer2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import homeVisual from "@/assets/ascend-home-visual.png";

const serviceStrip = [
  "Web Design",
  "Web Development",
  "Graphic Design",
  "Social Media",
  "SEO & PPC",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 -z-30 bg-[#06141d]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_14%_20%,rgba(225,154,53,.20),transparent_26%),radial-gradient(circle_at_85%_36%,rgba(13,89,120,.28),transparent_28%),linear-gradient(180deg,#06141d_0%,#071923_52%,#07141d_100%)]" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-35" />
      <div className="absolute -left-40 top-36 -z-10 h-96 w-96 rounded-full bg-[#d98b2b]/10 blur-3xl" />
      <div className="absolute -right-36 top-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#0d5978]/20 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 px-5 pb-14 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#e5a345]" />
            Future-ready digital experiences
          </div>

          <h1 className="max-w-4xl overflow-visible text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl xl:text-[5.9rem]">
            Build beyond
            <span className="brand-gradient-text block pb-[0.10em]">good enough.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
            Ascend Logix creates modern websites, powerful digital experiences,
            and strategic marketing solutions designed to help businesses move
            forward with confidence.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contact">
                Start a Project <ArrowRight className="h-4 w-4" />
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-3 text-sm text-white/45">
            <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
              <MousePointer2 className="h-4 w-4" />
            </div>
            <span>Scroll to explore Ascend Logix</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
          className="relative mx-auto hidden w-full max-w-xl items-center justify-center lg:flex lg:justify-end"
        >
          <div className="absolute -left-8 top-12 h-48 w-48 rounded-full bg-[#d98b2b]/16 blur-[80px]" />
          <div className="absolute -right-8 bottom-10 h-52 w-52 rounded-full bg-[#0d5978]/22 blur-[90px]" />

          <div className="relative w-[92%] overflow-hidden rounded-[2rem] bg-[#06141d] shadow-[0_35px_100px_rgba(0,0,0,.30)]">
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[2rem]" />

            <img
              src={homeVisual}
              alt="Ascend Logix brand and website concept"
              className="aspect-[4/5] w-full object-cover object-top"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#06141d]/45 to-transparent" />
          </div>
        </motion.div>
      </div>

      <div className="border-y border-white/[0.08] bg-white/[0.025]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/38 sm:px-8 md:justify-between">
          {serviceStrip.map((service, index) => (
            <div key={service} className="flex items-center gap-8">
              <span>{service}</span>
              {index !== serviceStrip.length - 1 && (
                <span className="hidden h-1 w-1 rounded-full bg-[#d98b2b]/70 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
