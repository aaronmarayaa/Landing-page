import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Palette, TrendingUp } from "lucide-react";
import symbol from "@/assets/ascend-symbol.png";

const values = [
  {
    number: "01",
    icon: Palette,
    title: "Design",
    text: "Clear hierarchy, thoughtful visuals, and experiences that feel easy to understand.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Develop",
    text: "Fast, responsive, scalable websites built around your business instead of a rigid template.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Grow",
    text: "Digital strategy, social media, SEO, and paid campaigns that support measurable growth.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f5f3ee] py-24 sm:py-32">
      <div className="absolute -left-36 top-0 h-[34rem] w-[34rem] opacity-[0.035]">
        <img src={symbol} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="absolute -right-28 bottom-0 h-[30rem] w-[30rem] opacity-[0.035]">
        <img src={symbol} alt="" className="h-full w-full object-contain" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#bd7823]">
              About Ascend Logix
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#101619] sm:text-5xl">
              We don't settle for
              <span className="block text-[#0d5978]">good enough.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-2xl font-medium leading-[1.45] tracking-[-0.025em] text-[#1f292d] sm:text-3xl">
              At <span className="text-[#c47d23]">Ascend</span>{" "}
              <span className="text-[#0d5978]">Logix</span>, 
                we build digital solutions that fit your business, 
                your goals and your needs.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[#4d5a5f] sm:text-lg">
              We bring design, development, and growth strategy together without
              losing the individual focus each discipline needs. That creates a
              clearer process and a more consistent experience for your brand.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-black/8 bg-black/8 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.number}
                className="group bg-[#f5f3ee] p-7 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-black/8 bg-white/40">
                    <Icon className="h-5 w-5 text-[#b97626]" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#a1a8aa]">
                    {value.number}
                  </span>
                </div>

                <h3 className="mt-14 text-2xl font-semibold tracking-[-0.03em] text-[#172025]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#657176]">
                  {value.text}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8f999d] transition group-hover:text-[#b97626]">
                  Core discipline
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
