import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Showcase from "@/components/Showcase";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import TrustSection from "@/components/TrustSection";
import Comparison from "@/components/Comparison";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";
import { useEffect, type ReactNode } from "react";

function currentPath() {
  const path = window.location.pathname.replace(/\/+$/, "");
  return path || "/";
}

function StandardPage({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#06141d] text-white">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default function App() {
  const path = currentPath();

  useEffect(() => {
    if (path !== "/" || !window.location.hash) return;

    const sectionId = decodeURIComponent(window.location.hash.slice(1));

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const navbarOffset = 92;
      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth",
      });
    };

    // React needs to render the homepage sections before we can reliably
    // scroll to the hash after arriving from /services or /contact.
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(scrollToSection);
    });

    const fallback = window.setTimeout(scrollToSection, 140);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(fallback);
    };
  }, [path]);

  if (path === "/services") {
    return (
      <StandardPage>
        <ServicesPage />
      </StandardPage>
    );
  }

  if (path === "/contact") {
    return (
      <StandardPage>
        <ContactPage />
      </StandardPage>
    );
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-[#06141d] text-white">
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Services />
      <WhyUs />
      <TrustSection />
      <Comparison />

      <div className="relative isolate">
        {/*
          On phones/tablets the Contact section stays in normal document flow,
          so none of its content can be trapped below the viewport.

          On desktop it becomes sticky for the card-stacking effect, but uses
          the compact homepage version so the full card fits on screen before
          the Footer begins to cover it.
        */}
        <div className="relative z-0 lg:sticky lg:top-0 lg:flex lg:min-h-[100svh] lg:items-center">
          <div className="w-full">
            <Contact compact />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative z-0 hidden h-[42svh] lg:block"
        />

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </main>
  );
}
