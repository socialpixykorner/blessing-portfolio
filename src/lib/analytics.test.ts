import assert from "node:assert/strict";
import { test } from "node:test";

test("analytics blocks events before consent, initialises once and stops on withdrawal", async () => {
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-KRR4D4SSNW";
  const { initializeAnalytics, trackEvent, stopAnalytics } = await import("./analytics");
  let reloads = 0;
  const cookies: string[] = [];
  const mockWindow = {
    location: { origin: "https://www.tongwara.com", hostname: "www.tongwara.com", reload: () => reloads++ },
    dataLayer: [] as unknown[][],
  };
  const mockDocument = {
    get cookie() { return "_ga=visitor; _ga_KRR4D4SSNW=session; essential=keep"; },
    set cookie(value: string) { cookies.push(value); },
  };
  const oldWindow = globalThis.window;
  const oldDocument = globalThis.document;
  Object.assign(globalThis, { window: mockWindow, document: mockDocument });
  try {
    trackEvent("page_view", { page_path: "/" });
    assert.equal(mockWindow.dataLayer.length, 0);
    assert.equal(initializeAnalytics("/"), true);
    assert.equal(initializeAnalytics("/"), true);
    assert.equal(mockWindow.dataLayer.filter(([command]) => command === "config").length, 1);
    const config = mockWindow.dataLayer.find(([command]) => command === "config")?.[2] as Record<string, unknown>;
    assert.equal(config.send_page_view, false);
    assert.equal(config.page_location, "https://www.tongwara.com/");
    const defaults = mockWindow.dataLayer[0][2] as Record<string, unknown>;
    assert.equal(defaults.analytics_storage, "denied");
    assert.equal(defaults.ad_storage, "denied");
    trackEvent("contact_click", { page_path: "/", cta_label: "Contact" });
    assert.equal(mockWindow.dataLayer.filter(([command]) => command === "event").length, 1);
    stopAnalytics();
    const afterWithdrawal = mockWindow.dataLayer.length;
    trackEvent("page_view", { page_path: "/work/pixylivex" });
    assert.equal(mockWindow.dataLayer.length, afterWithdrawal);
    assert.equal((mockWindow as unknown as Record<string, unknown>)["ga-disable-G-KRR4D4SSNW"], true);
    assert.equal(reloads, 1);
    assert.ok(cookies.some((value) => value.startsWith("_ga=") && value.includes("Max-Age=0")));
    assert.ok(cookies.some((value) => value.includes("domain=.tongwara.com")));
    assert.ok(cookies.every((value) => !value.startsWith("essential=")));
  } finally {
    Object.assign(globalThis, { window: oldWindow, document: oldDocument });
  }
});
