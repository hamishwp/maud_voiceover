# Maud Fasel Voiceover Website — Ideas & Implementation Plan

## Concept

A clean, minimal, European-elegant static website for Maud Fasel, multilingual voiceover artist (EN/FR/DE/IT), specialising in radio and TV commercials. The site's primary goal is to convert agency producers and casting directors into paying clients — quickly.

The design philosophy: **demo-first, friction-free contact, quiet confidence**. The site should feel like the work: polished, professional, and immediately impactful.

---

## Site Structure

Single-domain site at `maudsvoice.com`, with a language switcher for EN / FR / DE / IT. Each language version will be a separate HTML page (`/fr/index.html` etc.) with fully translated copy — not machine translation.

### Pages

| Page | Path | Purpose |
|------|------|---------|
| Home | `/index.html` | Hero video, featured demos, trust signals, CTA |
| Demos | `/demos.html` | Full audio library by language and category |
| About | `/about.html` | Bio, headshots, studio setup |
| Services | `/services.html` | Work types, languages, markets served |
| Clients | `/clients.html` | Brand logos, credits, testimonials |
| Contact | `/contact.html` | Form, email, response promise |

---

## Homepage Design

### Hero Section — YouTube Video
The hero will feature a **YouTube embed showing Maud speaking directly to the audience**. Rather than autoplaying (avoided universally — browsers block audio autoplay anyway), it will display a professional thumbnail/poster with a prominent play button overlay. On click, the YouTube player activates.

Benefits:
- Immediately demonstrates voice quality and personality
- Builds human connection before the visitor reads a word
- No hosting cost for video — YouTube CDN handles delivery

Layout: Full-width on desktop, stacked on mobile. Headline and CTA sit alongside the video on desktop, below it on mobile.

### Below the Hero
- Language badges prominently displayed (EN / FR / DE / IT)
- 3–4 featured inline audio demo players (HTML5 `<audio>` elements, custom-styled)
- "Trusted by" client logo strip
- 2–3 testimonial quotes
- Contact CTA button

---

## Technical Approach

### Stack
- **Pure HTML5 + CSS + vanilla JavaScript** — no framework, no build step, no Node.js required
- **Tailwind CSS via CDN** — included with a single `<script>` tag; no installation needed. Provides a full utility-first responsive design system and makes mobile/desktop layout straightforward
- **No backend** — static files only

### Why this stack
- Works immediately in Cursor with no setup
- Deployable to any static host (Netlify, GitHub Pages, Cloudflare Pages)
- No dependencies to install or maintain
- Cursor's built-in browser preview (or VS Code Live Preview extension, already available in Cursor) allows instant side-by-side laptop/mobile visualisation using browser DevTools responsive mode — no additional software

### Responsive Preview in Cursor
Open the built-in Simple Browser (Cmd/Ctrl+Shift+P → "Simple Browser") pointed at a local file, or use the Live Preview extension. For mobile simulation, open Chrome/Edge DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M) to simulate any phone screen size.

### Audio
- HTML5 `<audio>` elements with custom CSS-styled controls
- MP3 files stored in `/audio/` directory, organised by language (`/audio/en/`, `/audio/fr/`, etc.)
- Externally hosted demos (SoundCloud, Voice123, etc.) embedded via iframe or linked with a play button

### Video
- YouTube `<iframe>` embed in the hero, with `loading="lazy"` and a custom thumbnail overlay for performance
- Clicking the thumbnail swaps in the real iframe (a common "facade" pattern that keeps initial page load fast)

### Contact Form
- **Formspree** (free tier) — a service that receives form submissions and emails them to Maud. Requires adding only an `action` URL to the HTML `<form>` tag. No backend, no JavaScript, works on any static host.

### Multilingual
- Separate `.html` files per language under language subdirectories (`/fr/`, `/de/`, `/it/`)
- A language switcher in the navigation links between equivalents
- The English version at the root is the default

### Hosting Recommendation
**Netlify** (free tier) is the strongest recommendation:
- Connects directly to this Git repository — every push to `main` auto-deploys
- Free SSL certificate (required for `maudsvoice.com`)
- Handles custom domain setup (point DNS to Netlify, done)
- Formspree is not needed if Netlify Forms is used instead (built-in form handling, also free)
- No command-line or software needed to deploy after initial setup

