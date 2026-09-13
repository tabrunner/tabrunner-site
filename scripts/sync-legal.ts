/**
 * Syncs the legal docs from the extension repo's raw GitHub URLs into src/legal/ — each doc in
 * every language `src/config/publicPages.ts` publishes it in: `TERMS.md` → `legal/terms.md`,
 * `TERMS.pt-BR.md` → `legal/pt/terms.md`. The chrome repo stays the single source of truth; the
 * site renders the synced copies at /terms, /pt/terms…, so the pages work offline from GitHub and
 * add no runtime fetch.
 *
 * All or nothing: every file is fetched before any is written, so a translation missing upstream
 * fails the sync instead of leaving one language a version behind the others.
 *
 * The synced files are committed — deploys (CF Pages via GH Actions) build without network access
 * to GitHub, same convention as `bun run sync`.
 *
 *   bun run sync:legal
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { localeSegment } from "../src/config/locale";
import { legalSourceFile, PUBLIC_PAGES } from "../src/config/publicPages";

const siteRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(siteRoot, "src", "legal");
const RAW = "https://raw.githubusercontent.com/tabrunner/tabrunner/main/";

const docs = PUBLIC_PAGES.flatMap((page) => {
  const { doc } = page;
  if (!doc) return [];
  return page.languages.map((language) => ({
    url: RAW + legalSourceFile(doc, language),
    out: join(outDir, localeSegment(language), `${doc}.md`),
  }));
});

const fetched = await Promise.all(
  docs.map(async ({ url, out }) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
    return { url, out, body: await res.text() };
  }),
);

for (const { url, out, body } of fetched) {
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, body);
  console.log(`${relative(siteRoot, out)} <- ${url} (${Math.round(body.length / 1024)}KB)`);
}
