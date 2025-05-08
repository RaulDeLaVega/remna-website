// src/components/Layout.tsx
import type { ReactNode } from 'react';
import React from 'react';

import { Header } from '@/header';
import { Footer } from '@/templates/Footer'; // adjust path

type LayoutProps = { children: ReactNode };

export const Layout = ({ children }: LayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="grow">{children}</main>
    <Footer />
  </div>
);
