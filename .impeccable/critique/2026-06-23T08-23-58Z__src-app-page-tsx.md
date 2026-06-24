---
target: landing page
total_score: 20
p0_count: 2
p1_count: 2
timestamp: 2026-06-23T08-23-58Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 1 | Form has no loading/success/error state — `onSubmit` fires `e.preventDefault()` and stops |
| 2 | Match System / Real World | 3 | Natural Spanish, correct renovation terminology ("llave en mano", "gremios") |
| 3 | User Control and Freedom | 2 | No visible "×" on mobile menu, no form clear, no FAQ "close all" |
| 4 | Consistency and Standards | 2 | ViviendaSection CTA uses `#0D0D14` while every other primary CTA uses `#184690` navy |
| 5 | Error Prevention | 1 | No phone format validation, no required-field legend, no anti-spam visible |
| 6 | Recognition Rather Than Recall | 3 | Service categories visible in nav and footer, FAQ tab state persists |
| 7 | Flexibility and Efficiency | 2 | WhatsApp link present but no sticky CTA on mobile, no phone click-to-call in hero |
| 8 | Aesthetic and Minimalist Design | 2 | 10+ sections with identical rhythm; banned eyebrow motif on every section |
| 9 | Error Recovery | 1 | Form submit produces no response — broken primary conversion surface |
| 10 | Help and Documentation | 3 | FAQ covers real objections with specific answers; phone + email + WhatsApp all present |
| **Total** | | **20/40** | **Acceptable — significant improvements needed** |

---

## Anti-Patterns Verdict

**LLM assessment**: Yes, clearly AI-generated. Three converging tells:

1. **Eyebrow pattern fires on every section.** The `w-5 h-px bg-[#184690]` line + 10px uppercase tracked label appears in Hero, WhyUs, ViviendaSection, LocalesSection, Process, FAQ, Contact, and all four Footer column headers. Used as section-opening grammar rather than a deliberate device. When every section opens identically, the pattern communicates nothing — it becomes structural wallpaper.

2. **Numbered prefixes applied reflexively.** ViviendaSection renders 8 service items as `01–08`; LocalesSection renders 6 as `01–06`. Neither list is sequential — the numbers exist because the model iterated an array and prepended the index. Process.tsx uses 01–04 correctly (actual steps). The inconsistency — numbers where they're decorative, numbers where they're semantic — is a tell.

3. **Hero stat strip matches the hero-metric template.** Four metrics in a `grid-cols-4` with `border-l` dividers and uppercase label captions is the flagged SaaS-cliché structure. The metrics themselves (100+, 6+ años) are modest for a premium positioning, which compounds the problem.

**Deterministic scan**: The automated detector returned **0 violations** — no gradient text, no glassmorphism, no hard-coded bad patterns in the markup. This means the issues are structural and rhythmic, not line-by-line code anti-patterns. The detector's clean result doesn't contradict the human review; it confirms the problems are compositional, not syntactic.

---

## Overall Impression

The page's visual restraint is real and deliberate — the navy-white-dark alternation and the refusal to over-decorate are genuine strengths. But the restraint is scaffolding-restrained, not design-restrained: every section is identically structured, which makes the page feel like a system generated it rather than a studio chose it. The single most important problem is buried: the contact form does nothing. The second most important: the headline at the most critical moment in the sales funnel says exactly what every competitor says.

Biggest single opportunity: rewrite the hero headline and subtitle as a specific, non-copyable positioning statement, and wire the form. Everything else is polish by comparison.

---

## What's Working

**1. Section-sequencing logic.** Vivienda → WhyUs → Locales → Process → Coverage → FAQ → Contact is a correctly ordered trust-building sequence. FAQ immediately before Contact is especially strong — it handles real objections (cost per m², permit requirements, timeline) at the exact moment before commitment. The decision to place FAQ adjacent to the form is above-average product thinking.

**2. Color discipline.** The `#184690` navy appears only in CTAs, accent bars, numbered prefixes, and FAQ `+` icons. The dark `#0D0D14` sections (Hero overlay, WhyUs, Coverage, Contact, Footer) provide structural rhythm without relying on ornament. The beige palette has been correctly eliminated. This level of color restraint is rare in the category.

**3. FAQ content quality.** The questions read like real customer anxieties ("¿Puedo vivir durante la reforma?", "¿Cuánto cuesta?", "¿Necesito licencia?"). The answers include specific numbers and commitments. The tab split (Vivienda / Locales) prevents information overload. This section alone will materially reduce drop-off for seriously interested prospects.

