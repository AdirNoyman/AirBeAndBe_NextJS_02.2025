import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Be&Be',
  description: 'This is my version to Air BnB',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className='container py-10'>{children}</main>
      </body>
    </html>
  );
}
