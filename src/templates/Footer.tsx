import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={
          <>
            <Link
              href="https://www.linkedin.com/company/manchaug-dynamics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="size-6 text-gray-600 hover:text-primary-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.1 1 2.5 1s2.48 1 2.48 2.5zM.5 8H4.5V24H.5V8zm7.5 0h3.5v2.3h.05c.49-.92 1.69-1.89 3.48-1.89 3.72 0 4.4 2.42 4.4 5.57V24h-4V15.1c0-2.1-.04-4.79-2.92-4.79-2.92 0-3.36 2.29-3.36 4.66V24H8V8z" />
              </svg>
            </Link>
          </>
        }
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/terms">Terms</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
        <li>
          <a
            href="https://remna-downloads.s3.amazonaws.com/RemnaDesktopInstaller.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
