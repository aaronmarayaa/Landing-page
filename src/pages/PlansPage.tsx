import { useEffect } from "react";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { managementPlans } from "@/lib/managementPlans";
import { cn } from "@/lib/utils";

const stripeCustomerPortalUrl = "https://billing.stripe.com/p/login/dRm3codaB6e89Ks8mabbG00";

export default function PlansPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Monthly Website Management Plans | Ascend Logix";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <section
      aria-labelledby="plans-title"
      className="bg-[#06141d] px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <h1
            id="plans-title"
            className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.045em]"
          >
            Monthly Website{" "}
            <span className="text-[#e6a141]">Management Plans</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#b8c4cb] sm:text-lg sm:leading-8">
            Keep your website live, secure and accessible with our monthly
            hosting, domain and security management services. Without these
            services, your website will be inaccessible to visitors across all
            browsers.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {managementPlans.map((plan) => (
            <article
              key={plan.slug}
              className="min-w-0"
            >
              <a
                href={plan.checkoutUrl ?? `/contact?plan=${plan.slug}#contact-form`}
                target={plan.checkoutUrl ? "_blank" : undefined}
                rel={plan.checkoutUrl ? "noopener noreferrer" : undefined}
                referrerPolicy={plan.checkoutUrl ? "no-referrer" : undefined}
                aria-labelledby={`choose-${plan.slug}`}
                aria-describedby={plan.checkoutUrl ? "subscription-disclaimer" : "custom-details"}
                className="payment-plan-card flex h-full min-w-0 flex-col rounded-3xl border border-[#31414c] bg-[#0b1c27] p-6 sm:p-8 xl:p-6"
              >
              <h2
                id={`plan-${plan.slug}`}
                className="text-3xl font-semibold tracking-[-0.035em] xl:text-[1.7rem]"
              >
                {plan.name}
              </h2>

              <p className="mt-5 flex min-h-12 flex-wrap items-baseline gap-x-1">
                {plan.monthlyPrice !== null ? (
                  <>
                    <span className="text-5xl font-semibold tracking-[-0.045em]">
                      ${plan.monthlyPrice}
                    </span>
                    <span className="text-base text-[#b8c4cb]">/month</span>
                  </>
                ) : (
                  <span className="text-3xl font-semibold tracking-[-0.035em]">
                    Let’s talk
                  </span>
                )}
              </p>

              <p className="mt-4 min-h-12 text-sm leading-6 text-[#c4ced4]">
                {plan.audience}
              </p>

              {plan.description && (
                <p id="custom-details" className="mt-4 text-sm leading-6 text-[#c4ced4]">
                  {plan.description}
                </p>
              )}

              <ul className="mb-8 mt-6 space-y-3 border-t border-[#31414c] pt-6 text-sm leading-6 text-[#c4ced4]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-[#91b6c8]"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <span
                id={`choose-${plan.slug}`}
                className={cn(buttonVariants(), "payment-gradient-button mt-auto w-full")}
              >
                Choose {plan.name}
              </span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 border-t border-[#31414c] pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div>
            <h2 className="text-base font-semibold text-white">Already subscribed?</h2>
            <p id="customer-portal-details" className="mt-1 text-sm leading-6 text-[#b8c4cb]">
              Update your payment method or cancel your subscription through
              Stripe. Opens in a new tab.
            </p>
          </div>
          <a
            href={stripeCustomerPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            aria-describedby="customer-portal-details"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full shrink-0 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6a141] sm:w-auto"
            )}
          >
            Manage subscription
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-[#31414c] pt-6 text-sm leading-6 text-[#a8bac5] sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <p id="subscription-disclaimer" className="max-w-3xl">
            No long-term commitment. You can cancel your subscription at any time;
            however, your website will no longer be live or accessible once your
            service ends.
          </p>
          <a
            href="/contact"
            className="inline-flex min-h-11 shrink-0 items-center self-start rounded-sm font-medium text-white underline decoration-[#728c9c] underline-offset-4 transition-colors hover:text-[#e6a141] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6a141] sm:self-auto"
          >
            Need help choosing? Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
