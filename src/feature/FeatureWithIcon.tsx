import type { ReactNode } from 'react';

type FeatureWithIconProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const FeatureWithIcon = ({
  icon,
  title,
  description,
}: FeatureWithIconProps) => (
  <div className="flex items-start space-x-4">
    <div className="flex size-12 items-center justify-center rounded-full bg-primary-100 text-primary-500">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);
