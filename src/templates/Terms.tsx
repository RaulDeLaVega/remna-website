import { Background } from '../background/Background';
import { Section } from '../layout/Section';

export const Terms = () => (
  <Background color="bg-white">
    <Section title="Terms of Service" description="Effective as of July 2025">
      <div className="prose max-w-none">
        <p>
          These Terms of Service (“Terms”) govern your use of our website,
          software, and services (collectively, the “Services”). By using our
          Services, you agree to these Terms. If you do not agree, do not use
          the Services.
        </p>

        <h2>1. Use of Services</h2>
        <p>
          You agree to use the Services only for lawful purposes and in
          accordance with these Terms. Misuse, unauthorized access, or
          interference with our Services is prohibited.
        </p>

        <h2>2. User Accounts</h2>
        <p>
          Creating an account may be required for certain features. You are
          responsible for maintaining your account credentials and all activity
          under your account.
        </p>

        <h2>3. Subscriptions and Payments</h2>
        <p>
          If applicable, subscription fees are billed in advance and are
          non-refundable. You agree to the pricing and billing terms at the time
          of purchase.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          All content, trademarks, and software are owned by or licensed to
          Manchaug Dynamics LLC, reproduce, or redistribute them without
          permission.
        </p>

        <h2>5. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access for
          violations of these Terms or other harmful activity.
        </p>

        <h2>6. Disclaimers</h2>
        <p>
          The Services are provided “as is” without warranties. We do not
          guarantee uninterrupted or error-free access.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          Manchaug Dynamics LLC is not liable for any indirect or consequential
          damages resulting from your use of the Services.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          We may update these Terms periodically. Continued use after changes
          means you accept the revised Terms.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the Commonwealth of
          Massachusetts.
        </p>

        <h2>10. Contact</h2>
        <p>
          For questions or legal inquiries, contact us at{' '}
          <a href="mailto:support@getremna.com">support@getremna.com</a>.
        </p>
      </div>
    </Section>
  </Background>
);
