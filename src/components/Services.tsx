import {
  Lightbulb,
  Megaphone,
  Monitor,
  Palette,
  Search,
  Share2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import TechSignalCard from "./TechSignalCard";

const services = [
  {
    icon: Lightbulb,
    title: "Marketing Strategy & Consulting",
    description:
      "Free marketing plans, competitor research, campaign strategy, and audience targeting built around your business goals.",
    tags: ["Free Plans", "Research", "Strategy"],
  },
  {
    icon: Monitor,
    title: "Web Design & Development",
    description:
      "Business websites, landing pages, website redesigns, responsive development, and basic SEO setup for a strong online presence.",
    tags: ["Websites", "Responsive", "Basic SEO"],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Marketing materials including website graphics, social media creatives, ads, logos, business cards, flyers, brochures, posters, banners, and more.",
    tags: ["Branding", "Creatives", "Print & Digital"],
  },
  {
    icon: Megaphone,
    title: "Digital Advertisement",
    description:
      "Meta Ads and Google Ads campaign setup, audience targeting, optimization, and reporting designed to support measurable growth.",
    tags: ["Meta Ads", "Google Ads", "Reporting"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Content planning, creation, posting, caption writing, scheduling, and reporting to keep your social presence consistent and active.",
    tags: ["Content", "Scheduling", "Management"],
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "On-page SEO, blog post creation, keyword optimization, local SEO, Google Business Profile support, and ongoing website improvement.",
    tags: ["On-page SEO", "Local SEO", "Keywords"],
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
          title="Digital services designed to work together."
          description="From strategy and websites to advertising, social media, design, and SEO, Ascend Logix brings the essential parts of your digital presence into one connected approach."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <TechSignalCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
