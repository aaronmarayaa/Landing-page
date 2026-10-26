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

## Monthly Website Management Plans

The header's **Upgrade** button opens `/payment` on desktop and mobile.

- **Essential:** $30/month for simple informational websites.
- **Business:** $59/month for growing small businesses.
- **Business Plus:** $99/month for websites with interactive features.
- **Custom:** scope and pricing are discussed for stores and custom platforms.

Plan names, prices, audience descriptions, feature lists, and Stripe links are defined in `src/lib/managementPlans.ts`. All content and amounts follow the supplied management-plan brief. Prices display the supplied dollar symbol; Stripe displays checkout currency and billing details. The three paid tiers use their newly supplied Stripe sandbox links. Custom opens the contact form. The initial duplicate Business URL was replaced with the user's corrected Business link ending in `gQE05`, verified to open Subscribe to Business.

Replace the three test links with live links before accepting real payments. The page keeps the requested gradient hover animation and omits the removed test-mode notice. No card details or Stripe secret keys are collected by this site.

### Payment-page design and verification

Reading this as a plan selection page for Ascend Logix customers, using the site's existing navy, amber, and teal identity. Dials: ENERGY 2 / RHYTHM 2 / MOTION 1.

- Navy, the existing sans-serif type, and the requested amber-to-teal button gradient preserve the established site identity; a dark overlay keeps labels readable.
- Four equally weighted cards reflect the four supplied plans, with no invented recommended tier. The layout uses one column on phones, two from 768px, and four from 1280px so feature lists remain readable.
- Plan names and prices establish comparison hierarchy; the user's full feature lists follow, and aligned buttons make each action easy to find. Custom displays conversation-based pricing rather than an invented amount.
- Checkmarks identify included services. Each card is one native link, with the gradient Choose label retained as a visual button inside it. Cards grow by 2% on hover to identify the full click target; this effect is limited to fine pointers with hover support. Keyboard focus outlines the whole card, and reduced-motion settings disable the enlargement.

Verification for the current management-plan update:

- PASS, build: `npm run build` completes with TypeScript and Vite.
- PASS, content: the page shows the requested heading, introduction, Essential $30, Business $59, Business Plus $99, and Custom description. All 27 supplied feature entries are present across the four cards (6/7/7/7).
- PASS, responsive layout: checked 320, 375, 600, 768, 1024, 1280, and 1440px widths with no horizontal overflow; the grid changes from one to two to four columns.
- PASS, keyboard: Tab from Choose Essential focuses Choose Business with a solid 2px outline.
- PASS, subscription routing: Essential and Business Plus checkout pages show their matching product names and monthly billing; the corrected Choose Business button opens Subscribe to Business. No card or customer details were entered.
- PASS, inquiry routing: Choose Custom opens the contact page with Custom selected, the clients email displayed, and Send Custom Inquiry. An empty submission focuses First name and blocks the request. The original clients-inbox copy remains in place.
- PASS, submission tests: the five existing tests verify the submission helper with local mock responses, including custom CC, general and compact forms, provider failures, and network failures. Inbox delivery remains unverified; no test emails were sent.
- PASS, hard gate: all plan details come from the user's brief, links match the supplied tiers, monthly billing is clear, and form loading/error/accepted states remain in place. No payment credentials or invented prices are added.
- PASS, purpose gate: the palette, comparison grid, checkmarks, typography, and requested gradient motion serve the recorded purposes above.
- PASS, liveliness: the declared dials match the brand-colored title, prominent prices, complete feature lists, and hover-only animation.
- PASS, craftsmanship: the existing page shell and contact flow are reused, pricing comes from one catalog, and each button has a working destination.
- PASS, clickable-card update: clicking Essential feature text, the Business and Business Plus titles, and the Custom title opens each matching destination. Hovering Essential produces a computed 1.02 scale. Tab moves to the next card with a solid 2px outline. At 320, 768, and 1280px, all four links fit without horizontal overflow; there are no nested links or buttons. No local application console errors were observed. Existing reduced-motion CSS disables the hover scale.
