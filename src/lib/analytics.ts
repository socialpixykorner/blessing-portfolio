export const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export type AnalyticsEvent =
  | "page_view"
  | "case_study_view"
  | "resume_download"
  | "contact_click"
  | "linkedin_click"
  | "portfolio_cta_click";

declare global {
  interface Window {
    dataLayer?: (unknown[] | IArguments)[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;
let permitted = false;

function disableGoogle(disabled: boolean) {
  if (measurementId) {
    Object.assign(window, { [`ga-disable-${measurementId}`]: disabled });
  }
}

export function initializeAnalytics(pagePath: string) {
  if (!measurementId || !/^G-[A-Z0-9]+$/.test(measurementId)) return false;
  permitted = true;
  disableGoogle(false);
  if (initialized) return true;
  initialized = true;
  window.dataLayer ??= [];
  window.gtag = function () {
    // Keep Google's canonical command queue format.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    page_location: `${window.location.origin}${pagePath}`,
    page_referrer: "",
    ...(process.env.NODE_ENV === "development" ? { debug_mode: true } : {}),
  });
  return true;
}

export function trackEvent(event: AnalyticsEvent, parameters: Record<string, string>) {
  if (!permitted || !measurementId) return;
  window.gtag?.("event", event, {
    ...parameters,
    send_to: measurementId,
    transport_type: "beacon",
  });
  if (process.env.NODE_ENV === "development") console.debug(`[GA4] ${event} ${JSON.stringify(parameters)}`);
}

export function stopAnalytics(reload = true) {
  permitted = false;
  disableGoogle(true);
  // Remove host-only and parent-domain GA cookies, even when consent cannot be saved.
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.trim().split("=")[0];
    if (name !== "_ga" && !name.startsWith("_ga_")) continue;
    const expired = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = expired;
    const parts = window.location.hostname.split(".");
    for (let index = 0; index < parts.length - 1; index++) {
      document.cookie = `${expired}; domain=.${parts.slice(index).join(".")}`;
    }
  }
  // Reload only when the caller knows the revoked choice survives it.
  if (initialized && reload) window.location.reload();
}
