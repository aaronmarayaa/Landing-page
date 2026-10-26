import Contact from "@/components/Contact";
import { useEffect } from "react";

export default function ContactPage() {
  const customInquiry = new URLSearchParams(window.location.search).get("plan") === "custom";

  useEffect(() => {
    if (!customInquiry) return;

    const previousTitle = document.title;
    document.title = "Custom project inquiry | Ascend Logix";
    const frame = window.requestAnimationFrame(() => {
      document.getElementById("contact-form")?.scrollIntoView({ block: "start" });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      document.title = previousTitle;
    };
  }, [customInquiry]);

  return (
    <div className="min-h-screen bg-[#06141d]">
      <Contact showForm customInquiry={customInquiry} />
    </div>
  );
}
