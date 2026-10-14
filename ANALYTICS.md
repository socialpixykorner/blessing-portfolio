# Google Analytics 4

## Deployment configuration

- Set `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-KRR4D4SSNW` in Vercel's Production environment before building. Public Next.js variables are embedded at build time; setting a variable after a build requires a new deployment.
- Leave this variable unset for Preview deployments unless intentionally testing this property.
- The local `.env.local` contains the ID and is ignored by Git.
- No production deployment is authorised by the integration task.

## Required GA4 settings

Enhanced measurement is **off** in the Tongwara Portfolio website stream (`16123841001`, Measurement ID `G-KRR4D4SSNW`), disabled with the owner's approval and verified after reload. Keep it off for this implementation. Initial and client-side page views and the requested interaction events are sent manually. Google's automatic history-based page views can otherwise duplicate them, and automatic form/search/outbound events can collect values outside the explicit parameter allowlist. Do not also install GTM or a second Google tag.

References: https://developers.google.com/analytics/devguides/collection/ga4/views and https://developers.google.com/tag-platform/security/concepts/consent-mode

## Consent

Analytics uses basic consent mode: no Google script or event requests before affirmative acceptance. Advertising storage, user data and personalisation remain denied. A browser-local choice expires after six months. Privacy settings on every page allows withdrawal, disables collection, clears first-party GA cookies and reloads without the tag. Changes in other tabs are observed too. Previously collected data is not automatically deleted by withdrawal.

The privacy notice explains the processing and contact route. This implementation provides technical consent controls; the site owner must maintain appropriate privacy disclosures and decide retention, access and data-processing arrangements for their circumstances. In GA4 Admin, review event/user data retention and restrict account access to authorised users.

## Events

| Event | Trigger | Parameters |
| --- | --- | --- |
| `page_view` | Initial accepted visit and pathname changes | `page_path`, `page_title`, sanitised `page_location`, sanitised internal `page_referrer` |
| `case_study_view` | Each case-study page view | Page parameters, `case_study_title`, `case_study_slug` |
| `resume_download` | CV link with explicit tracking attributes, or a download link containing resume/cv in its path | Page parameters, `cta_label`, `cta_location` |
| `contact_click` | Email links and labelled contact CTAs | Page parameters, `cta_label`, `cta_location` |
| `linkedin_click` | Links to linkedin.com and its subdomains | Page parameters, `cta_label`, `cta_location` |
| `portfolio_cta_click` | Hero work CTA and archive tiles | Page parameters, `cta_label`, `cta_location` |

The hero and contact section both link to `/documents/tongwara-blessing-katsidzira-cv.pdf`. Each emits `resume_download` with `cta_label="CV download"` and a separate `cta_location`: `hero` or `contact_footer`. The contact section links to `https://www.linkedin.com/in/blessing-katsidzira-2aa65721/` and emits `linkedin_click` with `cta_label="LinkedIn profile"` and `cta_location="contact_footer"`. The profile opens in a new tab. No visitor-entered text, email destinations, query strings or fragments are passed as event parameters. A CV event records a click, not proof that the file transfer finished.

## Verification

1. Open a fresh browser session. Before acceptance, there should be no gtag script, no GA cookies, and no Analytics requests.
2. Reject analytics and navigate: no events. Reopen Privacy settings and accept: one page view for the current path, plus one case-study view where applicable.
3. Follow portfolio links using client-side navigation. Each new path gets one page view; hash-only jumps and re-renders do not add page views. Revisiting a path after leaving it is a new visit.
4. Click each supported CTA once and check for one corresponding custom event with fixed labels. Query strings and fragments must not appear in the payload.
5. Withdraw consent and confirm the page reloads, Google Analytics cookies are removed, the tag is absent and subsequent navigation sends no events.
6. Development mode sets `debug_mode: true`. Check GA4 Admin > DebugView while making consented local visits, then Reports > Realtime. Production mode does not enable debug mode. Account-side confirmation requires access to the GA4 property; browser-side checks alone cannot confirm receipt in those reports.

## Checks completed

- `bun test src/lib/analytics.test.ts`: consent gating, single initialisation, withdrawal, cookie removal and subsequent-event blocking passed.
- `bun run lint` and `bun run build` (including TypeScript validation) passed.
- Browser checks: no Google tag before consent or following withdrawal; client-side case-study navigation emits one manual page view and one case-study event; hash navigation emits no extra manual page view. Contact and portfolio CTA payloads use fixed labels and paths without fragments.
- The signed-in Tongwara Portfolio property (Measurement ID `G-KRR4D4SSNW`) received a test page view in DebugView. Realtime displayed the test visitor and a `case_study_view` event.
- Consent controls and the privacy page were visually checked on desktop and a 390px mobile viewport without horizontal overflow.
- Enhanced measurement was disabled with the owner's approval and the saved off state was verified after reload. Manual-event deduplication works alongside `send_page_view: false` and this stream setting.
- Both CV links use the supplied PDF. The contact section uses the supplied LinkedIn profile destination.
- The LinkedIn link was clicked in the browser and emitted one consented `linkedin_click` event with `cta_location="contact_footer"` and `cta_label="LinkedIn profile"`; the profile URL is not sent as an event parameter.
- Both CV downloads were verified in the browser. Each click emitted one `resume_download` event with the correct `hero` or `contact_footer` location. The served PDF matches the supplied file byte for byte.

## Files changed

- `src/lib/analytics.ts`: Google tag configuration, event dispatch and withdrawal.
- `src/lib/analytics.test.ts`: consent and withdrawal tests.
- `src/app/analytics.tsx`: consent interface, route tracking and delegated click tracking.
- `src/app/layout.tsx`: shared analytics component.
- `src/app/page.tsx` and `src/app/work/[slug]/page.tsx`: fixed CTA labels and locations.
- `src/app/privacy/page.tsx`: privacy notice.
- `src/app/globals.css`: consent and privacy styling.
- `.env.local`: local Measurement ID; ignored by Git.
- `public/documents/tongwara-blessing-katsidzira-cv.pdf`: supplied CV shared by both download links.
- `ANALYTICS.md`: setup, verification and outstanding configuration.
