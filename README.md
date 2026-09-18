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

The contact form is visual/front-end only right now. Connect it to your preferred backend, email API, Firebase, Formspree, EmailJS, etc., when needed.

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
