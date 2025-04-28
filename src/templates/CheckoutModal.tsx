import { useState } from 'react';

type CheckoutModalProps = {
  productType: 'starter' | 'addon';
  onClose: () => void;
};

const CheckoutModal = ({ productType, onClose }: CheckoutModalProps) => {
  const [email, setEmail] = useState('');
  const [orgId, setOrgId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!email || !orgId) {
      setError('Please fill in both fields.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        'https://api.getremna.com/create-checkout-session',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            org_id: orgId,
            product_type: productType,
          }),
        },
      );

      const data = await response.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        setError('Checkout failed. Please try again.');
      }
    } catch {
      setError('Checkout failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Complete your purchase
        </h2>

        <div className="flex flex-col gap-4">
          {error && (
            <div className="text-center text-sm text-red-600">{error}</div>
          )}

          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <input
            type="text"
            placeholder="Organization ID"
            value={orgId}
            onChange={(e) => setOrgId(e.target.value)}
            className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-4 rounded-md bg-primary-500 px-6 py-2 font-bold text-white hover:bg-primary-600 disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Continue to Payment'}
          </button>
          <button
            onClick={onClose}
            className="mt-2 text-sm text-gray-500 underline"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export { CheckoutModal };
