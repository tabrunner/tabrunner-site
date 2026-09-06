import { DEFAULT_LANGUAGE, type SupportedLanguage, SUPPORTED_LANGUAGES } from "./locale";

/** The legal docs, which are their own source of truth (synced from the extension repo). */
export type LegalDoc = "privacy" | "terms";

export interface PublicPage {
  path: string;
  /**
   * Which languages this page is published in.
   *
   * The legal docs are synced from `tabrunner/tabrunner` in English only, so they publish at ONE
   * address instead of three that would announce `lang="pt-BR"` over English text. Localizing the
   * chrome around a document does not localize the document, and hreflang is a claim about the
   * page, not about its navigation.
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
    languages: [DEFAULT_LANGUAGE],
    doc: "privacy",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/terms",
    languages: [DEFAULT_LANGUAGE],
    doc: "terms",
    priority: 0.3,
    changeFrequency: "yearly",
  },
];