---

## Design Direction

- **Palette**: To be defined — likely a neutral base (off-white or deep charcoal) with one accent colour. Will be informed by Maud's headshots and any existing brand assets.
- **Typography**: A clean serif or humanist sans-serif for headings (Google Fonts, loaded via CDN), neutral sans-serif for body text
- **Tone**: Understated European elegance — confident without being loud
- **No auto-playing audio or video**
- **No Flash-style intros or heavy animations** — subtle fade-ins only

---

## About Maud — Key Facts

- **Based in**: Lausanne, Switzerland
- **Languages**: English (fluent), French (fluent), German (fluent), Italian (B2 — competent but secondary)
- **Market to date**: Switzerland exclusively — Swiss brands, Swiss agencies, Swiss production companies
- **Studio**: Home studio (Lausanne) + works with Arcane Productions (Vevey)
- **Photography**: Two images available — close-up portrait (homepage hero) and full-length in rust dress (sidebar/about page)
- **Audio files**: Mix of local `.m4a` files in `/Audios/` and links to YouTube/online content
- **Hero video**: https://www.youtube.com/watch?v=jtedAQ8kv3o

## Finalised Decisions

| Topic | Decision |
|-------|----------|
| Audio content | Mix of local MP3 files and links to online content (YouTube, etc.) |
| Video content | Already on YouTube, spread across various channels — embedded via iframe |
| Testimonials | Generated as placeholders; Maud will refine with real quotes |
| Design tone | Classic, professional, elegant — not edgy, not boring |
| Typography direction | Classic serif headings + clean sans-serif body |
| Contact email | maud.fasel@gmail.com |
| Pricing page | Omitted (industry standard) |
| Site maintenance | Maud herself — HTML must be well-commented and easy to edit without coding knowledge |
| Agency representation | None |
| Default language | English (root `/index.html`) |

## Design System

### Colour Palette
- Background: warm ivory / off-white (`#FAF8F5`)
- Primary text: deep charcoal (`#1C1C1C`)
- Accent: muted gold (`#B8963E`) — used sparingly for CTAs, underlines, highlights
- Secondary surface: light warm grey (`#F0EDE8`) for alternating sections

### Typography (Google Fonts, CDN — no install)
- Headings: **Playfair Display** (classic serif, editorial, immediately signals quality)
- Body / UI: **Inter** (clean, highly legible, professional)

### Rationale
Playfair Display + Inter is a well-established pairing used across luxury and professional services branding. Warm ivory + charcoal + gold reads as confident and European without feeling dated or corporate.

## Language Strategy

- **Priority order**: EN > FR > DE > IT
- **Auto-detection**: A small JS snippet on `index.html` reads `navigator.language` / `navigator.languages` and redirects automatically to the matching language subdirectory (`/fr/`, `/de/`, `/it/`). English is the root (`/`). If the device language doesn't match EN/FR/DE/IT, defaults to EN.
- **Manual override**: A language switcher in the nav allows users to switch manually. The choice is saved to `localStorage` so it overrides auto-detection on return visits.
- **Separate HTML files per language** in subdirectories — no JS i18n framework. Simple, fast, and editable by Maud directly.
- Italian included as a full language (B2 level — noted in bio copy, not hidden).

## Other Confirmed Decisions

- LinkedIn: https://www.linkedin.com/in/maudfasel/
- Arcane Productions (Vevey) — credited and linked on the site
- Client logo strip: script at `scripts/fetch_brand_icons.py` auto-downloads logos from xlsx and builds `Images/Brand_Icons/_logo_strip.png`
- Nespresso logo unavailable via free APIs (only 16×16 favicon) — to be added manually
- Hero YouTube video ID: `jtedAQ8kv3o`

## Maintenance Notes for Maud
Since Maud will update the site herself:
- All HTML files will be heavily commented, clearly marking where to swap in new audio files, update testimonials, add client logos, etc.
- Audio demo sections will follow a consistent, copy-paste-friendly pattern
- No build step — she edits `.html` files directly and pushes to Git (or Netlify drag-and-drop)
