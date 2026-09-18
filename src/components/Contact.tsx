import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Facebook,
  Instagram,
  Send,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneInput from "@/components/PhoneInput";
import symbol from "@/assets/ascend-symbol.png";

const facebookUrl =
  "https://www.facebook.com/profile.php?id=61572951032170";
const instagramUrl = "https://www.instagram.com/ascendlogix/";


type ContactProps = {
  showForm?: boolean;
};

export default function Contact({ showForm = false }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  useEffect(() => {
    if (status !== "success") return;

    const timer = window.setTimeout(() => {
      setStatus("idle");
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const honey = String(formData.get("_honey") || "");

    if (honey) return;

    const payload = {
      _subject: "New Ascend Logix Website Inquiry",
      _template: "table",
      first_name: String(formData.get("firstName") || ""),
      last_name: String(formData.get("lastName") || ""),
      email: String(formData.get("email") || ""),
      phone_country: String(formData.get("phoneCountry") || ""),
      phone_number: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      setStatus("sending");

      const response = await fetch(
        "https://formsubmit.co/ajax/ascendlogix.ca@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className={`relative overflow-hidden ${
        showForm ? "pb-24 pt-28 sm:pb-32 sm:pt-32" : "py-24 sm:py-32"
      }`}
    >
      <div className="absolute inset-0 -z-30 bg-[#06141d]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_28%,rgba(217,139,43,.13),transparent_30%),radial-gradient(circle_at_84%_72%,rgba(13,89,120,.25),transparent_32%)]" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-20" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="group/contact relative rounded-[2.7rem] p-[1px]">
          <div className="pointer-events-none absolute inset-0 rounded-[2.7rem] border border-white/10" />

          <div className="pointer-events-none absolute inset-0 rounded-[2.7rem] bg-[linear-gradient(120deg,#d98b2b_0%,#d5a34c_28%,#6f766f_58%,#16779a_100%)] opacity-0 transition-opacity duration-500 group-hover/contact:opacity-100" />

          <div className="pointer-events-none absolute -inset-[2px] rounded-[2.8rem] bg-[linear-gradient(120deg,rgba(217,139,43,.70),rgba(213,163,76,.38),rgba(22,119,154,.70))] opacity-0 blur-xl transition-opacity duration-500 group-hover/contact:opacity-55" />

          <div className="relative overflow-hidden rounded-[calc(2.7rem-1px)] bg-[#07151d]/95 px-7 py-16 shadow-[0_40px_110px_rgba(0,0,0,.24)] backdrop-blur-2xl sm:px-12 sm:py-20">
            <div className="absolute -right-24 -top-20 h-80 w-80 opacity-[0.055]">
              <img
                src={symbol}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div className="absolute -bottom-28 -left-28 h-80 w-80 opacity-[0.035]">
              <img
                src={symbol}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/52">
                <Sparkles className="h-4 w-4 text-[#e1a047]" />
                Let's build something better
              </div>

              <h2 className="mt-7 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
                Ready to build beyond
                <span className="brand-gradient-text block pb-[0.08em]">
                  good enough?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
                Whether you're starting from scratch or improving an existing
                digital presence, Ascend Logix can help shape the next version
                of your brand.
              </p>

              <div className="mt-9 flex justify-center">
                <Button asChild size="lg">
                  <a href={showForm ? "#contact-form" : "/contact"}>
                    Start the Conversation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.03] px-4 py-4 text-left transition-colors duration-300 hover:border-white/18 hover:bg-white/[0.055]"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                    <Facebook className="h-4.5 w-4.5 text-[#dfa047]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                      Facebook
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/72">
                      Ascend Logix
                    </p>
                  </div>
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.03] px-4 py-4 text-left transition-colors duration-300 hover:border-white/18 hover:bg-white/[0.055]"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                    <Instagram className="h-4.5 w-4.5 text-[#dfa047]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30">
                      Instagram
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-white/72">
                      @ascendlogix
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {showForm && (
              <div
                id="contact-form"
                className="relative mx-auto mt-14 max-w-4xl scroll-mt-28 border-t border-white/[0.08] pt-12"
              >
                <div className="mx-auto max-w-2xl text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d98b2b]">
                    Tell us about your project
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                    Send us a message.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                    Share a few details and we'll have the information needed to
                    start the conversation.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mx-auto mt-9 grid max-w-3xl gap-5"
                >
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="grid gap-2 text-left">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/42">
                        First name
                      </span>
                      <input
                        required
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        placeholder="First name"
                        className="h-13 rounded-2xl border border-white/[0.10] bg-white/[0.045] px-4 text-sm text-white outline-none transition placeholder:text-white/22 focus:border-[#d98b2b]/55 focus:bg-white/[0.06]"
                      />
                    </label>

                    <label className="grid gap-2 text-left">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/42">
                        Last name
                      </span>
                      <input
                        required
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        placeholder="Last name"
                        className="h-13 rounded-2xl border border-white/[0.10] bg-white/[0.045] px-4 text-sm text-white outline-none transition placeholder:text-white/22 focus:border-[#d98b2b]/55 focus:bg-white/[0.06]"
                      />
                    </label>
                  </div>

                  <label className="grid gap-2 text-left">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/42">
                      Email
                    </span>
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="h-13 rounded-2xl border border-white/[0.10] bg-white/[0.045] px-4 text-sm text-white outline-none transition placeholder:text-white/22 focus:border-[#d98b2b]/55 focus:bg-white/[0.06]"
                    />
                  </label>

                  <PhoneInput />

                  <label className="grid gap-2 text-left">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/42">
                      Message
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={7}
                      placeholder="Tell us about your project, goals, or what you need help with."
                      className="resize-y rounded-[1.35rem] border border-white/[0.10] bg-white/[0.045] px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/22 focus:border-[#d98b2b]/55 focus:bg-white/[0.06]"
                    />
                  </label>

                  <div className="mt-1 flex flex-col items-center gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>

                    {status === "success" && (
                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-4 py-2 text-sm text-emerald-200">
                        <CheckCircle2 className="h-4 w-4" />
                        Message sent successfully.
                      </div>
                    )}

                    {status === "error" && (
                      <p className="text-center text-sm text-rose-300">
                        We couldn't send the message. Please try again.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
