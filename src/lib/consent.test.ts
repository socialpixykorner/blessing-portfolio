import assert from "node:assert/strict";
import { test } from "node:test";
import { consentIsPersisted, readConsent, saveConsent } from "./consent";

test("consent honours unsaved choices and resumes cross-tab storage reads after recovery", () => {
  const oldStorage = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  let saved: string | null = null;
  let readsBlocked = false;
  let writesBlocked = false;
  const storage = {
    getItem() {
      if (readsBlocked) throw new Error("Storage reads blocked");
      return saved;
    },
    setItem(_key: string, value: string) {
      if (writesBlocked) throw new Error("Storage writes blocked");
      saved = value;
    },
  };
  Object.defineProperty(globalThis, "localStorage", { configurable: true, value: storage });
  try {
    assert.equal(readConsent(), null);
    assert.equal(saveConsent("granted"), true);
    assert.equal(readConsent(), "granted");

    writesBlocked = true;
    assert.equal(saveConsent("denied"), false);
    assert.equal(JSON.parse(saved!).value, "granted");
    assert.equal(readConsent(), "denied");
    assert.equal(consentIsPersisted(), false);
    assert.equal(readConsent(), "denied");

    writesBlocked = false;
    assert.equal(saveConsent("denied"), true);
    writesBlocked = true;
    assert.equal(saveConsent("granted"), false);
    assert.equal(JSON.parse(saved!).value, "denied");
    assert.equal(readConsent(), "granted");

    readsBlocked = true;
    assert.equal(saveConsent("denied"), false);
    assert.equal(readConsent(), "denied");

    readsBlocked = false;
    writesBlocked = false;
    assert.equal(saveConsent("granted"), true);
    assert.equal(consentIsPersisted(), true);
    saved = JSON.stringify({ value: "denied", expires: Date.now() + 86400000 });
    assert.equal(readConsent(), "denied");
    saved = JSON.stringify({ value: "granted", expires: Date.now() - 1 });
    assert.equal(readConsent(), null);
    saved = "invalid JSON";
    assert.equal(readConsent(), null);
    saved = JSON.stringify({ value: "invalid", expires: Date.now() + 86400000 });
    assert.equal(readConsent(), null);
    readsBlocked = true;
    assert.equal(readConsent(), null);
  } finally {
    if (oldStorage) Object.defineProperty(globalThis, "localStorage", oldStorage);
    else Reflect.deleteProperty(globalThis, "localStorage");
  }
});
