import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  className?: string;
};

const Logo = ({ xl = false, className = '' }: ILogoProps) => {
  const size = xl ? 180 : 120; // Adjust these numbers if needed

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/assets/images/remnaxp.png"
        alt={AppConfig.site_name}
        width={size}
        height={Math.round(size * 0.3)} // Approximate aspect ratio
        priority
      />
    </span>
  );
};

export { Logo };
