import {
  Braces,
  ChartNoAxesCombined,
  Palette,
  PenTool,
  Search,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import TechSignalCard from "./TechSignalCard";

const services = [
  {
    icon: PenTool,
    title: "Web Design",
    description:
      "Modern, responsive interfaces built around usability, visual hierarchy, accessibility, and your brand identity.",
    tags: ["UI/UX", "Responsive", "Brand-first"],
  },
  {
    icon: Braces,
    title: "Web Development",
    description:
      "Custom websites developed from the ground up for speed, flexibility, maintainability, and long-term scalability.",
    tags: ["React", "Performance", "Scalable"],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Strategic visuals that give your brand a distinctive and consistent identity across modern digital platforms.",
    tags: ["Branding", "Creatives", "Identity"],
  },
  {
    icon: ChartNoAxesCombined,
    title: "Social Media Marketing",
    description:
      "Creative content and campaign systems designed to strengthen your online presence and connect with the right audience.",
    tags: ["Content", "Campaigns", "Growth"],
  },
  {
    icon: Search,
    title: "SEO & PPC Marketing",
    description:
      "Search and paid-media strategies focused on helping the right customers discover your business at the right moment.",
    tags: ["SEO", "PPC", "Analytics"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-30 bg-[#050b0f]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_100%_0%,rgba(13,89,120,.15),transparent_34%),radial-gradient(circle_at_0%_100%,rgba(217,139,43,.09),transparent_28%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Digital systems designed to work together."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <TechSignalCard
              key={service.title}
              {...service}
              index={index}
              className={
                index === 3
                  ? "lg:col-span-2"
                  : index === 4
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
