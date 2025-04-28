import classNames from 'classnames';
import type { MouseEventHandler, ReactNode } from 'react';

type IButtonProps = {
  xl?: boolean;
  children: ReactNode; // now safe for text, spans, icons, etc.
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ xl, children, onClick }: IButtonProps) => {
  const btnClass = classNames(
    'inline-block rounded-md text-center font-semibold',
    xl ? 'text-xl py-4 px-6 font-extrabold' : 'text-lg py-2 px-4',
    'text-white bg-primary-500 hover:bg-primary-600',
  );

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
