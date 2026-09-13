import { type SupportedLanguage, SUPPORTED_LANGUAGES } from "./locale";

/** The legal docs, which are their own source of truth (synced from the extension repo). */
export type LegalDoc = "privacy" | "terms";

const LEGAL_SOURCE_SUFFIX: Record<SupportedLanguage, string> = {
  "en-US": "",
  "pt-BR": ".pt-BR",
  "es-ES": ".es",
};

/**
 * The file a legal doc is authored in, in the extension repo: `TERMS.md` is the English source of
 * truth, and each translation sits beside it as `TERMS.pt-BR.md` / `TERMS.es.md`.
 *
 * Named with the extension's locale tags, not the site's: the Spanish is written for Spain and Latin
 * America alike, which a file called `es-ES` would say otherwise.
 */
export function legalSourceFile(doc: LegalDoc, language: SupportedLanguage): string {
  return `${doc.toUpperCase()}${LEGAL_SOURCE_SUFFIX[language]}.md`;
}

export interface PublicPage {
  path: string;
  /**
   * Which languages this page is published in.
   *
   * Only languages the page's own TEXT is written in. Localizing the chrome around a document does
   * not localize the document, and hreflang is a claim about the page, not about its navigation —
   * the legal docs qualify because the extension repo carries a translation of each.
   */
  languages: readonly SupportedLanguage[];
  /** Head copy from the catalog… */
  titleKey?: string;
  descriptionKey?: string;
  /** …or from the document this page renders, whose own H1 and first paragraph are the only
   *  version that cannot drift from what the page says. */
  doc?: LegalDoc;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
}

/**
 * The attribute a prerendered file names its own route in — written by `config/prerender.ts`, read
 * by `main.tsx` to choose between hydrating and mounting.
 *
 * "Does the root have children" is the wrong question, and getting it wrong is silent. A 404 shell
 * has a page rendered into it, so an unpublished address arrives at a full root holding somebody
 * else's markup; hydrating that is React reconciling two different pages. It recovers by throwing
 * the tree away and logging, which is a page that works and a bug nobody sees.
 */
export const PRERENDERED_ROUTE_ATTR = "data-prerendered-route";

/** What a SHELL writes instead of a route: the catch-all pattern, which can never equal a real
 *  path, so every address served from a shell mounts fresh. */
export const SHELL_ROUTE = "*";

export const PUBLIC_PAGES: readonly PublicPage[] = [
  {
    path: "/",
    languages: SUPPORTED_LANGUAGES,
    titleKey: "seo.title",
    descriptionKey: "seo.description",
    priority: 1.0,
    changeFrequency: "weekly",
  },
  {
    path: "/privacy",
    languages: SUPPORTED_LANGUAGES,
    doc: "privacy",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/terms",
    languages: SUPPORTED_LANGUAGES,
    doc: "terms",
    priority: 0.3,
    changeFrequency: "yearly",
  },
];
