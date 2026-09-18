import {
  Code2,
  Gauge,
  Layers3,
  MoveUpRight,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const points = [
  {
    icon: Sparkles,
    title: "Professional",
    text: "Clear visual systems and polished execution from the first screen to the final detail.",
  },
  {
    icon: SlidersHorizontal,
    title: "Full Control",
    text: "Custom solutions give you more control than restrictive drag-and-drop platforms.",
  },
  {
    icon: Layers3,
    title: "Customizable",
    text: "Built around your brand and goals instead of forcing your business into a generic template.",
  },
  {
    icon: Gauge,
    title: "Performance-minded",
    text: "Responsive layouts, fast interactions, and purposeful design choices that support usability.",
  },
  {
    icon: Code2,
    title: "Built to Scale",
    text: "A flexible foundation that can evolve as your content, services, and audience grow.",
  },
  {
    icon: MoveUpRight,
    title: "Growth-focused",
    text: "Design, development, SEO, PPC, and social strategy can work together instead of in isolation.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-[#0a202d] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.018),transparent_24%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="Why Ascend Logix"
            title="More control. Less compromise."
            description="Your reference graphic highlights the trade-offs between custom development and drag-and-drop platforms. Our approach keeps the flexibility and professional control of custom work while making the final experience easy for your audience."
          />

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
            {points.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="group bg-[#0a202d] p-7 transition hover:bg-white/[0.035]"
                >
                  <Icon className="h-5 w-5 text-[#e09a3c]" />
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-white">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/52">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
