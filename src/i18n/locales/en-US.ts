/**
 * English (en-US) — the reference locale. Other locales must satisfy `Locale`.
 * Voice: direct, technically honest, zero hype (see PRODUCT.md).
 */
export const enUS = {
  langName: "English",
  seo: {
    title: "TabRunner: You give the goal. It runs the tabs.",
    description:
      "An AI agent that drives your real browser through any provider you choose, using your tabs, sessions and logins. Chromium only. No server, no account, no telemetry.",
  },
  notFound: {
    title: "Page not found",
    body: "That address doesn't exist on tabrunner.app. The landing page below explains what TabRunner does and how to install it.",
  },
  nav: {
    features: "Features",
    install: "Install",
    privacy: "Privacy",
    download: "Add to Chrome",
    github: "GitHub",
    languageLabel: "Language",
    sectionsLabel: "Sections",
    skipToContent: "Skip to content",
  },
  hero: {
    titleA: "You give the goal.",
    titleB: "It runs the tabs.",
    sub: "An AI agent that drives your real browser through any provider you choose, using your tabs, sessions and logged-in accounts. Describe a task in the side panel; TabRunner reads pages, clicks, types and navigates until the job is done.",
    ctaPrimary: "Add to your browser",
    ctaFor: "Add to {{browser}}",
    ctaUnsupported:
      "TabRunner runs on Chrome-based desktop browsers. Open this page in Chrome, Brave, Edge, Arc, Opera or Vivaldi to get it.",
    ctaSecondary: "How to install",
    missionLabel: "Describe a task",
    missionGo: "Launch",
    placeholders: [
      "Pull the invoice from my inbox into the expense report…",
      "Fill the visa form with the details from my booking confirmation…",
      "Copy this week's numbers from the analytics tab into my sheet…",
      "Find my tracking number and paste it into the carrier's claim form…",
    ],
    demoHint:
      "Launch one. It throws a flock of comet-tabs across the sky, and nothing else. The real run needs the extension.",
    demoLaunched:
      "Those comet-tabs are the idea in miniature. Installed, it runs the task in your real browser.",
    browsersLabel: "Runs on",
    chromiumNote:
      "Chromium only. Firefox and Safari have no trusted-input API, so they get an explanation, not a dead button.",
  },
  run: {
    demoBadge: "simulated demo",
    taskLabel: "Task",
    task: "Pull the latest invoice from my inbox into the expense report",
    planning: "Planning…",
    planTitle: "Plan",
    plan: [
      "Open the inbox",
      "Find the latest invoice",
      "Open the expense report",
      "Attach it and fill the fields",
    ],
    tools: [
      { tool: "navigate", detail: "webmail inbox" },
      { tool: "click", detail: 'ref=e21 "invoice.pdf"' },
      { tool: "snapshot", detail: "expense form, 6 fields" },
    ],
    composing: "Filling the expense report…",
    done: "Done. Expense report ready for review",
    elapsed: "elapsed",
    tokens: "tokens",
    stopNote: "Esc stops any run, including this demo if it were a real task.",
  },
  features: {
    title: "Your browser is the advantage",
    sub: "Most browser agents run in a sandboxed, logged-out browser. TabRunner runs in yours, so it can act on the sites you're actually logged into.",
    providersMore: "+ any OpenAI/Anthropic-compatible endpoint",
    items: [
      {
        title: "Bring your own provider",
        body: "15 presets across the 12 providers below. Anthropic, OpenAI and Kimi appear twice: sign in with the Claude, ChatGPT or Kimi plan you already pay for, or paste an API key. Plus any endpoint speaking the OpenAI or Anthropic wire format. No lock-in, no relay.",
      },
      {
        title: "Real trusted input",
        body: "Clicks and keystrokes go through the Chrome DevTools Protocol as genuine trusted events, not synthetic JS dispatches that login forms and payment fields ignore.",
      },
      {
        title: "Sees the page, not the HTML",
        body: "The model reads a compact accessibility tree, never raw markup. That means small prompts and stable refs. Passwords and card numbers never leave the page.",
      },
      {
        title: "Guardrails that hold",
        body: "Consequential actions (paying, sending, deleting) ask for your confirmation first. Retries ride out provider hiccups, a step budget caps runaways, and Stop actually stops.",
      },
      {
        title: "Two-way MCP",
        body: "Claude Code, Claude Desktop or any MCP client can hand TabRunner a task in the same browser, with the same logins, labelled in your history. And it dials out too: remote MCP servers' tools join every run behind the plan gate, and run events can POST to your own webhook.",
      },
      {
        title: "No server. At all.",
        body: "Your key goes straight from the extension to your provider. Configs and history live in chrome.storage on your device. No account, no telemetry, nothing to breach.",
      },
    ],
  },
  route: {
    title: "Signal path: one task, end to end",
    you: "you",
    or: "or",
    mcp: "an MCP client",
    extension: "tabrunner",
    provider: "your provider",
    gate: "guardrails",
    page: "the page",
    relay: "a relay server",
    legAsk: "the ask / the plan",
    legAct: "trusted input / the page as refs",
  },
  shots: {
    title: "The panel is the product",
    sub: "A side panel that works alongside the page you're on, without taking over your browser.",
    captions: [
      "The side panel, before a task",
      "A finished run: plan, tool trace, summary and the tab's badge",
      "Providers: presets or any compatible endpoint",
      "The status pill: the run works while you keep reading",
    ],
    note: "Screenshots from the current build, captured automatically, so they never lag a redesign.",
  },
  install: {
    title: "The flight plan",
    sub: "One click from the Chrome Web Store, then a minute to point it at a provider. No account, nothing to sign up for.",
    badge: "auto-updates",
    storeTitle: "Add it from the Chrome Web Store",
    steps: [
      "Add TabRunner to your browser from the store listing. Updates arrive on their own from there.",
      "Pin the comet to your toolbar and click it to open the side panel.",
      "Pick a provider, sign in with a subscription you already pay for or paste an API key, then describe a task.",
    ],
    storeCta: "Add to Chrome",
    caveatsTitle: "Said plainly",
    caveats: [
      "Chromium desktop browsers only: Chrome, Brave, Edge, Arc, Opera, Vivaldi. Edge and Opera ask you to allow extensions from other stores first.",
      "The install prompt asks for wide access to your tabs. That access is the product: it's how the agent reads pages and types for real. What it does with it is the section below.",
      "You bring the model: a provider subscription you already pay for, or an API key. There's no TabRunner account and no free tier bundled in.",
      "Already running the unpacked build? Remove it first. The store version shares its extension ID and Chrome won't run both. Removing deletes its storage, so your providers, sign-ins and conversations don't carry over.",
    ],
    releaseNotes: "Release notes",
    zipTitle: "Rather not use the store?",
    zipSteps:
      "Download the ZIP and unzip it somewhere you'll keep it, then chrome://extensions → Developer mode → Load unpacked → select that folder. It can't sit alongside the store install.",
    zipUpdateTitle: "Updating",
    zipUpdateBody:
      "Extract each new ZIP over that same folder, replacing the files, then press ⟳ on chrome://extensions.",
    zipUpdateWarning:
      "Never remove the extension to reinstall it. Chrome deletes its storage on the way out, and your providers, sign-ins and conversations go with it.",
    downloadZip: "Download ZIP",
  },
  privacy: {
    title: "No ground station",
    sub: "An agent that drives your logged-in browser has to answer the data question first. Here it is.",
    points: [
      "Out of the box, data goes to two places: the site the agent is working on and the AI provider you configured. Anything else, like Jev, an MCP server or a webhook, is something you add.",
      "There is no TabRunner server, no account, no analytics, and no call to anyone you didn't set up.",
      "Provider configs and conversation history live in chrome.storage, on your device.",
    ],
    diagramBrowser: "Your browser",
    diagramProvider: "Your AI provider",
    diagramSites: "The sites you use",
    diagramKeyFlow: "API key or sign-in, sent directly",
    diagramTaskFlow: "clicks & keystrokes",
    diagramServer: "TabRunner server",
    diagramServerNone: "doesn't exist",
    link: "Read the full privacy policy",
  },
  legal: {
    back: "Back to tabrunner.app",
    source: "Source of truth:",
  },
  footer: {
    tagline: "You give the goal. It runs the tabs.",
    chromium: "Chromium only: Chrome, Brave, Edge, Arc, Opera, Vivaldi.",
    openSource: "Open source on GitHub",
    license: "Open source, MIT license.",
    productHeading: "Product",
    projectHeading: "Project",
    store: "Chrome Web Store",
    downloadZip: "Download ZIP",
    issues: "Issues",
    privacyLink: "Privacy policy",
    termsLink: "Terms of use",
    mcpDocs: "MCP docs",
    copyright: "© 2026 Gus",
  },
};

export type Locale = typeof enUS;
