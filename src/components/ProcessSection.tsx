import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Meet & Plan",
    description:
      "We start by meeting with you to learn about your business, goals, audience and what you want to achieve.",
  },
  {
    number: "02",
    title: "Design & Develop",
    description:
      "We turn your ideas into a strategy, design or digital solution tailored to your business.",
  },
  {
    number: "03",
    title: "Deploy & Grow",
    description:
      "Once everything is ready, we launch, monitor performance and stay in communication to improve results and help your business grow.",
  },
];

const stairSpacing = ["md:mt-0", "md:mt-12", "md:mt-24"];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f3ee] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(217,139,43,.06),transparent_27%),radial-gradient(circle_at_90%_80%,rgba(13,89,120,.06),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#bd7823]">
            Our process
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#101619] sm:text-5xl md:text-6xl">
            A clear path from
            <span className="block text-[#0d5978]">idea to growth.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#59666a] sm:text-lg">
            Three straightforward stages keep the work focused, collaborative,
            and moving forward.
          </p>
        </div>

        <div className="relative mt-16 pb-2 md:pb-24">
          {/* Staircase connector */}
          <svg
            className="pointer-events-none absolute inset-x-[3%] top-2 hidden h-[210px] w-[94%] overflow-visible md:block"
            viewBox="0 0 1000 210"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="processLine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#d98b2b" stopOpacity="0.32" />
                <stop offset="52%" stopColor="#d5a34c" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#0d5978" stopOpacity="0.35" />
              </linearGradient>

              <filter id="processGlow" x="-200%" y="-200%" width="400%" height="400%">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M 85 33 L 500 92 L 915 151"
              fill="none"
              stroke="url(#processLine)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <circle
              r="6"
              fill="#f0b14f"
              filter="url(#processGlow)"
              opacity="0.95"
            >
              <animateMotion
                dur="3.4s"
                repeatCount="indefinite"
                path="M 85 33 L 500 92 L 915 151"
              />
            </circle>

            <circle
              r="2.4"
              fill="#ffffff"
              opacity="0.9"
            >
              <animateMotion
                dur="3.4s"
                repeatCount="indefinite"
                path="M 85 33 L 500 92 L 915 151"
              />
            </circle>
          </svg>

          <div className="relative grid gap-5 md:grid-cols-3 md:gap-6">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`group relative rounded-[2rem] border border-black/[0.08] bg-white/72 p-7 shadow-[0_16px_50px_rgba(24,39,45,.055)] backdrop-blur-sm transition-[border-color,box-shadow,background-color] duration-500 hover:border-[#d98b2b]/22 hover:bg-white/88 hover:shadow-[0_22px_65px_rgba(20,43,54,.10)] sm:p-8 ${stairSpacing[index]}`}
              >
                <div className="relative z-10 flex items-center gap-3">
                  <div className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-full border border-black/[0.08] bg-[#10191e] text-sm font-bold tracking-[0.08em] text-white shadow-[0_8px_24px_rgba(0,0,0,.12)]">
                    <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(217,139,43,.24),transparent_45%,rgba(13,89,120,.22))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="relative">{step.number}</span>
                  </div>

                  {index < steps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-[#bd7823] md:hidden" />
                  )}
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em] text-[#172025]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#68757a] sm:text-[15px]">
                  {step.description}
                </p>

                <div className="mt-8">
                  <div className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.14em] text-[#7b8589]">
                    <span>Progress</span>
                    <span>0{index + 1} / 03</span>
                  </div>

                  <div className="relative h-1.5 overflow-hidden rounded-full bg-black/[0.06]">
                    <div
                      className="relative h-full overflow-hidden rounded-full bg-[linear-gradient(90deg,#e7a347_0%,#d98b2b_27%,#0d5978_58%,#1680a5_76%,#e7a347_100%)] bg-[length:220%_100%] bg-left shadow-none transition-[background-position,box-shadow] duration-1000 ease-[cubic-bezier(.22,1,.36,1)] group-hover:bg-right group-hover:shadow-[0_0_10px_rgba(217,139,43,.75),0_0_18px_rgba(13,89,120,.48)]"
                      style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                    >
                      <span className="absolute inset-y-0 left-[-18px] w-4 bg-white/80 blur-[3px] transition-transform duration-[1100ms] ease-out group-hover:translate-x-[440px]" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
