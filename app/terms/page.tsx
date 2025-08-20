export const metadata = {
  title: "Terms of Service – Neurafate",
  description: "Terms of service and community guidelines for Neurafate",
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h1>Terms of Service</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using Neurafate ("the Site"), you accept and agree to be bound by the terms and provision of
          this agreement.
        </p>

        <h2>Community Guidelines</h2>
        <p>
          Neurafate provides a platform for thoughtful discussion through our comment system. To maintain a respectful
          environment, the following behaviors are strictly prohibited:
        </p>

        <h3>Prohibited Content</h3>
        <ul>
          <li>
            <strong>Harassment and Bullying:</strong> Any form of harassment, intimidation, or bullying of other users
          </li>
          <li>
            <strong>Hate Speech:</strong> Content that promotes hatred or discrimination based on race, ethnicity,
            religion, gender, sexual orientation, disability, or any other protected characteristic
          </li>
          <li>
            <strong>Bigotry:</strong> Prejudiced or intolerant views and expressions toward any group of people
          </li>
          <li>
            <strong>Personal Attacks:</strong> Direct attacks on individuals rather than engaging with their ideas
          </li>
          <li>
            <strong>Spam:</strong> Repetitive, irrelevant, or promotional content
          </li>
          <li>
            <strong>Misinformation:</strong> Deliberately false or misleading information
          </li>
          <li>
            <strong>Illegal Content:</strong> Any content that violates applicable laws
          </li>
          <li>
            <strong>Doxxing:</strong> Sharing personal information of others without consent
          </li>
          <li>
            <strong>Threats:</strong> Any form of threat or incitement to violence
          </li>
        </ul>

        <h3>Expected Behavior</h3>
        <ul>
          <li>Engage respectfully with other commenters</li>
          <li>Stay on topic and contribute meaningfully to discussions</li>
          <li>Respect differing viewpoints and opinions</li>
          <li>Use appropriate language suitable for all audiences</li>
          <li>Report inappropriate content when you encounter it</li>
        </ul>

        <h2>Content Moderation</h2>
        <p>
          We reserve the right to remove any content that violates these terms without prior notice. Comments are
          powered by GitHub Discussions, and moderation follows both our guidelines and GitHub's Community Guidelines.
        </p>

        <h2>User Responsibilities</h2>
        <p>Users are responsible for their own comments and interactions. By commenting, you agree that:</p>
        <ul>
          <li>You will not violate any applicable laws or regulations</li>
          <li>You will respect the rights and dignity of other users</li>
          <li>You understand that your comments may be publicly visible</li>
          <li>You will not attempt to circumvent moderation measures</li>
        </ul>

        <h2>Enforcement</h2>
        <p>Violations of these terms may result in:</p>
        <ul>
          <li>Comment removal</li>
          <li>Temporary or permanent suspension from commenting</li>
          <li>Reporting to relevant authorities for illegal content</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All content on this site, including articles, images, and design elements, is owned by Neurafate unless
          otherwise stated. Users retain ownership of their comments but grant us a license to display them on the
          platform.
        </p>

        <h2>Disclaimer</h2>
        <p>
          The information on this site is provided "as is" without any representations or warranties. We do not
          guarantee the accuracy, completeness, or usefulness of any information on the site.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.
          Continued use of the site constitutes acceptance of modified terms.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about these terms or need to report a violation, please contact us through our{" "}
          <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
            contact page
          </a>
          .
        </p>
      </div>
    </main>
  )
}
