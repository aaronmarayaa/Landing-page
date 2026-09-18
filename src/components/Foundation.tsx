import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import symbol from "@/assets/ascend-symbol.png";

const circuitPaths = [
  "M520 215 H370 Q344 215 344 185 V120 H0",
  "M520 215 H320 Q290 215 290 255 V330 H0",
  "M520 215 H670 Q696 215 696 185 V120 H1040",
  "M520 215 H720 Q750 215 750 255 V330 H1040",
  "M520 215 V112 Q520 84 490 84 H360 V0",
  "M520 215 V112 Q520 84 550 84 H680 V0",
  "M520 215 V320 Q520 348 490 348 H360 V430",
  "M520 215 V320 Q520 348 550 348 H680 V430",
];

const endpoints = [
  [0, 120],
  [0, 330],
  [1040, 120],
  [1040, 330],
  [360, 0],
  [680, 0],
  [360, 430],
  [680, 430],
];

export default function Foundation() {
  return (
    <section className="relative overflow-hidden bg-[#030709] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(20,77,98,.11),transparent_36%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d98b2b]">
            Ascend Core
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
            Built around one connected
            <span className="block text-white/38">digital system.</span>
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/52 sm:text-lg">
            Hover over the network to activate the Ascend core. Signals travel
            outward from the symbol, representing one central strategy powering
            every connected part of your digital presence.
          </p>
        </div>

        <div className="circuit-board group relative min-h-[520px] overflow-hidden rounded-[2.25rem] border border-white/[0.09] bg-[#05090b]">
          <div className="circuit-grid absolute inset-0 opacity-60" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0d5978]/8 blur-[90px] transition duration-700 group-hover:bg-[#0d5978]/15" />

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1040 430"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {circuitPaths.map((d, index) => (
              <g key={d}>
                <path
                  d={d}
                  fill="none"
                  stroke="rgba(255,255,255,.10)"
                  strokeWidth="1.15"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d={d}
                  pathLength="100"
                  fill="none"
                  stroke={
                    index % 3 === 0
                      ? "#d98b2b"
                      : index % 3 === 1
                        ? "#1680a5"
                        : "#d5a34c"
                  }
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  className="circuit-run"
                  style={
                    {
                      "--circuit-delay": `${120 + index * 95}ms`,
                    } as CSSProperties
                  }
                />
              </g>
            ))}

            {endpoints.map(([cx, cy], index) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="4"
                fill="#030709"
                stroke="rgba(255,255,255,.18)"
                strokeWidth="1.2"
                className="circuit-node"
                style={
                  {
                    "--node-delay": `${240 + index * 75}ms`,
                  } as CSSProperties
                }
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute -inset-14 rounded-full bg-[#d98b2b]/0 blur-3xl transition duration-700 group-hover:bg-[#d98b2b]/10" />

            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="ascend-core relative grid h-40 w-40 place-items-center rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,#1a1d1f,#0d1114)] shadow-[0_30px_80px_rgba(0,0,0,.55),inset_0_1px_0_rgba(255,255,255,.08)] sm:h-44 sm:w-44"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <span
                  key={`top-${index}`}
                  className="absolute -top-2 h-2.5 w-2 rounded-sm bg-white/20"
                  style={{ left: `${14 + index * 14}%` }}
                />
              ))}

              {Array.from({ length: 6 }).map((_, index) => (
                <span
                  key={`bottom-${index}`}
                  className="absolute -bottom-2 h-2.5 w-2 rounded-sm bg-white/20"
                  style={{ left: `${14 + index * 14}%` }}
                />
              ))}

              <img
                src={symbol}
                alt="Ascend Logix symbol"
                className="h-[68%] w-[68%] object-contain drop-shadow-[0_18px_38px_rgba(0,0,0,.48)] transition duration-700 group-hover:drop-shadow-[0_0_24px_rgba(217,139,43,.22)]"
              />
            </motion.div>
          </div>

          <div className="absolute bottom-6 left-6 rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30 backdrop-blur-md">
            Hover to activate network
          </div>
        </div>
      </div>
    </section>
  );
}
