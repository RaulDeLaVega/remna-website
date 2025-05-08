import { BrainCircuit, FolderSearch, MessageSquare } from 'lucide-react';

import { Section } from '../layout/Section';

const steps = [
  {
    title: '1. Collect Knowledge',
    desc: 'Upload files, emails, OneDrive, and work artifacts from the departing employee.',
    Icon: FolderSearch,
  },
  {
    title: '2. Build a Digital Twin',
    desc: 'Remna analyzes the data, preserving insights, habits, and decision patterns.',
    Icon: BrainCircuit,
  },
  {
    title: '3. Ask Questions Anytime',
    desc: 'Search or chat with your digital twin to retrieve insights after they’re gone.',
    Icon: MessageSquare,
  },
];

export const HowItWorks = () => (
  <Section
    title="How Remna Works"
    description="Preserving employee knowledge in 3 simple steps."
  >
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map(({ title, desc, Icon }, i) => (
        <div
          key={i}
          className="rounded-xl bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg"
        >
          <Icon className="mx-auto mb-4 size-12 text-primary-500" />
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="text-gray-600">{desc}</p>
        </div>
      ))}
    </div>
  </Section>
);
