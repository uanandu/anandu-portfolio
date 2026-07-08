# Accessibility Audit — Standby Page

**Date:** 2026-07-08
**Scope:** `index.html`, `static/style.css`, `static/script.js` (single-page standby site)
**Method:** Manual WCAG 2.2 AA review + computed contrast ratios (WCAG relative-luminance formula). No automated browser scan was run (no axe/Lighthouse tooling available on the machine at audit time).

## Summary

Seven issues were found; all were fixed in the same pass. The page now meets WCAG 2.2 AA for the criteria reviewed. Two minor advisory items remain (see "Remaining recommendations").

## Contrast measurements

AA requires ≥ 4.5:1 for normal text. Values are token-on-background.

| Token | Light mode | Dark mode | Notes |
|---|---|---|---|
| `--clr-ink` | 15.87 ✓ | 14.92 ✓ | body text, tagline, form sentence |
| `--clr-ink-2` | 8.39 ✓ | 8.76 ✓ | role line |
| `--clr-muted` (before) | **3.30 ✗** | 4.59 ✓ | status pill, footer, sub line, labels |
| `--clr-muted` (after) | 4.71 ✓ | 4.59 ✓ | light value changed `#8a8480` → `#716b64` |
| placeholder (before, muted @ 70% opacity) | **2.19 ✗** | **2.88 ✗** | |
| placeholder (after, muted @ full opacity) | 4.71 ✓ | 4.59 ✓ | |
| `--clr-success` | 5.72 ✓ | 9.41 ✓ | form result |
| `--clr-error` | 8.39 ✓ | 6.81 ✓ | form result |
| `--clr-accent-1` (green) | 4.83 ✓ | 10.05 ✓ | sticker badge (added after initial audit) |
| `--clr-accent-2` (violet) | 5.73 ✓ | 8.45 ✓ | sticker badge (added after initial audit) |
| `--clr-accent-3` (orange) | 4.73 ✓ | 8.61 ✓ | sticker badge (added after initial audit) |

Rule/border colors (`--clr-rule`) are decorative and exempt from contrast requirements.

## Findings and fixes

1. **Muted text below AA contrast in light mode (1.4.3)** — `--clr-muted` measured 3.30:1 and is used for small text (footer links at ~10px, status pill, sub line). Darkened to `#716b64` (4.71:1).
2. **Placeholders far below contrast (1.4.3)** — placeholders rendered muted at 70% opacity (2.19:1 light / 2.88:1 dark). Opacity removed; they now inherit the passing muted token.
3. **No `<main>` landmark and no heading structure (1.3.1, 2.4.6)** — content lived in bare `<div>`s with zero headings. The three content panels are now wrapped in `<main>` (via `display: contents` so the CSS grid is unaffected), and the tagline is now the page `<h1>`.
4. **"PORTFOLIO" read letter-by-letter by screen readers (1.3.1)** — the animated word is built from per-letter `<span>`s, and its `aria-label` sat on a `<p>`, which does not reliably take an accessible name. Replaced with a visually-hidden "Portfolio" text node plus `aria-hidden` on the animated letters.
5. **No visible keyboard focus on form inputs (2.4.7)** — `.ml-input { outline: none }` overrode the global `:focus-visible` style, and the animated underline also appears when a field is merely filled, so it could not signal focus. Added an explicit `:focus-visible` outline to the inputs.
6. **Honeypot checkbox exposed to assistive tech** — the off-screen `botcheck` field was reachable in screen-reader forms mode and is a trap for those users. Now `aria-hidden="true"` (it already had `tabindex="-1"`).
7. **Submit button below minimum target size (2.5.8)** — the text-only button was under 24px tall. Added `min-height: 24px`. Footer links rely on the 24px spacing exception (≈28px gaps).

## Already in good shape (verified, no change needed)

- `lang="en"`, descriptive `<title>`, meaningful `alt` on the portrait
- All three form inputs have `aria-label`s; decorative SVGs are `aria-hidden`
- Form results announce via `role="status"` / `aria-live="polite"`
- All entrance/hover animation collapses under `prefers-reduced-motion`; the only infinite animation (status dot pulse) is tiny, decorative, and also disabled
- Pinch-zoom is not disabled; at 200% zoom the `max-height: 600px` breakpoint permits scrolling, so content reflows rather than clips (1.4.4 / 1.4.10)
- Focus outlines exist globally via `:focus-visible`
- Dark mode is token-based, so both schemes were measured above

## Remaining recommendations (minor, not blocking)

- **Field-level error association:** validation errors announce via the live region but are not tied to the offending input with `aria-invalid` / `aria-describedby`. Worth adding if the form grows.
- **Automated scan:** run axe DevTools or Lighthouse against the deployed site once (`https://anandu.vercel.app`) to catch anything a static review can miss, e.g. rendered-DOM issues from htmx.
