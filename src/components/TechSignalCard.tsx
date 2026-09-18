import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

type TechSignalCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  className?: string;
  index?: number;
};

const paths = [
  "M0 42 H78 Q92 42 92 56 V90 H143",
  "M0 168 H60 Q76 168 76 151 V129 H143",
  "M286 35 H223 Q207 35 207 52 V90 H173",
  "M286 176 H235 Q217 176 217 158 V129 H173",
  "M80 0 V28 Q80 44 97 44 H143 V90",
  "M214 214 V181 Q214 166 198 166 H173 V129",
];

export default function TechSignalCard({
  icon: Icon,
  title,
  description,
  tags,
  className = "",
  index = 0,
}: TechSignalCardProps) {
  return (
    <article
      className={`signal-card group relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#07151d] shadow-[0_24px_80px_rgba(0,0,0,.22)] transition duration-500 hover:border-white/20 ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,.045),transparent_38%)]" />
      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#0d5978]/0 blur-3xl transition duration-500 group-hover:bg-[#0d5978]/18" />
      <div className="absolute -left-16 top-12 h-44 w-44 rounded-full bg-[#d98b2b]/0 blur-3xl transition duration-500 group-hover:bg-[#d98b2b]/12" />

      <div className="relative h-[228px] overflow-hidden border-b border-white/[0.07] bg-[#04090c]">
        <div className="signal-grid absolute inset-0 opacity-55" />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 286 214"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {paths.map((d, pathIndex) => (
            <g key={d}>
              <path
                d={d}
                fill="none"
                stroke="rgba(255,255,255,.11)"
                strokeWidth="1.1"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={d}
                pathLength="100"
                fill="none"
                stroke={pathIndex % 2 === 0 ? "#d98b2b" : "#1680a5"}
                strokeWidth="1.8"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                className="signal-run"
                style={
                  {
                    "--delay": `${(pathIndex * 0.12 + index * 0.04).toFixed(2)}s`,
                  } as CSSProperties
                }
              />
            </g>
          ))}

          {[
            [0, 42],
            [0, 168],
            [286, 35],
            [286, 176],
            [80, 0],
            [214, 214],
          ].map(([cx, cy], dotIndex) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="3.3"
              fill="#05090c"
              stroke="rgba(255,255,255,.18)"
              strokeWidth="1"
              className="transition duration-500 group-hover:stroke-white/40"
              style={{ transitionDelay: `${dotIndex * 40}ms` }}
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="signal-node-glow absolute inset-0 rounded-[1.4rem] bg-[#d98b2b]/20 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />
          <div className="signal-node relative grid h-[82px] w-[92px] place-items-center rounded-[1.35rem] border border-white/12 bg-[linear-gradient(180deg,#171c20,#0c1115)] shadow-[0_20px_45px_rgba(0,0,0,.45),inset_0_1px_0_rgba(255,255,255,.08)]">
            <span className="absolute -left-2 top-4 h-2 w-2 rounded-sm bg-white/20" />
            <span className="absolute -left-2 top-9 h-2 w-2 rounded-sm bg-white/20" />
            <span className="absolute -left-2 bottom-4 h-2 w-2 rounded-sm bg-white/20" />
            <span className="absolute -right-2 top-4 h-2 w-2 rounded-sm bg-white/20" />
            <span className="absolute -right-2 top-9 h-2 w-2 rounded-sm bg-white/20" />
            <span className="absolute -right-2 bottom-4 h-2 w-2 rounded-sm bg-white/20" />
            <Icon className="h-7 w-7 text-white/72 transition duration-500 group-hover:text-white" />
          </div>
        </div>
      </div>

      <div className="relative z-10 p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white sm:text-[1.7rem]">
            {title}
          </h3>
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/15 transition duration-500 group-hover:bg-[#d98b2b] group-hover:shadow-[0_0_18px_#d98b2b]" />
        </div>

        <p className="mt-4 max-w-xl text-sm leading-7 text-white/52">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-white/36 transition group-hover:border-white/14 group-hover:text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
