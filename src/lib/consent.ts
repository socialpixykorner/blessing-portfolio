const consentKey = "tongwara-analytics-consent-v1";
export type Consent = "granted" | "denied" | null;
let sessionConsent: Consent = null;

export function readConsent(): Consent {
  // An unsaved choice must take precedence over a stale stored choice.
  if (sessionConsent !== null) return sessionConsent;
  try {
    const saved = JSON.parse(localStorage.getItem(consentKey) ?? "null");
    return saved?.expires > Date.now() && ["granted", "denied"].includes(saved.value) ? saved.value : null;
  } catch {
    return null;
  }
}

export function consentIsPersisted() {
  return sessionConsent === null;
}

export function saveConsent(value: Exclude<Consent, null>) {
  sessionConsent = value;
  try {
    localStorage.setItem(consentKey, JSON.stringify({ value, expires: Date.now() + 180 * 86400000 }));
    // Read storage again on subsequent updates, including changes from other tabs.
    sessionConsent = null;
  } catch { /* Keep the unsaved choice for the current document. */ }
  return consentIsPersisted();
}
