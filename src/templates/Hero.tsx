import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

// Animated text component for title line
const RotatingTitle = () => {
  const texts = ['KNOWLEDGE FADES.', 'REMNA REMEMBERS.'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-20 overflow-hidden text-center">
      <span
        key={index}
        className="absolute left-1/2 top-0 -translate-x-1/2 animate-fade-in-out text-3xl font-extrabold uppercase leading-snug tracking-wide text-gray-900"
      >
        {texts[index]}
      </span>
    </div>
  );
};

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <RotatingTitle />
            <span className="mt-4 block text-center text-xl font-medium text-primary-500">
              Preserve knowledge. Protect your future.
            </span>
          </>
        }
        description="Remna helps you capture and retain the critical know-how of departing employees. Prevent knowledge loss. Preserve continuity. Stay future-ready."
        button={
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/pricing">
              <Button xl>Buy Now</Button>
            </Link>
            <a
              href="https://remna-downloads.s3.amazonaws.com/RemnaDesktopInstaller.exe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-gray-800 px-6 py-3 text-lg font-semibold text-white transition hover:bg-gray-700"
            >
              Download App
            </a>
          </div>
        }
      />
    </Section>
  </Background>
);

export { Hero };
