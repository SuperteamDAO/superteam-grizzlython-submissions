import '../styles/global.css';

import { GeistProvider } from '@geist-ui/core';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <GeistProvider>
    <div className="fixed inset-0 flex justify-center sm:px-8">
      <div className="flex w-full max-w-7xl lg:px-8">
        <div className="w-full bg-zinc-900 ring-1 ring-zinc-300/20" />
      </div>
    </div>
    <div className="relative">
      <main>
        <Component {...pageProps} />
      </main>
    </div>
    <Analytics />
  </GeistProvider>
);

export default MyApp;
