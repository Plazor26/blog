export const metadata = {
  title: "Privacy Policy - Neurafate",
  description: "Privacy policy for Neurafate website",
}

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h1>Privacy Policy</h1>

        <p className="text-lg text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <h2>Information We Collect</h2>
        <p>
          Neurafate ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we
          collect, use, and safeguard your information when you visit our website.
        </p>

        <h2>Google Analytics</h2>
        <p>
          We use Google Analytics to understand how visitors interact with our website. Google Analytics collects
          information such as:
        </p>
        <ul>
          <li>Pages you visit on our site</li>
          <li>Time spent on each page</li>
          <li>How you arrived at our site</li>
          <li>General geographic location (city/country level)</li>
          <li>Device and browser information</li>
        </ul>
        <p>
          This information is collected anonymously and helps us improve our website content and user experience. Google
          Analytics uses cookies to track this information. You can opt out of Google Analytics tracking by installing
          the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>

        <h2>Cookies</h2>
        <p>Our website uses cookies for:</p>
        <ul>
          <li>Google Analytics tracking (as described above)</li>
          <li>Remembering your theme preference (dark/light mode)</li>
        </ul>
        <p>
          You can control cookies through your browser settings. However, disabling cookies may affect some
          functionality of our website.
        </p>

        <h2>Data Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to third parties, except for Google
          Analytics as described above. Google's use of this data is governed by their own privacy policy.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your information. However, no method of transmission
          over the internet is 100% secure.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Opt out of Google Analytics tracking</li>
          <li>Clear your browser cookies</li>
          <li>Contact us with any privacy-related questions</li>
        </ul>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
          revision date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our{" "}
          <a href="/contact">contact page</a>.
        </p>
      </div>
    </main>
  )
}
