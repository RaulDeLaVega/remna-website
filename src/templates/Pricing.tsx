import { useState } from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { CheckoutModal } from './CheckoutModal';

const Pricing = () => {
  const [openModal, setOpenModal] = useState<null | 'starter' | 'addon'>(null);

  return (
    <Background color="bg-white">
      <Section
        title="Pricing"
        description="Simple, transparent pricing. No hidden fees."
      >
        <div className="flex flex-col gap-8 md:flex-row md:justify-center md:gap-12">
          {/* Starter Kit */}
          <div className="rounded-xl border border-gray-300 p-8 text-center shadow-md">
            <h3 className="text-2xl font-bold text-gray-900">Starter Kit</h3>
            <p className="mt-4 text-gray-600">
              Twin creation desktop app + 1 twin license + web access for 10
              users.
            </p>
            <div className="mt-6 text-4xl font-extrabold text-primary-500">
              $1950
            </div>
            <div className="mt-6">
              <Button xl onClick={() => setOpenModal('starter')}>
                Buy Now
              </Button>
            </div>
          </div>

          {/* Twin Expansion License */}
          <div className="rounded-xl border border-gray-300 p-8 text-center shadow-md">
            <h3 className="text-2xl font-bold text-gray-900">
              Twin Expansion License
            </h3>
            <p className="mt-4 text-gray-600">
              Add an additional twin to your system.
            </p>
            <div className="mt-6 text-4xl font-extrabold text-primary-500">
              $875
            </div>
            <div className="mt-6">
              <Button xl onClick={() => setOpenModal('addon')}>
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {openModal && (
          <CheckoutModal
            productType={openModal}
            onClose={() => setOpenModal(null)}
          />
        )}
      </Section>
    </Background>
  );
};

export { Pricing };
