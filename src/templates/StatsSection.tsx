import { DollarSign, FileText, Users } from 'lucide-react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const stats = [
  {
    icon: Users,
    value: '47%',
    label: 'Annual separation rate',
  },
  {
    icon: FileText,
    value: '2/3',
    label: 'of IT leaders worry about organizational knowledge loss',
  },
  {
    icon: DollarSign,
    value: '0.5-2x salary',
    label: 'average cost per key employee departure',
  },
];

export const StatsSection = () => (
  <Background color="bg-red-50">
    <Section
      title="By the Numbers"
      description="Real-world impact you can't ignore"
    >
      <div className="grid gap-8 sm:grid-cols-3">
        {stats.map(({ icon: Icon, value, label }, idx) => (
          <div key={idx} className="text-center">
            <Icon className="mx-auto mb-4 size-12 text-red-600" />
            <div className="text-4xl font-bold text-gray-900">{value}</div>
            <p className="mt-2 text-gray-700">{label}</p>
          </div>
        ))}
      </div>
    </Section>
  </Background>
);
