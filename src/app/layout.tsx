import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';
import Header from '@/components/header';
import ReactQueryProvider from '@/lib/provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'By Said'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex min-h-screen w-screen flex-col items-center bg-background px-4 sm:px-[7%]  overflow-x-hidden relative'>
          <Providers>
            <ReactQueryProvider>
            {children}
            </ReactQueryProvider>
          </Providers>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
