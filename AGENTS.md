# tabrunner.app — Agent Guide

Marketing/download site for **TabRunner**, a Chromium extension that lets an LLM drive your
_real_ browser — tabs, sessions, logged-in accounts — through any provider you choose (15
presets + any OpenAI/Anthropic-compatible endpoint, subscription sign-in or API key). You
describe a task in the side panel; the agent reads pages (accessibility-tree snapshots), clicks,
types and navigates with trusted CDP input until the job is done. Provider-agnostic, no relay,
no TabRunner server; an MCP bridge lets external clients (Claude Code, Kimi) drive it too. The
extension lives in the sibling repo `../chrome` — its `AGENTS.md` + `docs/agent/*.md` carry the
deep architecture.

## Commands

```bash
bun run dev      # vite dev server
bun run build    # tsc --noEmit → client build → SSR build → prerender → dist/  (this IS the gate)
bun run check    # the self-checks: run-console clock + the address/head rules
bun run sync     # pull product screenshots from ../chrome/docs/screenshots → public/screenshots (webp)
bun run sync:legal # pull PRIVACY/TERMS (+ .pt-BR/.es translations) raw from GitHub → src/legal/, all or nothing (committed; rendered at /privacy, /terms, and under /pt, /es)
bun run og       # regenerate public/og.png (scripts/gen-og.ts)
bun run shoot    # screenshot the built site, overflow report → preview/shots/ (gitignored output)
```

Deploy: push to `main` fires `.github/workflows/deploy.yml` → Cloudflare Pages project
`tabrunner` (tabrunner.pages.dev). Secrets `CLOUDFLARE_ACCOUNT_ID` / `CLOUDFLARE_API_TOKEN` live
in GitHub. The job then **verifies this deployment's own immutable URL** (never the alias, which
serves the previous build at 200 while the new one activates): every sitemap address must answer
200 with its own title and language and a rendered body, three typos must be real 404s, and
robots/sitemap must not be answered by HTML. Downloads hotlink the extension repo's `releases/latest` aliases — never hardcode a
version.

## Conventions

- Vite + React 19 + Tailwind 4 + bun. TypeScript strict. No component library — hand-built
  sections in `src/components/`, one per section (Hero, Features, Screenshots, Install, Privacy,
  Footer, Nav, RunConsole, CometField, CometMark).
- **i18n:** en-US / pt-BR / es-ES, catalogs in `src/i18n/locales/*.ts` (typed off en-US). Add keys
  to all three catalogs in the same edit. No user-visible string is a literal.
- **The URL decides the language, not the browser.** `/` is en-US, `/pt` and `/es` carry a
  lowercase segment (`src/config/locale.ts`); the switcher is three `<a href>`s. Detection survives
  as ONE hop off an unprefixed address, before the first render, which a crawler never takes.
- **Every published page is a real file.** `scripts/prerender.ts` renders each row of
  `src/config/publicPages.ts` in each language it is published in, with its own head (`<html lang>`,
  title, description, canonical, reciprocal hreflang + x-default), and writes a 404 shell per
  language, `sitemap.xml` and `robots.txt`. Files are FLAT (`pt.html`, never `pt/index.html`:
  a directory index makes `/pt` a 308). `assertRendered` fails the BUILD on the bytes written.
  There is no catch-all rewrite — a miss is a real 404. A page in `App.tsx` but not in the registry
  ships nothing; add both. The legal docs publish in all three languages, because the extension
  repo carries a translation of each (`TERMS.pt-BR.md`, `PRIVACY.es.md`, …).
- **Brand:** DESIGN.md is the design system — read it before any visual work. Token scales live
  in `src/index.css` (`field-*` deep indigo grounds, `flare-*` comet-burn emerald = motion,
  `tel-*` amber = measurement, `star-*` text). Two Lights rule: only emerald and amber emit
  light; glow means live. The retired purple and the brief cyan must not come back.
- **The comet-tab mark** geometry is shared with the extension (`src/components/CometMark.tsx`
  ↔ `chrome/src/shared/logo.ts`) — the two must not drift; same for the OG composition
  (`scripts/gen-og.ts` ↔ `chrome/scripts/gen-icons.ts`).
- Fonts: Unbounded (display) / Figtree (body) / JetBrains Mono (telemetry), via
  `@fontsource-variable/*`; OFL TTFs for resvg in `assets/fonts/`.
- Prettier: 2-space, double quotes, semicolons, width 100.

## Product screenshots

`public/screenshots/*.webp` derive from the extension repo: `bun run shots` there stages the
four shots and runs this repo's sync. What each shows (keep the section's captions in step):

- `01-side-panel` — Wikipedia "Web browser" article with the side panel beside it, pre-task: the
  task typed in the composer, not yet sent. The panel is the product, not a browser takeover.
- `02-chat` — Wikipedia "Intelligent agent" with a finished run in the panel: user bubble, plan
  card (3/3), tool trace, the agent's summary; the "TabRunner is controlling this tab" badge on
  the page (deep-field pill, amber dot).
- `03-providers` — options page, Providers tab: Anthropic + OpenAI subscription rows and a
  DeepSeek API-key row, active provider in flare.
- `04-chat-2` — Hacker News front page with a second conversation and the floating status
  widget (TabRunner · task · +1 queued · Open · Hide).
