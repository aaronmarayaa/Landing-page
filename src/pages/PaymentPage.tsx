import { useEffect } from "react";
import { Globe2, LockKeyhole, MessagesSquare, PanelsTopLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Standard",
    category: "For websites",
    icon: Globe2,
    description:
      "Hosting for a website that introduces your business, showcases your work, and helps customers get in touch.",
    examples: "Business websites, portfolios, and landing pages.",
    href: "https://buy.stripe.com/test_3cIaEX4xRgTG0bS0zLgQE00",
  },
  {
    name: "Premium",
    category: "For websites + web apps",
    icon: PanelsTopLeft,
    description:
      "Hosting for websites and web apps, including apps built for user accounts, bookings, dashboards, or saved data.",
    examples: "Customer portals, booking tools, and business apps.",
    href: "https://buy.stripe.com/test_9B66oH5BVfPC4s882dgQE01",
  },
  {
    name: "Custom",
    category: "For your specific requirements",
    icon: MessagesSquare,
    description:
      "A plan shaped around your project. Talk with Ascend Logix to agree on features, scope, and pricing before you pay.",
    examples: "Tailored websites, web apps, and integrations.",
    href: "/contact?plan=custom#contact-form",
  },
];

export default function PaymentPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Choose your plan | Ascend Logix";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <section
      aria-labelledby="payment-title"
      className="bg-[#06141d] px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-7 lg:grid-cols-[1fr_19rem] lg:items-end lg:gap-16">
          <div>
            <h1
              id="payment-title"
              className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.045em]"
            >
              Choose your <span className="text-[#e6a141]">plan.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#b8c4cb] sm:text-lg sm:leading-8">
              A website to showcase your business, or a web app to do more.
              Choose a hosting plan, or talk with us about a custom project.
            </p>
          </div>

          <div className="flex items-start gap-3 text-sm leading-6 text-[#b8c4cb]">
            <LockKeyhole
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-[#e6a141]"
            />
            <p>
              <span className="block font-semibold text-white">Standard &amp; Premium checkout</span>
              Payment details are entered directly on Stripe. Custom starts with a conversation.
            </p>
          </div>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isCustom = plan.name === "Custom";

            return (
              <article
                key={plan.name}
                aria-labelledby={`plan-${plan.name.toLowerCase()}`}
                className={`flex min-w-0 flex-col rounded-3xl border border-[#31414c] bg-[#0b1c27] p-6 sm:p-8 ${isCustom ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-[#b8c4cb]">
                    {plan.category}
                  </p>
                  <Icon aria-hidden="true" className="size-6 shrink-0 text-[#91b6c8]" />
                </div>

                <h2
                  id={`plan-${plan.name.toLowerCase()}`}
                  className="mt-6 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
                >
                  {plan.name}
                </h2>
                <p className="mt-4 text-base leading-7 text-[#c4ced4]">
                  {plan.description}
                </p>

                <div className="mt-auto pt-6">
                  <p id={isCustom ? "custom-details" : undefined} className="mb-6 border-t border-[#31414c] pt-5 text-sm leading-6 text-[#a8bac5]">
                    <span className="font-medium text-white">A good fit for: </span>
                    {plan.examples}
                  </p>
                  <Button
                    asChild
                    className="payment-gradient-button w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6a141]"
                  >
                    <a
                      href={plan.href}
                      referrerPolicy="no-referrer"
                      aria-describedby={isCustom ? "custom-details" : "checkout-details"}
                    >
                      Choose {plan.name}
                    </a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-[#31414c] pt-6 text-sm leading-6 text-[#a8bac5] sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <p id="checkout-details" className="max-w-xl">
            Standard and Premium billing details are reviewed on Stripe before
            confirming. Custom scope and pricing are agreed in conversation.
            Selecting a plan here does not charge you.
          </p>
          <a
            href="/contact"
            className="inline-flex min-h-11 shrink-0 items-center self-start rounded-sm font-medium text-white underline decoration-[#728c9c] underline-offset-4 transition-colors hover:text-[#e6a141] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6a141]"
          >
            Need help choosing? Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
