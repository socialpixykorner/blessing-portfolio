import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy | Tongwara Blessing Katsidzira",
  description: "How Tongwara.com uses optional analytics and how to manage your privacy choices.",
};

export default function PrivacyPage() {
  return (
    <main className="case-site min-h-screen">
      <header className="case-header">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link className="wordmark" href="/">TBK<span className="accent">.</span></Link>
          <Link className="case-back" href="/">Back to portfolio</Link>
        </nav>
      </header>
      <article className="privacy-notice mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <h1>Privacy notice</h1>
        <p>This portfolio is operated by Tongwara Blessing Katsidzira. For privacy questions or requests, email <a href="mailto:hello@tongwara.com">hello@tongwara.com</a>.</p>
        <h2>Optional analytics</h2>
        <p>With your consent, Google Analytics 4 measures page visits, case-study views and clicks on portfolio, contact, LinkedIn and CV-download links where available. This helps me understand how visitors engage with my work.</p>
        <p>The events I send use page paths, case-study titles and fixed interaction labels. They exclude email addresses, message content, URL query strings and URL fragments. Analytics is not used to identify individual recruiters or hiring managers.</p>
        <h2>Cookies and Google</h2>
        <p>Analytics is off until you choose Accept analytics. When enabled, Google may set first-party analytics cookies, including _ga and _ga_* cookies, and receive technical information such as browser and device information, cookie identifiers and your IP address as part of the network connection. Advertising consent is not granted.</p>
        <p>Google processes analytics information and may process it outside your country. Read <a href="https://policies.google.com/privacy">Google&apos;s privacy policy</a> and <a href="https://policies.google.com/technologies/partner-sites">how Google uses information from partner sites</a> for more information.</p>
        <h2>Your choice</h2>
        <p>Accepting and rejecting analytics are equally available. Your choice is saved in this browser for up to six months using local storage. You can use Privacy settings at the bottom of any page to change it.</p>
        <p>Withdrawing consent stops future analytics collection, removes this site&apos;s Google Analytics cookies and reloads the page without the analytics tag. It does not automatically erase information already sent to Google. Contact me with questions or requests about previously collected data.</p>
        <h2>Contact and hosting</h2>
        <p>Email links open your email application. Information you choose to send by email is used to respond to your enquiry. This website is hosted on Vercel, which may process technical request information to deliver and secure the site independently of optional analytics.</p>
      </article>
    </main>
  );
}
