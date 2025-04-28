import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? 180 : 120; // Adjust these numbers if needed

  return (
    <span className="inline-flex items-center">
      <Image
        src="/assets/images/remnaxp.png"
        alt={AppConfig.site_name}
        width={size}
        height={size * 0.3} // Approximate aspect ratio
        priority
      />
    </span>
  );
};

export { Logo };
