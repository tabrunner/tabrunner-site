/**
 * Self-check for the address rules — the smallest thing that fails if the language routing breaks.
 * No framework: `bun run check`.
 *
 * What it holds is invisible from a browser: `/pt-br` has to BE the Portuguese page, not a redirect
 * to it and not the English one with a different script running.
 */
import { strict as assert } from "node:assert";
import {
  DEFAULT_LANGUAGE,
  localePath,
  localePrefix,
  ogLocale,
  splitLocalePath,
  SUPPORTED_LANGUAGES,
} from "../src/config/locale";
import { buildSitemap, pageFile, prerenderPage } from "../src/config/prerender";
import { PUBLIC_PAGES, SHELL_ROUTE } from "../src/config/publicPages";

// English is unprefixed; the others carry a lowercase segment.
assert.equal(localePath("en-US", "/"), "/");
assert.equal(localePath("pt-BR", "/"), "/pt-br");
assert.equal(localePath("es-ES", "/"), "/es");
assert.equal(localePath("pt-BR", "/privacy"), "/pt-br/privacy");
assert.equal(localePrefix("en-US"), "");

// Round-trip: what the switcher links to is what the app reads back.
for (const language of SUPPORTED_LANGUAGES) {
  assert.deepEqual(splitLocalePath(localePath(language, "/")), { language, path: "/" });
  assert.deepEqual(splitLocalePath(localePath(language, "/privacy")), {
    language,
    path: "/privacy",
  });
}

// A trailing slash is the same page, and an unknown segment is an English path (a 404), never
// silently the home page.
assert.deepEqual(splitLocalePath("/privacy/"), { language: "en-US", path: "/privacy" });
assert.deepEqual(splitLocalePath("/pt-br/"), { language: "pt-BR", path: "/" });
assert.deepEqual(splitLocalePath("/fr"), { language: "en-US", path: "/fr" });

// FLAT files. A directory index is served at `/privacy/` and answers `/privacy` with a 308, which
// would make every canonical and every sitemap entry on this site a redirect rather than a page.
assert.equal(pageFile("en-US", "/"), "index.html");
assert.equal(pageFile("pt-BR", "/"), "pt-br.html");
assert.equal(pageFile("en-US", "/privacy"), "privacy.html");
assert.equal(pageFile("pt-BR", "/privacy"), "pt-br/privacy.html");

assert.equal(ogLocale("pt-BR"), "pt_BR");

// The sitemap advertises exactly the addresses the prerender writes files for — one list, so an
// address can never be published without a file or written without being announced.
const listed = [...buildSitemap("https://tabrunner.app").matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (m) => new URL(m[1]!).pathname,
);
assert.deepEqual(
  listed,
  PUBLIC_PAGES.flatMap((page) => page.languages.map((l) => localePath(l, page.path))),
);

// The legal docs are English-only, so they publish at ONE address rather than three that would
// announce a language over text they do not render.
const privacy = PUBLIC_PAGES.find((p) => p.path === "/privacy");
assert.deepEqual(privacy?.languages, [DEFAULT_LANGUAGE]);

const TEMPLATE = `<!doctype html>
<html lang="en">
  <head>
    <title>EN</title>
    <meta name="description" content="EN" />
    <link rel="canonical" href="https://tabrunner.app/" />
    <meta property="og:url" content="https://tabrunner.app/" />
    <meta property="og:title" content="EN" />
    <meta property="og:description" content="EN" />
  </head>
  <body><div id="root"></div></body>
</html>`;

const home = PUBLIC_PAGES[0]!;
const bake = (language: (typeof SUPPORTED_LANGUAGES)[number], shell = false) =>
  prerenderPage({
    template: TEMPLATE,
    page: home,
    language,
    siteUrl: "https://tabrunner.app",
    title: "T",
    description: "D",
    body: { route: shell ? SHELL_ROUTE : localePath(language, home.path), html: "<main>hi</main>" },
    shell,
  }).html;

const pt = bake("pt-BR");
assert.ok(pt.includes('<html lang="pt-BR"'), "the page must announce its own language");
assert.ok(pt.includes('<link rel="canonical" href="https://tabrunner.app/pt-br" />'));
assert.ok(pt.includes('<meta property="og:locale" content="pt_BR" />'));
assert.ok(pt.includes('<div id="root" data-prerendered-route="/pt-br">'));
// Reciprocal and complete, itself included, plus x-default — a partial set is ignored wholesale by
// a crawler, which leaves the three pages competing instead of consolidating.
for (const tag of ["en-US", "pt-BR", "es-ES", "x-default"])
  assert.ok(pt.includes(`hreflang="${tag}"`), `missing hreflang ${tag}`);

// A page published in one language gets no cluster at all — the honest signal for the legal docs.
const legal = prerenderPage({
  template: TEMPLATE,
  page: privacy!,
  language: DEFAULT_LANGUAGE,
  siteUrl: "https://tabrunner.app",
  title: "Privacy — TabRunner",
  description: "D",
  body: { route: "/privacy", html: "<main>hi</main>" },
}).html;
assert.ok(!legal.includes("hreflang"), "an English-only page must claim no alternates");

// A 404 must never describe the front door.
const shell = bake("es-ES", true);
assert.ok(shell.includes('<meta name="robots" content="noindex" />'));
assert.ok(!shell.includes('rel="canonical"'));
assert.ok(!shell.includes("og:url"));
assert.ok(shell.includes(`data-prerendered-route="*"`), "a shell must not claim a real route");

console.log("· prerender check ok");
