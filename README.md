# Vaishanavi Nasha Mukti Kendra

A modern, calming React website for Vaishanavi Nasha Mukti Kendra — a wellness and recovery center. Built with a premium wellness theme, soft gradients, and conversion-focused layout.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** — styling (lavender, sky blue, teal theme)
- **Framer Motion** — scroll animations, loading, transitions
- **React Router** — multi-page navigation

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Pages

- **Home** — Hero, Recovery Journey timeline, Why Choose Vaishanavi, Healing Environment
- **Our Approach** — Holistic healing, personalized plans, family involvement
- **Treatment Plans** — Alcohol, Drug, Tobacco, Behavioral, Mental Wellness (cards with Enquire Now)
- **Recovery Journey** — Daily routine, therapy, meditation, skills, recreation (storytelling UI)
- **Daily Activities** — Indoor games, yoga, counseling, motivational sessions, physical activities, wellness
- **Facilities & Care** — 24x7 support, rooms, food, counseling, security, emergency (image cards with hover)
- **Success Stories** — Testimonials slider, before/after, video section placeholder
- **Admission** — Step UI + enquiry form (name, age, addiction type, phone, message) with success popup
- **Contact** — Emergency helpline banner, contact form, address, map placeholder, WhatsApp CTA, 24/7 box

## Features

- Lavender / soft purple + sky blue + teal gradient theme
- Poppins (headings) + Inter (body)
- Glassmorphism-style cards, gradient buttons
- Floating WhatsApp button
- SEO meta tags in `index.html`
- Loading animation on first load
- Smooth scroll, focus-visible for accessibility
- Reduced-motion respected
- Responsive layout and mobile menu

## Customization

- **Images**: Replace Unsplash URLs in pages/components with your own or update in `src/pages/` and `src/components/`.
- **Contact**: Update phone number and WhatsApp in `src/components/WhatsAppFloat.tsx`, `src/components/Footer.tsx`, and `src/pages/Contact.tsx`.
- **Address**: Edit the address block in `src/pages/Contact.tsx` and add your Google Map embed iframe in the placeholder div.
