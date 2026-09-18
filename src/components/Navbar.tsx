import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import symbol from "@/assets/ascend-symbol.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
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
        <a href="#home" className="relative z-50 flex items-center">
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
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,.05)] backdrop-blur-xl transition-colors hover:bg-white/[0.10] md:hidden"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <div className="px-4 pb-4 md:hidden">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#07151d]/58 shadow-[0_22px_70px_rgba(0,0,0,.32),inset_0_1px_0_rgba(255,255,255,.05)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-x-4 h-24 bg-[radial-gradient(circle_at_25%_0%,rgba(217,139,43,.10),transparent_46%),radial-gradient(circle_at_80%_0%,rgba(13,89,120,.12),transparent_48%)]" />

            <nav className="relative flex flex-col p-2">
              {links.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium text-white/72 transition-colors duration-300 hover:bg-white/[0.055] hover:text-white ${
                    index !== links.length - 1 ? "border-b border-white/[0.045]" : ""
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/12 transition-colors duration-300 group-hover:bg-[#d98b2b]" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
