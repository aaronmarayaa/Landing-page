type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#d98b2b]">
        {eyebrow}
      </div>
      <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-white/58 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
