import { useTranslation } from "react-i18next";
import { rememberLanguage } from "../i18n";
import {
  htmlLang,
  localePath,
  splitLocalePath,
  SUPPORTED_LANGUAGES,
} from "../config/locale";
import { LINKS } from "../lib/links";
import { CometMark } from "./CometMark";
import { GithubMark } from "./GithubMark";

/**
 * The page's own browser chrome: favicon + wordmark on the left, an omnibox
 * pill in the middle, and the actions a chrome bar would carry on the right —
 * including the one we want taken (the store CTA gets the glow; see DESIGN.md's
 * Glow-Means-Live rule: it's the primary action). It names the store rather
 * than the visitor's browser — the hero, which detects, does that naming.
 * GitHub sits with the actions, not the section anchors: it's an external
 * destination, and the icon keeps it visible on mobile, where the center
 * links collapse.
 */
export function Nav() {
  // `i18n` from the hook, never the module's default instance: the build renders three languages
  // in one process through a provider, and the singleton is stuck on the default there — so
  // reading it would mark EN current on the Portuguese page and hand React a hydration mismatch.
  const { t, i18n } = useTranslation();

  // The switcher is three LINKS, not a `changeLanguage` call. Switching in place left the reader
  // at an address that said English while showing Portuguese: the link they shared showed the
  // other person a different page, and a crawler could not reach two of the three languages at
  // all. These are also the only in-page links between the versions, which is how a crawler learns
  // they are one page rather than three thin competing ones.
  // "/" during the build, where there is no address — and Nav only ever renders on the home page,
  // so that is also what the browser computes on the very same markup.
  const route =
    typeof window === "undefined" ? "/" : splitLocalePath(window.location.pathname).path;

  return (
    <header className="sticky top-0 z-20 border-b border-field-600/50 bg-field-900/80 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only rounded-full bg-flare-500 px-4 py-2 font-semibold text-field-950 focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-30"
      >
        {t("nav.skipToContent")}
      </a>
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2.5 text-flare-400">
          <CometMark size={26} />
          <span className="font-display text-sm font-semibold tracking-wide text-star-100">
            TabRunner
          </span>
        </a>

        {/* omnibox */}
        <div className="mx-auto hidden items-center gap-2 rounded-full border border-field-600/70 bg-field-800/80 px-4 py-1.5 md:flex">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="size-3.5 text-star-500"
            aria-hidden="true"
          >
            <rect x="5" y="10" width="14" height="10" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
          <span className="font-mono text-xs text-star-500">tabrunner.app</span>
        </div>

        <nav aria-label={t("nav.sectionsLabel")} className="hidden items-center gap-6 text-sm text-star-300 md:flex">
          <a href="#features" className="transition-colors hover:text-star-100">
            {t("nav.features")}
          </a>
          <a href="#install" className="transition-colors hover:text-star-100">
            {t("nav.install")}
          </a>
          <a href="#privacy" className="transition-colors hover:text-star-100">
            {t("nav.privacy")}
          </a>
        </nav>

        {/*
         * ml-auto pins the actions right on mobile, where the omnibox and links
         * are hidden and nothing else absorbs the free space. From md up the
         * omnibox's mx-auto takes over, so this margin stands down.
         */}
        <div className="ml-auto flex shrink-0 items-center gap-3 md:ml-0">
          {/*
           * Chrome-bar toolbar icon: borderless, color-only on hover — the
           * bordered pill is reserved for the Download CTA. Below sm the bar
           * is already full (wordmark, language, Download), so GitHub lives
           * in the footer on phones instead of overflowing the chrome.
           */}
          <a
            href={LINKS.repo}
            target="_blank"
            rel="noreferrer"
            aria-label={t("nav.github")}
            title={t("nav.github")}
            className="hidden rounded-full p-1.5 text-star-500 transition-colors hover:text-star-100 sm:block"
          >
            <GithubMark size={16} />
          </a>
          <div
            role="group"
            aria-label={t("nav.languageLabel")}
            className="flex items-center rounded-full border border-field-600/70 p-0.5 font-mono text-[11px]"
          >
            {SUPPORTED_LANGUAGES.map((lng) => (
              <a
                key={lng}
                href={localePath(lng, route)}
                hrefLang={htmlLang(lng)}
                onClick={() => rememberLanguage(lng)}
                aria-current={i18n.language === lng ? "true" : undefined}
                title={i18n.getFixedT(lng)("langName")}
                className={`rounded-full px-2 py-1 transition-colors ${
                  i18n.language === lng
                    ? "bg-field-600 text-flare-300"
                    : "text-star-500 hover:text-star-300"
                }`}
              >
                <span aria-hidden="true">
                  {lng === "en-US" ? "EN" : lng === "pt-BR" ? "PT" : "ES"}
                </span>
                <span className="sr-only">{i18n.getFixedT(lng)("langName")}</span>
              </a>
            ))}
          </div>

          <a
            href={LINKS.store}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-flare-500 px-4 py-2 text-sm font-semibold text-field-950 shadow-[0_0_24px_-4px] shadow-flare-500/50 transition-all hover:bg-flare-400 hover:shadow-flare-400/60"
          >
            {t("nav.download")}
          </a>
        </div>
      </div>
    </header>
  );
}
