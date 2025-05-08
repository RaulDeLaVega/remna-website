import { Background } from '../background/Background';
import { Section } from '../layout/Section';

export const Privacy = () => (
  <Background color="bg-white">
    <Section title="Privacy Policy" description="Effective as of July 2025">
      <div className="prose max-w-none">
        <p>
          Manchaug Dynamics LLC (“we”, “us”, or “our”) is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, and protect your personal information when you use our Services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect information you provide directly (e.g., account signup,
          support requests), as well as technical data like IP address, browser
          type, and usage data through cookies or analytics tools.
        </p>

        <h2>2. How We Use Information</h2>
        <p>
          We use your information to operate, improve, and secure our Services;
          provide support; send service-related communications; and comply with
          legal obligations.
        </p>

        <h2>3. Sharing Your Information</h2>
        <p>
          We do not sell your personal information. We may share data with
          trusted third parties who help us operate the service (e.g., payment
          processors), under strict confidentiality agreements.
        </p>

        <h2>4. Data Retention</h2>
        <p>
          We retain your information only as long as necessary to provide the
          Services and fulfill the purposes outlined in this Policy.
        </p>

        <h2>5. Cookies and Tracking</h2>
        <p>
          We may use cookies and similar technologies to enhance your experience
          and collect analytics data. You can manage your cookie preferences in
          your browser settings.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement reasonable technical and organizational measures to
          protect your data, but no system is 100% secure.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal
          data. Contact us to make such a request.
        </p>

        <h2>8. Childrens Privacy</h2>
        <p>
          Our Services are not intended for children under 13. We do not
          knowingly collect personal information from children.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. If we make material
          changes, we will notify you via the Services or email.
        </p>

        <h2>10. Contact</h2>
        <p>
          For questions about this Privacy Policy, contact us at{' '}
          <a href="mailto:support@getremna.com">support@getremna.com</a>.
        </p>
      </div>
    </Section>
  </Background>
);
