import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe2,
  Pause,
  Play,
} from "lucide-react";

const projects = [
  {
    name: "RMN Aesthetics",
    url: "https://www.rmnaesthetics.com/",
    domain: "rmnaesthetics.com",
    category: "Aesthetics",
  },
  {
    name: "Mielle Wellness",
    url: "https://www.miellewellness.ca/",
    domain: "miellewellness.ca",
    category: "Wellness",
  },
  {
    name: "FNCC Inc.",
    url: "https://www.fnccinc.ca/",
    domain: "fnccinc.ca",
    category: "Corporate",
  },
  {
    name: "Champion Build",
    url: "https://www.championbuild.us/",
    domain: "championbuild.us",
    category: "Construction",
  },
  {
    name: "Lynx Kin",
    url: "https://www.lynxkin.ca/",
    domain: "lynxkin.ca",
    category: "Digital Experience",
  },
];

function DesktopWebsitePreview({
  url,
  title,
  interactive = false,
}: {
  url: string;
  title: string;
  interactive?: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      <iframe
        src={url}
        title={title}
        loading="lazy"
        tabIndex={interactive ? 0 : -1}
        referrerPolicy="strict-origin-when-cross-origin"
        className={`absolute left-1/2 top-0 h-[1100px] w-[1680px] max-w-none origin-top -translate-x-1/2
          scale-[0.205]
          sm:scale-[0.29]
          md:scale-[0.36]
          lg:scale-[0.44]
          xl:scale-[0.52]
          2xl:scale-[0.58]
          ${interactive ? "pointer-events-auto" : "pointer-events-none"}
        `}
      />
    </div>
  );
}

type Slot = "previous" | "current" | "next";

type VisibleProject = (typeof projects)[number] & {
  projectIndex: number;
  slot: Slot;
};

const slotClasses: Record<Slot, string> = {
  previous:
    "left-[-54%] w-[58%] scale-[.78] opacity-38 sm:left-[-42%] sm:w-[48%] md:left-[-32%] md:w-[42%] lg:left-[-20%] lg:w-[35%] xl:left-[-15%] xl:w-[33%]",
  current:
    "left-[4%] w-[92%] scale-100 opacity-100 sm:left-[7%] sm:w-[86%] md:left-[9%] md:w-[82%] lg:left-[11%] lg:w-[78%] xl:left-[13%] xl:w-[74%]",
  next:
    "left-[96%] w-[58%] scale-[.78] opacity-38 sm:left-[94%] sm:w-[48%] md:left-[90%] md:w-[42%] lg:left-[85%] lg:w-[35%] xl:left-[82%] xl:w-[33%]",
};

const slotZ: Record<Slot, string> = {
  previous: "z-10",
  current: "z-30",
  next: "z-10",
};

