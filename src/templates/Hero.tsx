import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="/signin">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Preserve Knowledge.\n'}
            <span className="text-primary-500">Protect Your Future.</span>
          </>
        }
        description="Critical insights shouldn't leave with critical employees. Remna captures and preserves the expertise your organization depends on — safely, privately, permanently."
        button={
          <Link href="/pricing">
            <Button xl>Get Started</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
