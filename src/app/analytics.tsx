"use client";

import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { initializeAnalytics, measurementId, stopAnalytics, trackEvent, type AnalyticsEvent } from "@/lib/analytics";

const consentKey = "tongwara-analytics-consent-v1";
type Consent = "granted" | "denied" | null;
let sessionConsent: Consent = null;

function readConsent(): Consent {
  try {
    const saved = JSON.parse(localStorage.getItem(consentKey) ?? "null");
    return saved?.expires > Date.now() && ["granted", "denied"].includes(saved.value) ? saved.value : null;
  } catch {
    return sessionConsent;
  }
}

function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener("tongwara-consent-change", listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener("tongwara-consent-change", listener);
  };
}

function saveConsent(value: Exclude<Consent, null>) {
  sessionConsent = value;
  try {
    localStorage.setItem(consentKey, JSON.stringify({ value, expires: Date.now() + 180 * 86400000 }));
  } catch { /* A storage-blocking browser can still honour the choice for this session. */ }
  if (value === "denied") stopAnalytics();
  window.dispatchEvent(new Event("tongwara-consent-change"));
}

type Props = { caseStudies: { slug: string; title: string }[] };

export default function Analytics({ caseStudies }: Props) {
  const pathname = usePathname();
  const consent = useSyncExternalStore(subscribe, readConsent, () => null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const lastPage = useRef<string | null>(null);
  const initialized = useRef(false);
  const granted = consent === "granted";
  const project = caseStudies.find((item) => pathname === `/work/${item.slug}`);
  const path = project ? `/work/${project.slug}` : pathname === "/" || pathname === "/privacy" ? pathname : "/not-found";
  const title = project ? `${project.title} | Tongwara Blessing Katsidzira` : path === "/privacy" ? "Privacy | Tongwara Blessing Katsidzira" : "Tongwara Blessing Katsidzira | Portfolio";

  useEffect(() => {
    if (!granted) {
      if (initialized.current) stopAnalytics();
      lastPage.current = null;
      return;
    }
    initialized.current = initializeAnalytics(path);
    if (!initialized.current || lastPage.current === path) return;
    const previousPage = lastPage.current;
    lastPage.current = path;
    const page = {
      page_path: path,
      page_title: title,
      page_location: `${window.location.origin}${path}`,
      page_referrer: previousPage ? `${window.location.origin}${previousPage}` : "",
    };
    trackEvent("page_view", page);
    if (project) trackEvent("case_study_view", { ...page, case_study_title: project.title, case_study_slug: project.slug });
  }, [granted, path, title, project]);

  useEffect(() => {
    if (!granted) return;
    function onClick(click: MouseEvent) {
      if (!(click.target instanceof Element)) return;
      const link = click.target.closest<HTMLAnchorElement>("a");
      if (!link) return;
      let event = link.dataset.analyticsEvent as AnalyticsEvent | undefined;
      const url = new URL(link.href, window.location.origin);
      if (url.protocol === "mailto:") event = "contact_click";
      else if (url.hostname === "linkedin.com" || url.hostname.endsWith(".linkedin.com")) event = "linkedin_click";
      else if (link.hasAttribute("download") && /(?:resume|cv)/i.test(url.pathname)) event = "resume_download";
      if (!event || !["resume_download", "contact_click", "linkedin_click", "portfolio_cta_click"].includes(event)) return;
      trackEvent(event, {
        page_path: path,
        page_location: `${window.location.origin}${path}`,
        page_title: title,
        cta_location: link.dataset.analyticsLocation ?? (link.closest("header") ? "header" : link.closest("footer") ? "footer" : "page_content"),
        cta_label: link.dataset.analyticsLabel ?? (event === "contact_click" ? "Contact" : event === "linkedin_click" ? "LinkedIn profile" : event === "resume_download" ? "CV download" : "Portfolio CTA"),
      });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [granted, path, title]);

  function choose(value: Exclude<Consent, null>) {
    saveConsent(value);
    setSettingsOpen(false);
  }

  return (
    <>
      {granted && measurementId ? (
        <Script
          id="tongwara-ga4"
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
          onLoad={() => { if (process.env.NODE_ENV === "development") console.debug("[GA4] Google tag loaded"); }}
          onError={() => console.warn("Google Analytics could not load; the portfolio remains available.")}
        />
      ) : null}
      <div className="privacy-controls">
        <Link href="/privacy">Privacy notice</Link>
        <button type="button" onClick={() => setSettingsOpen(true)} aria-expanded={settingsOpen} aria-controls="analytics-consent">Privacy settings</button>
      </div>
      {consent === null || settingsOpen ? (
        <section className="analytics-consent" id="analytics-consent" aria-labelledby="consent-title">
          <div>
            <h2 id="consent-title">Your privacy choices</h2>
            <p>Allow Google Analytics cookies to measure visits and portfolio interactions? Analytics stays off unless you accept. You can change your choice in Privacy settings at any time. <Link href="/privacy">Read the privacy notice</Link>.</p>
          </div>
          <div className="analytics-consent-actions">
            <button type="button" onClick={() => choose("denied")}>{granted ? "Withdraw analytics consent" : "Reject analytics"}</button>
            <button type="button" onClick={() => choose("granted")}>{granted ? "Keep analytics enabled" : "Accept analytics"}</button>
            {settingsOpen && consent !== null ? <button type="button" onClick={() => setSettingsOpen(false)}>Close</button> : null}
          </div>
        </section>
      ) : null}
    </>
  );
}
