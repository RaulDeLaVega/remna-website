import {
  Brain,
  Briefcase,
  SearchCheck,
  ShieldCheck,
  TimerReset,
} from 'lucide-react';

import { Background } from '../background/Background';
import { FeatureWithIcon } from '../feature/FeatureWithIcon';
import { Section } from '../layout/Section';

const FeatureSection = () => (
  <Background color="bg-white">
    <Section
      title="Preserve What Matters Most"
      description="When people leave, their knowledge shouldn't."
    >
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <FeatureWithIcon
          icon={<Brain className="size-8 text-primary-500" />}
          title="AI-Powered Knowledge Capture"
          description="Ingest emails, files, and work product to create a searchable AI model of each departing employee — no training or tagging required."
        />
        <FeatureWithIcon
          icon={<SearchCheck className="size-8 text-primary-500" />}
          title="Lightning-Fast Retrieval"
          description="Ask questions in plain English and get immediate, context-rich answers with links back to the source."
        />
        <FeatureWithIcon
          icon={<ShieldCheck className="size-8 text-primary-500" />}
          title="Private by Design"
          description="Secure, encrypted, and fully siloed. You control who sees what. Your data stays yours."
        />
        <FeatureWithIcon
          icon={<TimerReset className="size-8 text-primary-500" />}
          title="Zero IT Burden"
          description="Runs locally. No complex installs. No cloud integration required to get started."
        />
        <FeatureWithIcon
          icon={<Briefcase className="size-8 text-primary-500" />}
          title="Operational Continuity"
          description="Retain expertise. Reduce rework. Onboard replacements faster. All without reinventing the wheel."
        />
      </div>

      <div className="mt-16 text-center text-lg text-gray-700">
        <p>
          Companies using Remna reduce post-departure disruptions by{' '}
          <strong>up to 80%</strong>, recover insight from{' '}
          <strong>tens of thousands of documents</strong>, and onboard new
          employees <strong>weeks faster</strong>.
        </p>
      </div>
    </Section>
  </Background>
);

export { FeatureSection };