---

## Priority Issues

### [P0] Contact form produces no response on submit

**Why it matters**: `onSubmit` fires `e.preventDefault()` and stops. The primary conversion surface — the reason this landing page exists — is completely non-functional. Every click on any "Solicitar presupuesto" CTA ends in silence. This is a showstopper.

**Fix**: Wire a real handler (Resend, Formspree, or a Next.js API route). Add three states: loading (button text "Enviando…", disabled), success ("Hemos recibido tu solicitud. Te llamamos en menos de 24 horas."), error ("No se ha podido enviar. Llámanos directamente al +34 684 794 705"). Preserve form content on error.

**Suggested command**: `/impeccable harden` — specifically targets missing error/success states and edge-case handling.

---

### [P0] WCAG contrast failure on dark-section body text

**Why it matters**: `text-[#4A4A52]` on `#0D0D14` background is approximately 3.8:1 — below the 4.5:1 AA minimum for text at 13–15px. Affects: WhyUs card descriptions, LocalesSection highlight card bodies, Contact left column paragraph text. RD 1112/2018 (Spanish accessibility law) mandates AA compliance for public-facing digital services. The affected demographic (40–65 propietarios) is precisely the age group where contrast failures are most impactful.

**Fix**: In dark sections, replace `text-[#4A4A52]` with `text-white/55` (approximately 5.1:1 on `#0D0D14`) for body text. Or set a dedicated token `text-[#9A9AA4]` which passes AA on dark backgrounds.

**Suggested command**: `/impeccable audit` — run a11y pass across all dark-section text.

---

### [P1] Eyebrow pattern repeats on every section — the clearest AI tell

**Why it matters**: The `w-5 h-px + uppercase tracked label` motif appears in 8+ section headers and all footer column headings. A device used everywhere carries no signal. For the target audience (Madrid norte propietarios comparing 3–5 firms), a landing page where every section opens with the same structure reads as template-generated. This is the finding most likely to trigger "AI made this" recognition from a sophisticated buyer.

**Fix**: Reduce to maximum 2 deliberate instances (suggested: Hero eyebrow for brand tag, and one mid-page chapter-break moment such as the Process section). Remove eyebrows from WhyUs, ViviendaSection header, LocalesSection header, FAQ header, Contact left column. Let headline scale, background shift, and imagery carry section identity.

**Suggested command**: `/impeccable quieter` — strip AI scaffolding without losing structure.

---

### [P1] Hero headline is the category, not the brand

**Why it matters**: "Reformas Integrales en Madrid" is the exact headline shared by 200+ competitors. The subtitle ("Viviendas y locales comerciales. Diseño de interiores, ejecución premium y entrega garantizada.") is a feature checklist. In the first 5 seconds, a 60k€+ client comparing firms sees nothing that differentiates Art-Quitrabe. The stat strip — modest numbers (100+, 6+ años) presented in the banned hero-metric grid format — appears immediately after, before the user has any reason to trust the firm enough to process them.

**Fix**: Replace the generic headline with a specific positioning claim that only Art-Quitrabe can make. Replace or relocate the stat strip. The hero's job is to earn continued attention, not to describe the service category. Consider leading with the specific promise rather than the service description: the "primera visita gratuita" claim buried in the Contact section body is currently the most compelling low-commitment offer on the page — it belongs in the hero.

**Suggested command**: `/impeccable clarify` — rewrite hero and CTA copy; then `/impeccable bolder` if the result is still too safe.

---

### [P2] Numbered prefixes in includes lists are meaningless decoration

**Why it matters**: The 01–08 numbers in ViviendaSection and 01–06 in LocalesSection imply sequence or priority — but the lists are unordered capabilities. "¿Por qué redistribución de espacios es #01 y gestión de licencias es #08?" has no answer. The numbers are there because the model generated `n` as an array index property. The fix is one line of data-model cleanup, but the AI-tell payoff is significant: numbered decorative items are a pattern immediately recognizable to anyone who has seen 50 AI-generated landing pages.

**Fix**: Remove the `n` field from both `includes` data arrays. Remove the `<span>` displaying it. Use a dot, a checkmark SVG, or simple whitespace separation between items. Group items by type with a subheading if visual structure is needed (structural work vs. finishing vs. administrative).

**Suggested command**: `/impeccable quieter` covers this alongside the eyebrow cleanup.

---

## Persona Red Flags

