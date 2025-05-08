import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: React.ReactNode;
  iconList: React.ReactNode;
  children?: React.ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="px-6 text-center">
    <div className="flex justify-center">{props.logo}</div>

    {props.children && (
      <nav className="mt-6">
        <ul className="text-md flex flex-wrap justify-center gap-4 font-medium text-gray-600">
          {props.children}
        </ul>
      </nav>
    )}

    <div className="mt-6 flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>

    <div className="mt-6 text-sm text-gray-400">
      <FooterCopyright />
    </div>
  </div>
);

export { CenteredFooter };
