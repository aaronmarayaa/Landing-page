import { useEffect, useState } from "react";
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
          className="group/logo relative z-50 flex items-center"
          aria-label="Ascend Logix home"
        >
          <img
            src={symbol}
            alt="Ascend Logix"
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
          />
          <span className="pointer-events-none absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-[linear-gradient(90deg,#d98b2b,#d5a34c,#1680a5)] shadow-[0_0_8px_rgba(217,139,43,.7),0_0_12px_rgba(22,128,165,.55)] transition-all duration-300 group-hover/logo:w-full" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group/nav relative py-2 text-sm font-medium text-white/70 transition-[color,text-shadow] duration-300 hover:text-white hover:[text-shadow:0_0_12px_rgba(217,139,43,.45)]"
            >
              {link.label}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-px w-0 bg-[linear-gradient(90deg,#d98b2b,#d5a34c,#1680a5)] shadow-[0_0_8px_rgba(217,139,43,.72),0_0_12px_rgba(22,128,165,.55)] transition-all duration-300 group-hover/nav:w-full" />
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
                  onClick={() => setOpen(false)}
                  className={`group/mobile relative flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium text-white/72 transition-[color,background-color,text-shadow] duration-300 hover:bg-white/[0.055] hover:text-white hover:[text-shadow:0_0_12px_rgba(217,139,43,.42)] ${
                    index !== links.length - 1
                      ? "border-b border-white/[0.045]"
                      : ""
                  }`}
                >
                  <span className="relative">
                    {link.label}
                    <span className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-0 bg-[linear-gradient(90deg,#d98b2b,#d5a34c,#1680a5)] shadow-[0_0_8px_rgba(217,139,43,.72),0_0_12px_rgba(22,128,165,.55)] transition-all duration-300 group-hover/mobile:w-full" />
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-white/12 transition-[background-color,box-shadow] duration-300 group-hover/mobile:bg-[#d98b2b] group-hover/mobile:shadow-[0_0_10px_rgba(217,139,43,.75)]" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
