import type { ReactNode } from 'react';

type INavbarTwoColumnsProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarTwoColumnsProps) => (
  <header className="border-b border-gray-200">
    <div className="mx-auto flex max-w-screen-lg items-center justify-between px-3 py-4">
      <div>{props.logo}</div>

      <nav>
        <ul className="flex space-x-8 text-lg font-medium text-gray-700">
          {props.children}
        </ul>
      </nav>

      <style jsx>{`
        nav :global(a) {
          @apply transition-colors duration-200;
        }
        nav :global(a:hover) {
          @apply text-primary-500;
        }
      `}</style>
    </div>
  </header>
);

export { NavbarTwoColumns };
