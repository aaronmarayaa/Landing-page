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
    name: "Mielle Wellness",
    url: "https://www.miellewellness.ca/",
    domain: "miellewellness.ca",
    category: "Wellness",
  },
  {
    name: "RMN Aesthetics",
    url: "https://www.rmnaesthetics.com/",
    domain: "rmnaesthetics.com",
    category: "Aesthetics",
  },
  {
    name: "Lynx Kin",
    url: "https://www.lynxkin.ca/",
    domain: "lynxkin.ca",
    category: "Digital Experience",
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
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "38%" : "-38%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-38%" : "38%",
    opacity: 0,
  }),
};

export default function Showcase() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoplay, setAutoplay] = useState(false);
  const [hovering, setHovering] = useState(false);

  const visibleProjects = useMemo(
    () =>
      Array.from({ length: 3 }, (_, offset) => {
        const index = (startIndex + offset) % projects.length;
        return {
          ...projects[index],
          projectIndex: index,
        };
      }),
    [startIndex]
  );

  const mobilePrevious =
    projects[(startIndex - 1 + projects.length) % projects.length];
  const mobileCurrent = projects[startIndex];
  const mobileNext = projects[(startIndex + 1) % projects.length];

  const paginate = (delta: number) => {
    setDirection(delta);
    setStartIndex(
      (index) => (index + delta + projects.length) % projects.length
    );
  };

  const goPrevious = () => paginate(-1);
  const goNext = () => paginate(1);

  const goToProject = (index: number) => {
    if (index === startIndex) return;

    const forward =
      (index - startIndex + projects.length) % projects.length;
    const backward =
      (startIndex - index + projects.length) % projects.length;

    setDirection(forward <= backward ? 1 : -1);
    setStartIndex(index);
  };

  useEffect(() => {
    if (!autoplay || hovering) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setStartIndex((index) => (index + 1) % projects.length);
    }, 9000);

    return () => window.clearInterval(timer);
  }, [autoplay, hovering]);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#030709] py-16 sm:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(13,89,120,.12),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(217,139,43,.06),transparent_36%)]" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d98b2b]">
            Selected work
          </p>

          <h2 className="mt-3 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl">
            Websites built by
            <span className="block text-white/38">Ascend Logix.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/52 sm:text-base">
            Explore live previews of websites created by Ascend Logix. On phone
            and tablet, swipe or use the arrows to move naturally between
            projects.
          </p>
        </div>

        <div
          className="relative mt-10"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Phone + tablet */}
          <div className="relative mx-auto max-w-[1100px] lg:hidden">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/35">
                Swipe or use arrows
              </p>

              <span className="text-[11px] text-white/24">
                {startIndex + 1} / {projects.length}
              </span>
            </div>

            <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] sm:h-[390px] md:h-[420px]">
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                <motion.div
                  key={startIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.24 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.16}
                  onDragEnd={(_, info) => {
                    const swipe =
                      Math.abs(info.offset.x) > 65 ||
                      Math.abs(info.velocity.x) > 450;

                    if (!swipe) return;

                    if (info.offset.x < 0) {
                      goNext();
                    } else {
                      goPrevious();
                    }
                  }}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                  {/* Previous preview */}
                  <article
                    aria-hidden="true"
                    className="showcase-browser pointer-events-none absolute bottom-0 left-[-56%] top-0 w-[68%] overflow-hidden rounded-[1.35rem] border border-white/[0.07] bg-[#080e12] opacity-40 shadow-[0_16px_42px_rgba(0,0,0,.22)] sm:left-[-50%] sm:w-[62%] md:left-[-38%] md:w-[50%]"
                  >
                    <div className="flex h-10 items-center border-b border-white/[0.06] bg-[#0a1014] px-3">
                      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-white/[0.06] bg-black/20 px-3 py-1.5">
                        <Globe2 className="h-3 w-3 shrink-0 text-white/20" />
                        <span className="truncate text-[10px] text-white/28">
                          {mobilePrevious.domain}
                        </span>
                      </div>
                    </div>

                    <div className="h-[250px] bg-[#060a0d] sm:h-[280px] md:h-[310px]">
                      <iframe
                        src={mobilePrevious.url}
                        title={`${mobilePrevious.name} website preview`}
                        loading="lazy"
                        tabIndex={-1}
                        className="h-full w-full border-0 bg-white"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    </div>

                    <div className="border-t border-white/[0.06] bg-[#080e12] px-4 py-3">
                      <p className="truncate text-xs font-semibold text-white/35">
                        {mobilePrevious.name}
                      </p>
                    </div>
                  </article>

                  {/* Current preview */}
                  <article className="showcase-browser absolute bottom-0 left-[11%] right-[11%] top-0 z-20 overflow-hidden rounded-[1.35rem] border border-white/12 bg-[#080e12] shadow-[0_24px_65px_rgba(0,0,0,.40)] sm:left-[14%] sm:right-[14%] md:left-[20%] md:right-[20%]">
                    <div className="relative z-10 flex h-10 items-center gap-2 border-b border-white/[0.08] bg-[#0a1014] px-3">
                      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-white/[0.08] bg-black/25 px-3 py-1.5">
                        <Globe2 className="h-3 w-3 shrink-0 text-white/26" />
                        <span className="truncate text-[10px] text-white/38">
                          {mobileCurrent.domain}
                        </span>
                      </div>

                      <a
                        href={mobileCurrent.url}
                        target="_blank"
                        rel="noreferrer"
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/[0.08] bg-white/[0.035] text-white/42 transition hover:bg-white/[0.07] hover:text-white"
                        aria-label={`Open ${mobileCurrent.name} in a new tab`}
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    {/*
                      Pointer events are disabled on the mobile/tablet iframe
                      so the swipe gesture can begin anywhere on the preview.
                      The Visit button opens the real site for interaction.
                    */}
                    <div className="relative h-[250px] bg-[#060a0d] sm:h-[280px] md:h-[310px]">
                      <iframe
                        src={mobileCurrent.url}
                        title={`${mobileCurrent.name} website preview`}
                        loading="lazy"
                        tabIndex={-1}
                        className="pointer-events-none h-full w-full border-0 bg-white"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    </div>

                    <div className="relative z-10 flex items-center justify-between gap-3 border-t border-white/[0.08] bg-[#080e12] px-4 py-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold tracking-[-0.02em] text-white">
                          {mobileCurrent.name}
                        </h3>
                        <p className="mt-0.5 truncate text-[11px] text-white/32">
                          {mobileCurrent.category}
                        </p>
                      </div>

                      <a
                        href={mobileCurrent.url}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 transition hover:border-[#d98b2b]/35 hover:text-white"
                      >
                        Visit
                      </a>
                    </div>
                  </article>

                  {/* Next preview */}
                  <article
                    aria-hidden="true"
                    className="showcase-browser pointer-events-none absolute bottom-0 right-[-56%] top-0 w-[68%] overflow-hidden rounded-[1.35rem] border border-white/[0.07] bg-[#080e12] opacity-40 shadow-[0_16px_42px_rgba(0,0,0,.22)] sm:right-[-50%] sm:w-[62%] md:right-[-38%] md:w-[50%]"
                  >
                    <div className="flex h-10 items-center border-b border-white/[0.06] bg-[#0a1014] px-3">
                      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-white/[0.06] bg-black/20 px-3 py-1.5">
                        <Globe2 className="h-3 w-3 shrink-0 text-white/20" />
                        <span className="truncate text-[10px] text-white/28">
                          {mobileNext.domain}
                        </span>
                      </div>
                    </div>

                    <div className="h-[250px] bg-[#060a0d] sm:h-[280px] md:h-[310px]">
                      <iframe
                        src={mobileNext.url}
                        title={`${mobileNext.name} website preview`}
                        loading="lazy"
                        tabIndex={-1}
                        className="h-full w-full border-0 bg-white"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    </div>

                    <div className="border-t border-white/[0.06] bg-[#080e12] px-4 py-3">
                      <p className="truncate text-xs font-semibold text-white/35">
                        {mobileNext.name}
                      </p>
                    </div>
                  </article>
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={goPrevious}
                className="absolute left-2 top-[46%] z-40 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-[#11191e]/95 text-white shadow-xl backdrop-blur transition-colors hover:border-white/20 hover:bg-[#172229] sm:left-4"
                aria-label={`Show previous project: ${mobilePrevious.name}`}
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 top-[46%] z-40 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-[#11191e]/95 text-white shadow-xl backdrop-blur transition-colors hover:border-white/20 hover:bg-[#172229] sm:right-4"
                aria-label={`Show next project: ${mobileNext.name}`}
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.url}
                  type="button"
                  onClick={() => goToProject(index)}
                  aria-label={`Show ${project.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === startIndex
                      ? "w-6 bg-[#d98b2b]"
                      : "w-1.5 bg-white/18 hover:bg-white/35"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: 3-up carousel */}
          <div className="relative mx-auto hidden max-w-[1400px] lg:block">
            <button
              type="button"
              onClick={goPrevious}
              className="absolute -left-4 top-[46%] z-30 grid h-12 w-12 -translate-x-1/3 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#11191e]/95 text-white shadow-xl backdrop-blur transition hover:border-white/20 hover:bg-[#172229]"
              aria-label="Previous websites"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={goNext}
              className="absolute -right-4 top-[46%] z-30 grid h-12 w-12 translate-x-1/3 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#11191e]/95 text-white shadow-xl backdrop-blur transition hover:border-white/20 hover:bg-[#172229]"
              aria-label="Next websites"
            >
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="overflow-hidden">
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                <motion.div
                  key={startIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.24 },
                  }}
                  className="grid gap-4 md:grid-cols-3"
                >
                  {visibleProjects.map((project) => (
                    <article
                      key={project.url}
                      className="showcase-browser relative min-w-0 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#080e12] shadow-[0_22px_60px_rgba(0,0,0,.34)]"
                    >
                      <div className="relative z-10 flex h-11 items-center gap-2 border-b border-white/[0.08] bg-[#0a1014] px-3">
                        <div className="hidden items-center gap-1.5 xl:flex">
                          <span className="h-2 w-2 rounded-full bg-white/14" />
                          <span className="h-2 w-2 rounded-full bg-white/14" />
                          <span className="h-2 w-2 rounded-full bg-white/14" />
                        </div>

                        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-white/[0.08] bg-black/25 px-3 py-2">
                          <Globe2 className="h-3 w-3 shrink-0 text-white/26" />
                          <span className="truncate text-[11px] text-white/38">
                            {project.domain}
                          </span>
                        </div>

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/[0.08] bg-white/[0.035] text-white/42 transition hover:bg-white/[0.07] hover:text-white"
                          aria-label={`Open ${project.name} in a new tab`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>

                      <div className="relative h-[250px] bg-[#060a0d] lg:h-[280px] xl:h-[310px]">
                        <iframe
                          src={project.url}
                          title={`${project.name} website preview`}
                          loading="lazy"
                          className="h-full w-full border-0 bg-white"
                          referrerPolicy="strict-origin-when-cross-origin"
                        />
                      </div>

                      <div className="relative z-10 border-t border-white/[0.08] bg-[#080e12] p-3.5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="truncate text-sm font-semibold tracking-[-0.02em] text-white">
                              {project.name}
                            </h3>
                            <p className="mt-1 truncate text-xs text-white/34">
                              {project.category}
                            </p>
                          </div>

                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45 transition hover:border-[#d98b2b]/35 hover:text-white"
                          >
                            Visit
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                {projects.map((project, index) => {
                  const active = visibleProjects.some(
                    (visible) => visible.projectIndex === index
                  );

                  return (
                    <button
                      key={project.url}
                      type="button"
                      onClick={() => goToProject(index)}
                      className={`rounded-full border px-3.5 py-2 text-[11px] font-semibold transition ${
                        active
                          ? "border-[#d98b2b]/40 bg-[#d98b2b]/10 text-white"
                          : "border-white/[0.08] bg-white/[0.025] text-white/34 hover:border-white/15 hover:text-white/60"
                      }`}
                    >
                      {project.name}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setAutoplay((value) => !value)}
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] px-4 text-xs font-semibold text-white/50 transition hover:bg-white/[0.07] hover:text-white"
              >
                {autoplay ? (
                  <Pause className="h-3.5 w-3.5" />
                ) : (
                  <Play className="h-3.5 w-3.5" />
                )}
                {autoplay ? "Pause carousel" : "Auto play"}
              </button>
            </div>
          </div>

          <p className="mt-4 text-center text-[11px] leading-5 text-white/25">
            If a website blocks iframe embedding, use its Visit button to open
            the live site directly.
          </p>
        </div>
      </div>
    </section>
  );
}
