# Thorne Maritime — AI Crewing & Compliance Landing Page

A premium, conversion-focused single page targeting Fleet Managers and Technical Superintendents. Deep purple glassmorphism with electric cyan accents, industry-specific copy (STCW, MLC 2006, PSC), and a featured interactive AI document-parsing demo.

---

## 1. Design System

**Palette (HSL tokens in `index.css`)**
- Background: deep purple gradient `#0B0420 → #1A0B3D`
- Surface (glass): white at 4–8% opacity + `backdrop-blur-xl` + 1px white/10 border
- Primary accent: **Electric Cyan `#00E5FF`**
- Secondary accent: **Lavender `#A78BFA`** (used in parsing demo)
- Success: **Emerald `#10B981`** (validation state)
- Text: white / white at 70% / white at 50%

**Typography**
- Headings: Inter or Space Grotesk, tight tracking, large display sizes
- Body: Inter, generous line-height, max-width readable measure

**Motion**
- Framer Motion: scroll-triggered fade-up with stagger on bento tiles
- Animated gradient orbs in background (slow drift)
- Hover: subtle lift + glow on glass cards
- Counters: count-up on viewport entry

---

## 2. Page Structure

1. **Sticky nav** — logo, anchor links (Features, ROI, Founder, FAQ), "Request Audit" CTA
2. **Hero** — "Automated Compliance for Modern Fleets" + sub-headline on PSC detentions, dual CTAs (Request Audit / Watch Demo modal), live metric strip (92% manual entry reduction, hours saved, vessels onboarded)
3. **Trust strip** — placeholder logos: DNV, Lloyd's Register, ABS, BV, IMO
4. **Agentic Bento Grid** — 4 glass tiles (see §3)
5. **Interactive ROI Calculator** — fleet-size slider → hours saved/month, $ saved/month, detention risk reduction
6. **Founder section** — Captain Elias Thorne portrait placeholder, bio, credibility quote
7. **FAQ accordion** — STCW automation, MLC 2006 audit trails, PSC readiness, data residency, integration with existing crewing systems
8. **High-intent CTA — Request Technical Audit** — 3-step form (see §4)
9. **Footer** — minimal, compliance-forward

---

## 3. Bento Feature Grid

Asymmetric 4-tile layout. Tile 1 spans 2 cols on desktop and contains the **featured interactive demo**.

### Tile 1 (Featured) — Intelligent Certificate Parsing — *Interactive Mock AI Demo*

**Idle state**
- Dashed glass dropzone inside the card: "Drag Seafarer Passport PDF Here" + subtle upload icon
- Hover: cyan border glow, cursor pointer
- Click anywhere on dropzone (or the card) triggers the sequence

**Processing sequence (~2.5s, Framer Motion)**
- Dropzone morphs into a "document preview" rectangle
- **Scanline overlay**: a thin horizontal Lavender→Cyan gradient line sweeps top→bottom, repeating, with a soft glow trail
- **Progress bar** below: 0 → 100% over ~2s, Lavender → Cyan gradient fill
- Status label cycles: "Uploading…" → "OCR scanning…" → "Extracting fields…" → "Cross-checking STCW registry…"
- **Extracted data table** appears below progress bar with **ghost/skeleton rows** that progressively resolve field-by-field (staggered ~300ms per row): each row flips from shimmer placeholder to real value

**Completion state (after 100%)**
- Scanline disappears with a soft flash
- Card border + progress bar transition from Lavender → **Emerald `#10B981`**
- Final extracted table:

  | Field | Value |
  |---|---|
  | Name | John L. Seafarer |
  | Nationality | PHL |
  | Rank | Chief Officer |
  | STCW Expiry | 12 DEC 2028 |
  | Status | ✅ Validated |

- "Reset demo" ghost button appears so users can replay
- Auto-reset after ~8s of completion if untouched

**Implementation notes**
- Pure frontend, no backend calls. State machine: `idle → uploading → scanning → extracting → validated`
- Framer Motion `AnimatePresence` for state transitions, `motion.div` for scanline (`y` animation with `repeat`), staggered children for the table rows
- Respects `prefers-reduced-motion`: skips scanline, snaps directly to extracted state with a fade
- Fully responsive: table collapses to stacked key/value pairs on mobile

### Tile 2 — Predictive Rotation Scheduling
Mini visual: stylized timeline with crew rotation blocks, fatigue risk heat-bar. Copy on avoiding fatigue violations and high last-minute flight costs.

### Tile 3 — Fleet-wide Compliance Dashboard
Mini visual: glass card preview with vessel list + compliance % rings. Copy on real-time STCW/MLC 2006 status across the fleet.

### Tile 4 — Predictive PSC Risk Scoring
Mini visual: gauge component showing detention risk before port arrival. Copy on pre-empting Port State Control inspections.

---

## 4. Lead Capture — "Request Technical Audit"

3-step form, glass modal-style card:
1. **Fleet profile** — Company, fleet size (range), vessel types (multi-select)
2. **Pain points** — Current crewing system, biggest compliance headache (multi-select), timeline
3. **Contact** — Name, role, work email, phone (optional)

Backend (Lovable Cloud / Supabase):
- Table `audit_requests` with columns for all fields + `created_at`, `status`
- RLS: insert allowed for anon, select restricted to admin role only
- Edge function on insert → sends notification email (destination email TBD, you can provide later or I'll use a placeholder you swap)
- Success state: glass confirmation card with calendar booking placeholder link

---

## 5. ROI Calculator

- Slider: Fleet size 1 → 100 vessels
- Derived outputs (animated counters):
  - **Hours saved / month** = fleet × 38 hrs (based on 92% reduction baseline)
  - **$ saved / month** = hours × $65 blended ops rate
  - **Detention risk avoided**: qualitative badge (Low/Med/High reduction)
- "Email me this report" mini-form → same Supabase table, tagged as `roi_lead`

---

## 6. Tech Stack

- React + Vite + TypeScript (existing)
- Tailwind CSS with extended HSL design tokens
- **Framer Motion** for all motion (scroll, hero, bento, parsing demo, counters)
- **lucide-react** for icons
- **Supabase** via Lovable Cloud (audit_requests + edge function for email)
- Fully responsive, mobile-first, semantic HTML, accessible (ARIA on form steps, focus management on modals, reduced-motion respected)

---

## 7. Open Items (non-blocking)

- Destination email for lead notifications
- Real Captain Thorne photo (placeholder portrait used until provided)
- Demo video URL for "Watch Demo" modal (placeholder embed until provided)

Approve and I'll build it end-to-end.