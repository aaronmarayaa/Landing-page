import canadaMaple from "@/assets/canada-maple.png";
import {
  BadgeCheck,
  Handshake,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

const trustPoints = [
  {
    icon: MessageSquareText,
    supportingIcon: Handshake,
    title: "Transparent Communication",
    text: "We believe in honesty from day one. No unrealistic promises—just clear communication, realistic expectations, and results you can actually measure.",
    eyebrow: "Clear from day one",
    accent: "orange",
  },
  {
    icon: null,
    supportingIcon: ShieldCheck,
    title: "Canadian Company",
    text: "Proudly Canadian and trusted by Canadian businesses. We focus on reliable, personalized digital solutions built around real business goals.",
    eyebrow: "Proudly Canadian",
    accent: "red",
  },
  {
    icon: BadgeCheck,
    supportingIcon: ShieldCheck,
    title: "Professional & Knowledgeable",
    text: "With experience across web design, development, digital marketing, and branding, we deliver thoughtful solutions designed to help businesses grow with confidence.",
    eyebrow: "Built on experience",
    accent: "blue",
  },
];

const accentClasses = {
  orange: {
    icon: "text-[#e7a041]",
    iconBg: "bg-[#d98b2b]/10",
    iconBorder: "border-[#d98b2b]/20",
    line: "from-[#d98b2b]/80 via-[#d98b2b]/25 to-transparent",
  },
  red: {
    icon: "text-[#e15b5b]",
    iconBg: "bg-[#d94343]/8",
    iconBorder: "border-[#d94343]/18",
    line: "from-[#d94343]/75 via-[#d94343]/22 to-transparent",
  },
  blue: {
    icon: "text-[#35a1c7]",
    iconBg: "bg-[#16779a]/10",
    iconBorder: "border-[#16779a]/20",
    line: "from-[#16779a]/80 via-[#16779a]/25 to-transparent",
  },
} as const;

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-[#030709] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(217,139,43,.09),transparent_27%),radial-gradient(circle_at_82%_82%,rgba(13,89,120,.14),transparent_31%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d98b2b]">
            Why choose Ascend Logix
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
            Partnership built on
            <span className="block text-white/38">trust and clarity.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/52 sm:text-lg">
            Strong digital work starts with a strong working relationship.
            These principles shape how we communicate, collaborate, and deliver.
          </p>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.08] shadow-[0_28px_80px_rgba(0,0,0,.25)] md:grid-cols-3 md:gap-px">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            const SupportingIcon = point.supportingIcon;
            const accent = accentClasses[point.accent as keyof typeof accentClasses];

            return (
              <article
                key={point.title}
                className="group relative min-h-[390px] overflow-hidden bg-[#080e12] p-7 sm:p-8 lg:p-9"
              >
                <div
                  className={`absolute left-0 top-0 h-px w-36 bg-gradient-to-r ${accent.line}`}
                />

                <div className="flex items-start justify-between gap-5">
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-2xl border ${accent.iconBorder} ${accent.iconBg}`}
                  >
                    {point.title === "Canadian Company" ? (
                      <img
                        src={canadaMaple}
                        alt="Canada maple leaf"
                        className="h-8 w-8 object-contain"
                      />
                    ) : (
                      Icon && (
                        <Icon
                          className={`h-6 w-6 ${accent.icon}`}
                          strokeWidth={1.8}
                        />
                      )
                    )}
                  </div>

                  <div className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.07] bg-white/[0.04]">
                    <SupportingIcon
                      className="h-4 w-4 text-white/35"
                      strokeWidth={1.7}
                    />
                  </div>
                </div>

                <div className="mt-14">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/32">
                    0{index + 1} · {point.eyebrow}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-white">
                    {point.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-7 text-white/48">
                    {point.text}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.05]" />
              </article>
            );
          })}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/28">
          <span>Clear expectations</span>
          <span className="h-1 w-1 rounded-full bg-[#d98b2b]" />
          <span>Direct collaboration</span>
          <span className="h-1 w-1 rounded-full bg-[#1680a5]" />
          <span>Professional delivery</span>
        </div>
      </div>
    </section>
  );
}
