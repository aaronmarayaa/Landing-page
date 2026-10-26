# Ascend Logix Landing Page

A responsive futuristic landing page built with:

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- shadcn-style reusable Button component

## Sections

- Home
- About Us
- Services
- Why Ascend Logix
- Contact
- Footer

## Quick setup

### Option A — use this folder as the project

Open a terminal inside this folder and run:

```bash
npm install
npm run dev
```

### Option B — paste into an existing Vite React TypeScript project

Copy these into your project:

- `src/`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`

Then install the required packages:

```bash
npm install tailwindcss @tailwindcss/vite framer-motion lucide-react clsx tailwind-merge class-variance-authority @radix-ui/react-slot
npm install -D @types/node
```

Then run:

```bash
npm run dev
```

## Logo files

The provided Ascend Logix transparent logo files are already placed in:

- `src/assets/ascend-logo.png`
- `src/assets/ascend-symbol.png`

## Contact form

The contact forms submit through FormSubmit to `ascendlogix.ca@gmail.com`. Custom plan inquiries also copy `ascendlogix.clients@gmail.com` using FormSubmit's documented [`_cc` field](https://formsubmit.co/documentation). These submissions include the Custom plan, name, email, phone country and number, and project details, with a dedicated Custom Plan Inquiry subject. The primary FormSubmit endpoint must be activated for the deployed website; inbox delivery has not been live-tested in this task.

Choose Custom opens `/contact?plan=custom#contact-form`, selects the Custom plan, and scrolls to the inquiry form. The form explains that scope and pricing are discussed before payment. Loading, accepted, and error states are shown; provider rejections do not clear the entered details or show success.

Run the network-free submission checks with `node --test scripts/contact-inquiry.test.mjs`.

## Editing content

Most content is separated into components:

- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Services.tsx`
- `src/components/WhyUs.tsx`
- `src/components/Contact.tsx`

This makes it easy to replace text without touching the page structure.


## V2 animation update

This version includes hover-activated traveling circuit lights in the service cards and a new Ascend Logix central-network section.

## Payment plans

The header's **Upgrade** button opens `/payment` on desktop and mobile.

- **Standard:** hosting for business websites, portfolios, and landing pages.
- **Premium:** hosting for websites and web apps, such as customer portals, booking tools, and dashboards.
- **Custom:** a conversation about project requirements, scope, and pricing through the contact form.

The product links are defined in `src/pages/PaymentPage.tsx`. Standard and Premium currently open Stripe sandbox subscriptions. Replace those two links with live Stripe Payment Links before accepting real payments. The test-mode notice has been removed from the page as requested. Prices, currency, and recurring billing details are reviewed on Stripe. Custom opens the contact form. This site does not collect card details or require a Stripe secret key.

Hostinger's website and web-app counts describe hosting capacity, so the page does not present them as a per-customer entitlement or promise unlimited project builds. The distinction follows [Hostinger's web-app hosting documentation](https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/). Example app features describe suitable uses, rather than automatically included development work.

### Payment-page design and verification

Reading this as a plan selection page for Ascend Logix customers, using the site's existing navy, amber, and teal identity. Dials: ENERGY 2 / RHYTHM 2 / MOTION 1.

- Navy and the existing sans-serif type keep the page consistent with the site; the existing animated amber-to-teal button gradient connects Upgrade with all three choices. A dark overlay keeps white button labels readable across the gradient.
- Three equally weighted cards present the three requested choices without inventing a recommended tier. Cards stack on phones, show Custom across both tablet columns, and form three columns from 1024px.
- A large heading establishes the page's purpose; shorter card copy puts the plan choice first. Spacing separates the introduction, selection, and billing explanation.
- Website, app, conversation, and lock icons identify product types, the Custom discussion, and the Stripe handoff. Only hover and focus transitions are added; no decorative assets or animation are needed.

Verified locally on 2026-10-26:

- PASS, build: `npm run build` completes with TypeScript and Vite.
- PASS, navigation: header Upgrade opens `/payment`; the help link opens `/contact`; Upgrade returns from Contact to the payment page.
- PASS, checkout: Choose Standard opens the supplied Standard Stripe link and shows Subscribe to Standard; Choose Premium opens the supplied Premium link and shows Subscribe to Premium. Both display Sandbox and monthly billing. No payment information was entered or submitted.
- PASS, responsive layout: checked 320, 375, 600, 768, 1024, and 1440px widths; no horizontal overflow, cards stack or align as intended, and Upgrade remains visible. Both checkout links have 48px tap targets; Upgrade and the mobile menu have 44px targets.
- PASS, keyboard: Tab advances from Upgrade to Choose Standard to Choose Premium, with solid visible focus outlines on the plan links. The mobile menu opens and closes.
- PASS, runtime: no local application console errors. Stripe emits its own sandbox warning that Link is not activated for live payments.
- PASS, hard gate: product names and checkout destinations match Stripe; recurring billing is disclosed and the page notice was removed at the user's request. No card inputs, credentials, invented prices, unsupported capacity promises, or custom visual assets are added. Content is static, so fetch/loading/error states do not apply.
- PASS, purpose gate: palette, type, equal card layout, icons, and motion have the reasons recorded above; the gradient buttons use a dark overlay for label contrast and no decorative page backgrounds are added.
- PASS, liveliness: the declared dials match the prominent brand-colored headline, three product choices, quiet billing explanation, and hover-only motion.
- PASS, craftsmanship: all added controls have working destinations; the implementation reuses the existing page shell, header, footer, and responsive type system.
- PASS, button update: the page notice is absent; Upgrade and both Choose links use the same 200%-width brand gradient and 700ms hover transition. Checked the rendered styles, unchanged destinations, zero console errors, and 320px mobile fit with 44px/48px button heights. Reduced-motion support is retained through the existing stylesheet.
- PASS, Custom navigation and validation: clicking Choose Custom opens the contact page with the Custom value read-only, custom project instructions, the clients email, and Send Custom Inquiry. Submitting an empty form focuses First name and blocks the request through required-field validation. Custom form fits at 320px; all three plan cards fit at 320, 600, 768, 1024, and 1440px without horizontal overflow. No local application console errors were observed.
- PASS, submission routing: five tests exercise the actual submission helper with local mock responses, covering the clients CC plus full details, general inquiry routing, compact homepage fields, HTTP/provider/JSON failures, and network failures. No test messages were sent to FormSubmit or the mailboxes; activation and actual mailbox delivery remain unverified.
