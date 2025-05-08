import Link from 'next/link';

import { Button } from '@/button/Button';

import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { Footer } from './Footer';

export default function About() {
  return (
    <>
      <Meta
        title="About Remna"
        description="Learn about the mission, origin, and purpose behind Remna."
      />

      {/* Hero Banner */}
      <Background color="bg-white">
        <Section yPadding="py-20">
          <h1 className="text-center text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Why We Built Remna
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-700">
            In every company, there’s that person—the one who knows how
            everything fits together. What happens when they leave? Remna was
            born to answer that question — by preserving their knowledge before
            it walks out the door.
          </p>
        </Section>
      </Background>

      {/* Mission Section */}
      <Background color="bg-gray-50">
        <Section yPadding="py-16">
          <h2 className="text-center text-3xl font-bold text-primary-500">
            More Than Memory — A Digital Brain
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
            Our mission is to protect what companies can’t afford to lose: the
            hard-won insights, decisions, and lessons that live inside people’s
            heads. Remna captures that knowledge and turns it into something
            living — a searchable, conversational twin of your most experienced
            people.
          </p>
        </Section>
      </Background>

      {/* Why Now Section */}
      <Background color="bg-white">
        <Section yPadding="py-16">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Why Now?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
            We’re in the middle of two historic shifts: AI is finally smart
            enough to hold a conversation — and the workforce is more mobile
            than ever. Teams can’t rely on tribal knowledge or hallway chats
            anymore. Remna bridges that gap by using large language models to
            preserve and pass on what really matters — the context behind the
            work.
          </p>
        </Section>
      </Background>

      {/* Values Section */}
      <Background color="bg-gray-50">
        <Section yPadding="py-16">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Our Values
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary-500">
                Integrity
              </h3>
              <p className="mt-2 text-gray-600">
                Trust through transparency and secure-by-design architecture.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary-500">
                Innovation
              </h3>
              <p className="mt-2 text-gray-600">
                Pioneering AI-driven solutions that make knowledge accessible.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary-500">
                Customer-First
              </h3>
              <p className="mt-2 text-gray-600">
                Building tools that empower real teams to succeed, day in and
                day out.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary-500">
                Resilience
              </h3>
              <p className="mt-2 text-gray-600">
                Designing for longevity — in code, culture, and customer
                relationships.
              </p>
            </div>
          </div>
        </Section>
      </Background>

      {/* Call-to-Action */}
      <Background color="bg-primary-600">
        <Section yPadding="py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Knowledge fades. Remna remembers.
            </h2>
            <p className="mt-4 text-lg text-white">
              Whether you&apos;re onboarding a new hire or saying goodbye to a
              legend, Remna helps you retain the insight that keeps everything
              running.
            </p>
            <div className="mt-8">
              <Link href="/pricing">
                <Button xl>Buy a License</Button>
              </Link>
            </div>
          </div>
        </Section>
      </Background>

      <Footer />
    </>
  );
}

export { About };
