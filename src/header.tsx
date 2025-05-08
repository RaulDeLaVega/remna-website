// src/components/Header.tsx
import Link from 'next/link';

import { Logo } from '@/templates/Logo'; // adjust path as needed

export const Header = () => (
  <header className="border-b border-gray-200 bg-white">
    <nav className="container mx-auto flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center">
        <Logo className="h-8 w-auto" />
      </Link>
      <ul className="flex space-x-6 font-medium text-gray-700">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  </header>
);
