# Gourav Kaushik — Personal Portfolio

Production-quality personal portfolio designed and engineered for **Gourav Kaushik**, an undergraduate Computer Engineering student building data-driven software, practical business applications, and machine learning systems.

---

## 🧭 Design Philosophy

Built with an understated, developer-first aesthetic inspired by high-craft developer sites, open-source documentation, and tools like GitHub and Linear:

- **Refined Dark Palette:** Charcoal canvas (`#0a0d12`), soft white typography (`#f0f6fc`), muted gray accents (`#8b949e`), and restrained blue (`#58a6ff`).
- **Substance Over Decoration:** Zero generic gradients, zero floating orbs, zero fake testimonials. Every element represents real code, real repositories, and verified engineering facts.
- **Editorial Project Layout:** Real repositories selected and detailed with verified problem statements, stack breakdowns, engineering trade-offs, and inspectable code/schema snippets.
- **Accessible & Responsive:** Semantic HTML, ARIA labels, keyboard focus rings, skip-to-content navigation, and `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Inter (Sans-serif) & JetBrains Mono (Monospace)

---

## 📂 Project Structure

```text
gourav-portfolio/
├── index.html                  # Semantic entry point with SEO & fonts
├── package.json                # Dependencies & scripts
├── tailwind.config.js          # Design system color tokens & typography
├── tsconfig.json               # Strict TypeScript configuration
├── vite.config.ts              # Vite server & build setup
└── src/
    ├── main.tsx                # Application bootstrap
    ├── index.css               # Tailwind directives, custom scrollbars, accessibility
    ├── App.tsx                 # Root layout & landmarks
    ├── data/
    │   ├── profile.ts          # Verified personal & contact details
    │   ├── projects.ts         # Verified GitHub project catalog & code excerpts
    │   ├── skills.ts           # Categorized technical competencies
    │   └── engineeringPrinciples.ts # Case studies & architectural decisions
    └── components/
        ├── Navbar.tsx          # Sticky responsive header with monogram & quick links
        ├── Hero.tsx            # Intro, status indicator, action buttons & terminal
        ├── TerminalPreview.tsx # Interactive developer console with profile & workflow code
        ├── About.tsx           # Authentic narrative & engineering tenets
        ├── Projects.tsx        # Filterable editorial project showcase
        ├── ProjectCard.tsx     # Project card with collapsible code/schema inspection
        ├── Skills.tsx          # Clean domain-grouped skill cards
        ├── EngineeringDetails.tsx # Real architectural case studies
        ├── Contact.tsx         # Direct verified email with copy button & social links
        └── Footer.tsx          # Clean copyright & back-to-top navigation
```

---

## 🚀 Getting Started

### 1. Development Server

```bash
npm run dev
```

Opens the local development server at `http://localhost:3000` with hot module replacement (HMR).

### 2. Production Build

```bash
npm run build
```

Performs strict TypeScript validation and bundles optimized, minified production assets into the `dist/` folder.

### 3. Production Preview

```bash
npm run preview
```

Simulates the production environment locally.

---

## 🌐 One-Click Deployment

This portfolio builds to static HTML/CSS/JS with zero runtime server requirements.

- **Vercel:** Run `npx vercel` or link the GitHub repository in the Vercel dashboard.
- **GitHub Pages:** Deploy the `dist/` folder directly via GitHub Actions.
- **Cloudflare Pages / Netlify:** Build command `npm run build`, output directory `dist`.

---

## 👤 Author & Links

- **Name:** Gourav Kaushik
- **GitHub:** [github.com/gouravkaushik0003](https://github.com/gouravkaushik0003)
- **LinkedIn:** [linkedin.com/in/gourav-kaushik-45aa66307](https://linkedin.com/in/gourav-kaushik-45aa66307)
- **Email:** [gouravkaushik0003@gmail.com](mailto:gouravkaushik0003@gmail.com)
