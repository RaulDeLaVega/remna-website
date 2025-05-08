import { ShieldCheck } from 'lucide-react';
import { useState } from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { CheckoutModal } from './CheckoutModal';

// Define union for tier keys
type TierKey = 'starter' | 'addon';

interface Tier {
  key: TierKey;
  name: string;
  price: string;
  description: string;
  features: string[];
}

const tiers: Tier[] = [
  {
    key: 'starter',
    name: 'Starter Kit',
    price: '$1,950',
    description: 'Includes desktop app + 1 twin license',
    features: ['1 Digital Twin License', 'Local Desktop App'],
  },
  {
    key: 'addon',
    name: 'Twin Expansion',
    price: '$875',
    description: 'Add an additional Digital Twin to your existing setup',
    features: ['1 Digital Twin License', 'Instant Activation'],
  },
];

export const Pricing = () => {
  const [openModal, setOpenModal] = useState<null | TierKey>(null);

  return (
    <Background color="bg-gray-50">
      <Section
        title="Pricing"
        description="Simple, transparent pricing. No hidden fees."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.key}
              className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <header>
                <h3 className="text-2xl font-bold text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-2 text-gray-600">{tier.description}</p>
              </header>

              <div className="mt-6">
                <span className="text-4xl font-extrabold text-primary-500">
                  {tier.price}
                </span>
                <span className="text-base text-gray-500"> / license</span>
              </div>

              <ul className="mt-6 space-y-2 text-gray-700">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-center">
                    <ShieldCheck className="mr-2 size-5 text-primary-500" />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button xl onClick={() => setOpenModal(tier.key)}>
                  Buy {tier.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {openModal && (
          <CheckoutModal
            productType={openModal}
            onClose={() => setOpenModal(null)}
          />
        )}

        <div className="mt-12 flex items-center justify-center space-x-2 text-sm text-gray-600">
          <ShieldCheck className="size-5 text-gray-400" />
          <span>Secure payment via Stripe • PCI-DSS compliant</span>
        </div>
      </Section>
    </Background>
  );
};