**Jordan (confused first-timer)**  
The FAQ section handles Jordan well — real questions, specific answers. Red flag: the Contact form's "Describe tu proyecto" textarea has placeholder copy that assumes the user knows their m² and project type. Jordan doesn't. No scaffolding, no examples, no progressive questions. A first-time reform buyer will stare at the blank textarea and close the tab. The form needs either a reduced-ask entry path ("¿Cuál es tu situación? / Quiero reformar mi piso / Tengo un local") or a placeholder that removes the m² requirement ("Cuéntanos lo que tienes en mente — sin tecnicismos").

**Riley (stress tester)**  
Riley will: (1) submit the form and get no response, confirming it's broken, (2) hover over "100+ proyectos" looking for a portfolio link that goes nowhere, (3) click "Proyectos" in the nav and hit `/proyectos` — if that page doesn't exist, the nav is broken from the first scroll. Riley will also notice that project images are generic (`project3.jpg`) with no metadata, no client name, no date, no brief. The "garantía por escrito" claim has no sample document. Four unverifiable claims before Contact.

**Casey (mobile, thumb-zone driven)**  
Nav and mobile menu work correctly. Critical failure: ViviendaSection's 8 includes cards render as a single column on mobile — 8 stacked identical cards spanning approximately 1200px of scroll depth with no visual variation, no grouped sections, no shortcut. WhyUs has the same problem with 6 cards. On mobile, both sections will be scrolled through without reading. There is no sticky floating CTA button — the user who reads to the bottom of the page on mobile has to scroll 100+ vh upward to take action.

**El Propietario Exigente** (60k€+ Madrid norte homeowner, comparing 3–5 firms)  
This is the primary conversion persona. Red flags that will lose this user:
- No named architects, no team page, no professional credentials visible. A 60k€ client is hiring a specific person's judgment. Anonymous studio = anxiety about who they're actually hiring.
- Portfolio images show 6 generic interior shots labeled by district only. No m², no project brief, no before/after, no project type, no budget range. Every competitor can show the same images. The portfolio doesn't differentiate.
- "Precio fijo" / "presupuesto cerrado" / "sin sorpresas" appears 4+ times. Repetition at this frequency signals the firm is defensive about this claim — which reads as a tell that it has been a problem.
- The "Solicitar presupuesto" CTA implies the client must have their project defined and be ready to receive a financial document. El Propietario Exigente who is in comparison mode wants a low-stakes first contact. "Agenda una visita gratuita" — which is what the site actually offers — is a fundamentally less threatening CTA.

---

## Minor Observations

- Footer nav lists Proceso and FAQ; main nav does not. A user navigating from footer cannot reach Viviendas or Locales sections.
- "Proyectos" appears in both main nav and footer linking to `/proyectos` — this route must exist or both nav and footer have broken links.
- LocalesSection highlight cards (`text-[#4A4A52]` on `bg-[#0D0D14]`) are the most visible instance of the contrast failure — these are prominent positioned cards directly beneath the main section content.
- Coverage zone list mixes premium Madrid zones (Salamanca, Chamberí, Pozuelo) with mass-market zones (Tres Cantos, San Sebastián de los Reyes) at equal visual weight. For El Propietario Exigente in Salamanca, equal weighting reads as "general contractor, not specialist."
- Footer copyright reads "2025" — if the site is live in 2026, update to current year or use `new Date().getFullYear()`.
- No `aria-expanded` on FAQ accordion buttons — screen readers cannot determine open/closed state.
- "Primera visita gratuita" — the strongest low-commitment offer on the page — is buried in a paragraph below the Contact h2 at reduced opacity. It should be far more prominent.
- Contact form `Teléfono` is optional with no explanation of the consequence — noting that providing a number enables a faster callback would increase fill rate.

---

## Questions to Consider

**1. If you removed every section that a competitor in Madrid could copy verbatim, what would be left?** Currently nothing. The headline, stats, service list, process steps, FAQ answers, and coverage zones are all available to any renovation company to reuse. What is the one thing Art-Quitrabe can show — not say — that no competitor has?

**2. "Solicitar presupuesto" implies the client must know their project. "Agenda tu visita gratuita" implies they don't.** For a first-time reform buyer comparing firms, which frame removes more friction? The site already offers the free visit — why is the CTA copy asking for something harder?

**3. The site explains what Art-Quitrabe does. Does it show who Art-Quitrabe is?** No names, no faces, no specific decisions that reveal taste or judgment. At 60k€+, the client is hiring a relationship with people whose eye they trust. Is there a way to make the people visible without adding a full "About" section?
