import {
  Code2,
  Gauge,
  Layers3,
  MoveUpRight,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#f7f7f4] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(217,139,43,.06),transparent_27%),radial-gradient(circle_at_90%_88%,rgba(13,89,120,.055),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c77d22]">
              Why Ascend Logix
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#11191d] sm:text-5xl md:text-6xl">
              More control.
              <br />
              Less compromise.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#657176] sm:text-lg">
              Our approach keeps the flexibility and professional control of
              custom work while making the final experience easy for your
              audience.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-black/[0.08] bg-black/[0.08] sm:grid-cols-2">
            {points.map((point) => {
              const Icon = point.icon;

              return (
                <article
                  key={point.title}
                  className="group bg-[#fbfaf7] p-7 transition-colors duration-300 hover:bg-white"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-black/[0.07] bg-white">
                    <Icon className="h-5 w-5 text-[#d98b2b]" />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-[#172025]">
                    {point.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#68757a]">
                    {point.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
