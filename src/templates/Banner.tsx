import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Banner = () => (
  <Background color="bg-primary-600">
    <Section yPadding="py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-lg text-white sm:text-xl">
          Secure your license now and start using Remna in 15 minutes.
        </p>
        <div className="mt-8">
          <Link href="/pricing">
            <Button xl>Buy a License</Button>
          </Link>
        </div>
      </div>
    </Section>
  </Background>
);

export { Banner };
