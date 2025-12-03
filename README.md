# Fully Functional Dental Clinic Website

**Live Site**: [https://www.dreugeniavila.com/](https://www.dreugeniavila.com/en/)

Built a professional website as a side project for a dental clinic in Málaga, Spain, using Astro, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Astro 5.0 (static site generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Astro Icon
- **Deployment**: Production deployment with custom domain

## Features

- **Internationalization**: Full bilingual support (Spanish/English) with dynamic language switching
- **Responsive Design**: Mobile-first, optimized for all devices
- **SEO Optimized**: Meta tags, structured data, sitemap generation
- **Performance**: Static site generation for fast load times
- **Component Architecture**: Modular, reusable component system
- **Type Safety**: Full TypeScript implementation

## Technical Highlights

- Implemented custom i18n system for bilingual content management
- Built reusable component library with Astro components
- Optimized image handling and lazy loading
- Structured data markup for better search engine visibility
- Production deployment with custom domain configuration

## Project Structure

```
dental_clinic_website/
├── src/
│   ├── assets/
│   │   ├── favicons/               # Favicon set (SVG, PNG, ICO)
│   │   ├── images/                 # Clinic images, gallery, service photos
│   │   └── styles/
│   │       └── tailwind.css        # Global Tailwind CSS
│   │
│   ├── components/
│   │   ├── common/                 # Shared components (Analytics, Metadata, LanguageSwitcher, etc.)
│   │   ├── ui/                     # Base UI components (Button, Form, Timeline, etc.)
│   │   └── widgets/                # Page sections (Header, Footer, Hero, Features, Testimonials, etc.)
│   │
│   ├── data/
│   │   ├── navigation.ts           # Bilingual navigation structure
│   │   └── reviews.ts              # Patient reviews data
│   │
│   ├── i18n/
│   │   ├── en.json                 # English translations
│   │   └── es.json                 # Spanish translations
│   │
│   ├── integrations/
│   │   └── astrowind/              # AstroWind template integration
│   │
│   ├── layouts/
│   │   ├── Layout.astro            # Base HTML layout
│   │   ├── PageLayout.astro        # Standard page layout with Header/Footer
│   │   └── MarkdownLayout.astro    # Markdown content layout
│   │
│   ├── pages/
│   │   ├── en/                     # English routes
│   │   │   ├── index.astro
│   │   │   ├── about.astro
│   │   │   ├── services.astro
│   │   │   ├── gallery.astro
│   │   │   ├── reviews.astro
│   │   │   ├── contact.astro
│   │   │   ├── privacy.md
│   │   │   └── terms.md
│   │   ├── index.astro             # Spanish homepage
│   │   ├── sobre-mi.astro          # About (Spanish)
│   │   ├── servicios.astro         # Services (Spanish)
│   │   ├── galeria.astro           # Gallery (Spanish)
│   │   ├── resenas.astro           # Reviews (Spanish)
│   │   ├── contacto.astro          # Contact (Spanish)
│   │   ├── privacy.md              # Privacy policy (Spanish)
│   │   ├── terms.md                # Terms (Spanish)
│   │   └── 404.astro               # 404 error page
│   │
│   ├── types/
│   │   └── index.d.ts              # TypeScript type definitions
│   │
│   ├── utils/
│   │   ├── i18n.ts                 # Internationalization utilities
│   │   ├── reviews.ts              # Review processing & filtering
│   │   ├── images.ts               # Image optimization helpers
│   │   ├── permalinks.ts           # URL generation
│   │   └── ...                     # Additional utility functions
│   │
│   └── env.d.ts                    # Environment type definitions
│
├── public/
│   ├── _headers                    # Netlify cache headers
│   └── robots.txt                  # SEO robots file
│
├── docs/                           # Project documentation
│   ├── cv.md
│   └── eugenia_vila_cv.pdf
│
├── .github/
│   └── workflows/
│       ├── deploy.yml              # GitHub Pages deployment
│       └── actions.yaml            # CI/CD checks
│
├── astro.config.ts                 # Astro framework configuration
├── config.yaml                     # Site configuration (SEO, i18n, metadata)
├── tailwind.config.js              # Tailwind CSS customization
├── tsconfig.json                   # TypeScript configuration
├── eslint.config.js                # ESLint rules
├── package.json                    # Dependencies & scripts
└── LICENSE.md
```
