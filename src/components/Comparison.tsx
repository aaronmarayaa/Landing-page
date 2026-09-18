import { Check, X } from "lucide-react";

const rows = [
  ["Direct Marketer Access", true, false],
  ["Focused Marketing Team", true, false],
  ["Fewer Communication Layers", true, false],
  ["Direct Specialist Access", true, false],

  // Shared capabilities stay grouped at the bottom.
  ["Personalized Strategy", true, true],
  ["Dedicated Support", true, true],
  ["Flexible Service Options", true, true],
  ["Client Final Approval", true, true],
  ["Performance Reporting", true, true],
  ["Long-Term Growth", true, true],
] as const;

function StatusIcon({ yes }: { yes: boolean }) {
  return yes ? (
    <span className="mx-auto grid h-6 w-6 place-items-center rounded-full border border-emerald-400/25 bg-emerald-400/10 sm:h-7 sm:w-7 md:h-8 md:w-8">
      <Check
        className="h-3 w-3 text-emerald-300 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"
        strokeWidth={2.4}
      />
    </span>
  ) : (
    <span className="mx-auto grid h-6 w-6 place-items-center rounded-full border border-rose-400/20 bg-rose-400/8 sm:h-7 sm:w-7 md:h-8 md:w-8">
      <X
        className="h-3 w-3 text-rose-300 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"
        strokeWidth={2.4}
      />
    </span>
  );
}

export default function Comparison() {
  return (
    <section className="relative overflow-hidden bg-[#f5f3ee] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(13,89,120,.07),transparent_28%),radial-gradient(circle_at_8%_90%,rgba(217,139,43,.07),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#bd7823]">
            Why we're different
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#101619] sm:text-5xl md:text-6xl">
            What makes us different.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#59666a] sm:text-lg">
            A direct, focused service model with fewer communication layers,
            flexible support, and the core capabilities businesses expect from
            a modern agency.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-black/10 bg-white/50 shadow-[0_24px_70px_rgba(22,38,44,.08)] backdrop-blur-sm">
          <div className="grid grid-cols-[1.65fr_.68fr_.68fr] border-b border-black/10 bg-[#10181c] px-3 py-4 text-white sm:px-5 md:px-6 md:py-5">
            <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/35 sm:text-[10px] md:text-xs md:tracking-[0.18em]">
              Capability
            </div>

            <div className="text-center text-[10px] font-semibold leading-tight sm:text-xs md:text-sm">
              Ascend Logix
            </div>

            <div className="text-center text-[9px] font-semibold leading-tight text-white/65 sm:text-xs md:text-sm">
              Typical Large Agency
            </div>
          </div>

          <div>
            {rows.map(([label, ascend, agency], index) => (
              <div
                key={label}
                className={`grid grid-cols-[1.65fr_.68fr_.68fr] items-center gap-2 border-b border-black/[0.07] px-3 py-4 last:border-b-0 sm:gap-3 sm:px-5 md:gap-4 md:px-6 md:py-5 ${
                  index % 2 === 0 ? "bg-[#dfe6f2]/58" : "bg-white/45"
                }`}
              >
                <div className="pr-1 text-[10px] font-medium leading-[1.35] text-[#263238] sm:text-[11px] md:text-sm md:leading-6 lg:text-[15px]">
                  {label}
                </div>

                <div className="flex items-center justify-center">
                  <StatusIcon yes={ascend} />
                </div>

                <div className="flex items-center justify-center">
                  <StatusIcon yes={agency} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-xs leading-6 text-[#7a8589]">
          Comparison reflects Ascend Logix's service model and general traits
          commonly associated with larger agencies. Individual agencies may vary.
        </p>
      </div>
    </section>
  );
}
