import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';
import { Footer, Navbar } from '@/components/ui';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SavingBucks Shopify POS',
  description: `SavingBucks Web Application integrated with Shopify POS(Point of Sale)`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
