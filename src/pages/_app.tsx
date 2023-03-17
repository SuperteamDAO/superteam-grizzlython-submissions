import '../styles/global.css';

import type { Session } from '@supabase/auth-helpers-nextjs';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import type { AppProps } from 'next/app';
import { useState } from 'react';

const MyApp = ({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
};

export default MyApp;
