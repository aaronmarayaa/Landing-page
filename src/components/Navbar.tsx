import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import symbol from "@/assets/ascend-symbol.png";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setOpen(false);

    if (!href.startsWith("/#")) return;

    const sectionId = href.slice(2);
    const onHomepage =
      window.location.pathname === "/" ||
      window.location.pathname === "";

    // If we're already on the homepage, scroll directly instead of causing
    // another page load.
    if (onHomepage) {
      const section = document.getElementById(sectionId);
      if (!section) return;

      event.preventDefault();

      const navbarOffset = 92;
      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;

      window.history.pushState(null, "", `/#${sectionId}`);
      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth",
      });
    }

    // If we're on /services or /contact, let the normal /#section navigation
    // happen. App.tsx will scroll to the requested section after Home renders.
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#06141d]/80 shadow-[0_10px_40px_rgba(0,0,0,.18)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="/"
          className="relative z-50 flex items-center"
          aria-label="Ascend Logix home"
        >
          <img
            src={symbol}
            alt="Ascend Logix"
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className="group/nav relative py-2 text-sm font-medium"
            >
              <span className="block text-white/70 transition-opacity duration-300 group-hover/nav:opacity-0">
                {link.label}
              </span>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center bg-[linear-gradient(90deg,#f0b14f_0%,#d98b2b_28%,#d5a34c_46%,#1680a5_72%,#4ca9c8_100%)] bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover/nav:opacity-100 [filter:drop-shadow(0_0_6px_rgba(217,139,43,.55))_drop-shadow(0_0_11px_rgba(22,128,165,.42))]"
              >
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="/contact">Let's Talk</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,.05)] backdrop-blur-xl transition-[background-color,border-color,box-shadow] hover:border-[#d98b2b]/35 hover:bg-white/[0.10] hover:shadow-[0_0_16px_rgba(217,139,43,.16),0_0_22px_rgba(22,128,165,.14)] md:hidden"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <div className="px-4 pb-4 md:hidden">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#07151d]/58 shadow-[0_22px_70px_rgba(0,0,0,.32),inset_0_1px_0_rgba(255,255,255,.05)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-x-4 h-24 bg-[radial-gradient(circle_at_25%_0%,rgba(217,139,43,.10),transparent_46%),radial-gradient(circle_at_80%_0%,rgba(13,89,120,.12),transparent_48%)]" />

            <nav className="relative flex flex-col p-2">
              {links.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={`group/mobile relative flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium transition-colors duration-300 hover:bg-white/[0.055] ${
                    index !== links.length - 1
                      ? "border-b border-white/[0.045]"
                      : ""
                  }`}
                >
                  <span className="relative">
                    <span className="block text-white/72 transition-opacity duration-300 group-hover/mobile:opacity-0">
                      {link.label}
                    </span>

                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#f0b14f_0%,#d98b2b_28%,#d5a34c_46%,#1680a5_72%,#4ca9c8_100%)] bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-hover/mobile:opacity-100 [filter:drop-shadow(0_0_6px_rgba(217,139,43,.55))_drop-shadow(0_0_11px_rgba(22,128,165,.42))]"
                    >
                      {link.label}
                    </span>
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-white/12 transition-[background-color,box-shadow] duration-300 group-hover/mobile:bg-[#d98b2b] group-hover/mobile:shadow-[0_0_10px_rgba(217,139,43,.75),0_0_14px_rgba(22,128,165,.40)]" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
