const quickLinks = [
  ["Home", "/"],
  ["About", "/#about"],
  ["Work", "/#work"],
  ["Services", "/services"],
  ["Contact", "/contact"],
];

const facebookUrl =
  "https://www.facebook.com/profile.php?id=61572951032170";
const instagramUrl = "https://www.instagram.com/ascendlogix/";
const emailUrl =
  "mailto:ascendlogix.ca@gmail.com?subject=Website%20Inquiry";

export default function Footer() {
  return (
    <footer className="relative min-h-[72svh] overflow-hidden rounded-t-[2.75rem] border-t border-white/[0.09] bg-[#171717] text-white shadow-[0_-35px_90px_rgba(0,0,0,.5)]">
      <div className="mx-auto flex min-h-[72svh] max-w-[1600px] flex-col px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="border-b border-white/[0.08] pb-10 sm:pb-12">
          <p
            className="select-none whitespace-nowrap text-[clamp(3.8rem,12.5vw,13rem)] font-semibold leading-[0.78] tracking-[-0.075em] text-[#f3f1ec]"
            aria-label="Ascend Logix"
          >
            ASCEND LOGIX
          </p>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr] lg:gap-16 lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">
              Quick Links
            </p>

            <nav className="mt-5 flex flex-col items-start gap-2.5">
              {quickLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-base text-white/78 transition-colors duration-300 hover:text-[#dfa047]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">
              Social
            </p>

            <div className="mt-5 flex flex-col items-start gap-2.5">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="text-base text-white/78 transition-colors duration-300 hover:text-[#dfa047]"
              >
                Facebook
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-base text-white/78 transition-colors duration-300 hover:text-[#dfa047]"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">
              Contact
            </p>

            <a
              href={emailUrl}
              className="mt-5 inline-block break-all text-base text-white/78 transition-colors duration-300 hover:text-[#dfa047] sm:break-normal"
            >
              ascendlogix.ca@gmail.com
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/35">
              Web design, development, branding, and digital marketing built
              around clear communication and measurable growth.
            </p>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-xs text-white/28 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Ascend Logix. All rights reserved.</span>
          <span>Design · Development · Growth</span>
        </div>
      </div>
    </footer>
  );
}
