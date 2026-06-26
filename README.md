# LignoGold Terra Solutions — Official Website

A professional Next.js 14 website for LignoGold Terra Solutions, an MSME-registered deep-tech startup based in Chennai, India.

## Tech Stack
- **Framework**: Next.js 14 App Router
- **Styling**: Tailwind CSS + Glassmorphism & Custom CSS Utilities
- **Icons**: Lucide React
- **Fonts**: Playfair Display + Inter (via Google Fonts)
- **Contact Form**: Formspree
- **Deployment**: Vercel — [Live App](https://lignogold-terra-solutions.vercel.app/)

## Brand Colors
| Name        | Hex       | Usage                          |
|-------------|-----------|--------------------------------|
| Wood Brown  | `#5C3D11` | Headings, navbar, body text   |
| LignoGold   | `#C89527` | CTAs, buttons, accents        |
| Earth Green | `#3A6B1A` | Environmental sections        |
| Cream White | `#FAF7F0` | All page backgrounds          |
| Dark Brown  | `#2C1A06` | Footer, dark hero sections    |

## Pages
- `/` — Home (Hero, Problem, Solution, Process, Market, SDG, CTA)
- `/about` — About Us, Three Pillars, Business Model, Roadmap
- `/technology` — Ligno-Pod details, 4-step process, Solar Dryer, Evidence
- `/impact` — Environmental impact pillars, Before/After, SDG goals
- `/team` — Founder profiles, Strategic requirements
- `/contact` — Contact form (Formspree) + direct contact details

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
```

Get your Formspree ID at https://formspree.io

## Adding Team Photos

Place photos in `/public/images/`:
- `logo.jpeg` — Company logo
- `manjueesa.jpeg` — CEO photo
- `jaiyendhran.jpeg` — CSO photo

Then update the team card avatars in `app/team/page.tsx` to use `<Image>` from `next/image`.

## Deployment (Vercel)

```bash
npm install -g vercel
vercel deploy
```

Set `NEXT_PUBLIC_FORMSPREE_ID` in Vercel project settings under Environment Variables.

## Project Structure

```
├── app/
│   ├── layout.tsx           ← Root layout (Navbar + Footer)
│   ├── page.tsx             ← Home /
│   ├── about/page.tsx       ← About /about
│   ├── technology/page.tsx  ← Technology /technology
│   ├── impact/page.tsx      ← Impact /impact
│   ├── team/page.tsx        ← Team /team
│   └── contact/             ← Contact /contact
├── components/
│   ├── layout/              ← Navbar, Footer
│   ├── ui/                  ← Button, SectionLabel, PageHero
│   └── home/                ← All home page sections
└── lib/
    └── constants.ts         ← All static data
```
