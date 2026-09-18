import {
  ArrowRight,
  Facebook,
  Mail,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import symbol from "@/assets/ascend-symbol.png";

const facebookUrl =
  "https://www.facebook.com/profile.php?id=61572951032170";

const emailUrl =
  "mailto:ascendlogix.ca@gmail.com?subject=Website%20Inquiry";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-30 bg-[#06141d]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_28%,rgba(217,139,43,.13),transparent_30%),radial-gradient(circle_at_84%_72%,rgba(13,89,120,.25),transparent_32%)]" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-20" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="group/contact relative rounded-[2.7rem] p-[1px]">
          {/* Neutral outline while idle */}
          <div className="pointer-events-none absolute inset-0 rounded-[2.7rem] border border-white/10" />

          {/* Gradient outline only appears on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-[2.7rem] bg-[linear-gradient(120deg,#d98b2b_0%,#d5a34c_28%,#6f766f_58%,#16779a_100%)] opacity-0 transition-opacity duration-500 group-hover/contact:opacity-100" />

          {/* Hover glow */}
          <div className="pointer-events-none absolute -inset-[2px] rounded-[2.8rem] bg-[linear-gradient(120deg,rgba(217,139,43,.70),rgba(213,163,76,.38),rgba(22,119,154,.70))] opacity-0 blur-xl transition-opacity duration-500 group-hover/contact:opacity-55" />

          <div className="relative overflow-hidden rounded-[calc(2.7rem-1px)] bg-[#07151d]/95 px-7 py-16 text-center shadow-[0_40px_110px_rgba(0,0,0,.24)] backdrop-blur-2xl sm:px-12 sm:py-20">
            <div className="absolute -right-24 -top-20 h-80 w-80 opacity-[0.055]">
              <img
                src={symbol}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div className="absolute -bottom-28 -left-28 h-80 w-80 opacity-[0.035]">
              <img
                src={symbol}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/52">
                <Sparkles className="h-4 w-4 text-[#e1a047]" />
                Let's build something better
              </div>

              <h2 className="mt-7 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
                Ready to build beyond
                <span className="brand-gradient-text block pb-[0.08em]">
                  good enough?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
                Whether you're starting from scratch or improving an existing
                digital presence, Ascend Logix can help shape the next version
                of your brand.
              </p>

              <div className="mt-9 flex justify-center">
                <Button asChild size="lg">
                  <a
                    href="https://ascendlogixca.wixstudio.com/ascend/contact"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Start the Conversation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Direct contact options */}
              <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.03] px-4 py-4 text-left transition-colors duration-300 hover:border-white/18 hover:bg-white/[0.055]"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                    <Facebook className="h-4.5 w-4.5 text-[#dfa047]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                      Facebook
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/72">
                      Ascend Logix
                    </p>
                  </div>
                </a>

                <a
                  href={emailUrl}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.03] px-4 py-4 text-left transition-colors duration-300 hover:border-white/18 hover:bg-white/[0.055]"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                    <Mail className="h-4.5 w-4.5 text-[#dfa047]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                      Email
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-white/72">
                      ascendlogix.ca@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
