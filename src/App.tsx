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

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06141d] text-white">
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Services />
      <WhyUs />
      <TrustSection />
      <Comparison />
      <Contact />
      <Footer />
    </main>
  );
}
