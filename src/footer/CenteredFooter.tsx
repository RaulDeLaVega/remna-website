import Link from 'next/link';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: React.ReactNode;
  iconList: React.ReactNode;
  children?: React.ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {props.logo}

    <nav className="mt-6">
      <ul className="text-md flex flex-row justify-center font-medium text-gray-600">
        <li className="mx-3">
          <Link href="/privacy">Privacy</Link>
        </li>
        <li className="mx-3">
          <Link href="/terms">Terms</Link>
        </li>
        <li className="mx-3">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <div className="mt-6 flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>

    <div className="mt-6 text-sm text-gray-400">
      <FooterCopyright />
    </div>
  </div>
);

export { CenteredFooter };