export default function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoplay, setAutoplay] = useState(false);
  const [hovering, setHovering] = useState(false);

  const visibleProjects = useMemo<VisibleProject[]>(() => {
    const previousIndex =
      (activeIndex - 1 + projects.length) % projects.length;
    const nextIndex = (activeIndex + 1) % projects.length;

    return [
      {
        ...projects[previousIndex],
        projectIndex: previousIndex,
        slot: "previous",
      },
      {
        ...projects[activeIndex],
        projectIndex: activeIndex,
        slot: "current",
      },
      {
        ...projects[nextIndex],
        projectIndex: nextIndex,
        slot: "next",
      },
    ];
  }, [activeIndex]);

  const paginate = (delta: number) => {
    setDirection(delta);
    setActiveIndex(
      (index) => (index + delta + projects.length) % projects.length
    );
  };

  const goPrevious = () => paginate(-1);
  const goNext = () => paginate(1);

  const goToProject = (index: number) => {
    if (index === activeIndex) return;

    const forward =
      (index - activeIndex + projects.length) % projects.length;
    const backward =
      (activeIndex - index + projects.length) % projects.length;

    setDirection(forward <= backward ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!autoplay || hovering) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((index) => (index + 1) % projects.length);
    }, 8500);

    return () => window.clearInterval(timer);
  }, [autoplay, hovering]);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#030709] py-16 sm:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(13,89,120,.12),transparent_31%),radial-gradient(circle_at_50%_76%,rgba(217,139,43,.055),transparent_38%)]" />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d98b2b]">
            Selected work
          </p>

          <h2 className="mt-3 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl">
            Websites built by
            <span className="block text-white/38">Ascend Logix.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/52 sm:text-base">
            One project takes focus while the neighboring websites stay visible
            on each side. Use the arrows to move through the work.
          </p>
        </div>

        <div
          className="relative mt-10"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/35">
              Use arrows to browse
            </p>

            <span className="text-[11px] text-white/24">
              {activeIndex + 1} / {projects.length}
            </span>
          </div>

          <div
            className="relative h-[410px] overflow-hidden rounded-[1.6rem] sm:h-[450px] md:h-[500px] lg:h-[565px] xl:h-[615px]"
          >
            <AnimatePresence initial={false}>
              {visibleProjects.map((project) => {
                const isCurrent = project.slot === "current";

                return (
                  <motion.article
                    layout
                    key={project.projectIndex}
                    initial={{
                      opacity: 0,
                      scale: 0.72,
                      x: direction > 0 ? 90 : -90,
                    }}
                    animate={{
                      opacity: project.slot === "current" ? 1 : 0.45,
                      scale: project.slot === "current" ? 1 : 0.82,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.72,
                      x: direction > 0 ? -90 : 90,
                    }}
                    transition={{
                      layout: {
                        duration: 0.52,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      opacity: { duration: 0.34 },
                      scale: {
                        duration: 0.52,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      x: {
                        duration: 0.52,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                    className={`showcase-browser absolute bottom-0 top-0 overflow-hidden rounded-[1.35rem] border bg-[#080e12] transition-[left,width,border-color,box-shadow] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
                      slotClasses[project.slot]
                    } ${slotZ[project.slot]} ${
                      isCurrent
                        ? "border-white/14 shadow-[0_30px_90px_rgba(0,0,0,.48)]"
                        : "pointer-events-none border-white/[0.07] shadow-[0_18px_50px_rgba(0,0,0,.24)]"
                    }`}
                  >
                    <div
                      className={`relative z-10 flex items-center gap-2 border-b bg-[#0a1014] px-3 transition-all duration-500 ${
                        isCurrent
                          ? "h-11 border-white/[0.08]"
                          : "h-9 border-white/[0.055]"
                      }`}
                    >
                      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-white/[0.07] bg-black/25 px-3 py-1.5">
                        <Globe2
                          className={`shrink-0 text-white/26 ${
                            isCurrent ? "h-3.5 w-3.5" : "h-3 w-3"
                          }`}
                        />
                        <span
                          className={`truncate text-white/38 ${
                            isCurrent ? "text-[11px]" : "text-[9px]"
                          }`}
                        >
                          {project.domain}
                        </span>
                      </div>

                      {isCurrent && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/[0.08] bg-white/[0.035] text-white/42 transition-colors hover:bg-white/[0.07] hover:text-white"
                          aria-label={`Open ${project.name} in a new tab`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>

                    <div
                      className={`relative bg-[#060a0d] transition-all duration-500 ${
                        isCurrent
                          ? "h-[310px] sm:h-[345px] md:h-[390px] lg:h-[450px] xl:h-[490px]"
                          : "h-[320px] sm:h-[360px] md:h-[410px] lg:h-[470px] xl:h-[510px]"
                      }`}
                    >
                      <DesktopWebsitePreview
                        url={project.url}
                        title={`${project.name} desktop website preview`}
                        interactive={isCurrent}
                      />

                      {!isCurrent && (
                        <div className="absolute inset-0 bg-[#041017]/22" />
                      )}
                    </div>

                    <div
                      className={`relative z-10 border-t bg-[#080e12] transition-all duration-500 ${
                        isCurrent
                          ? "border-white/[0.08] px-4 py-3.5"
                          : "border-white/[0.055] px-3 py-2.5"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <h3
                            className={`truncate font-semibold tracking-[-0.02em] text-white transition-all duration-500 ${
                              isCurrent ? "text-sm sm:text-base" : "text-xs"
                            }`}
                          >
                            {project.name}
                          </h3>

                          {isCurrent && (
                            <p className="mt-0.5 truncate text-[11px] text-white/32">
                              {project.category}
                            </p>
                          )}
                        </div>

                        {isCurrent && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                              className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 transition-colors hover:border-[#d98b2b]/35 hover:text-white"
                          >
                            Visit
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>

            <button
              type="button"
              onClick={goPrevious}
              className="absolute left-2 top-1/2 z-50 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#11191e]/95 text-white shadow-xl backdrop-blur transition-colors hover:border-white/20 hover:bg-[#172229] sm:left-4 lg:h-11 lg:w-11"
              aria-label="Previous project"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 z-50 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#11191e]/95 text-white shadow-xl backdrop-blur transition-colors hover:border-white/20 hover:bg-[#172229] sm:right-4 lg:h-11 lg:w-11"
              aria-label="Next project"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.url}
                  type="button"
                  onClick={() => goToProject(index)}
                  aria-label={`Show ${project.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-7 bg-[#d98b2b]"
                      : "w-1.5 bg-white/18 hover:bg-white/35"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setAutoplay((value) => !value)}
              className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] px-4 text-xs font-semibold text-white/50 transition-colors hover:bg-white/[0.07] hover:text-white"
            >
              {autoplay ? (
                <Pause className="h-3.5 w-3.5" />
              ) : (
                <Play className="h-3.5 w-3.5" />
              )}
              {autoplay ? "Pause carousel" : "Auto play"}
            </button>
          </div>

          <p className="mt-4 text-center text-[11px] leading-5 text-white/25">
            The focused website is interactive and scrollable. Use the arrows to switch
            projects; the neighboring previews remain smaller on each side.
          </p>
        </div>
      </div>
    </section>
  );
}
