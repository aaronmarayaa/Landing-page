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
import type { ReactNode } from "react";

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
        <div className="sticky top-0 z-0 flex min-h-[100svh] items-center">
          <div className="w-full">
            <Contact />
          </div>
        </div>

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </main>
  );
}
