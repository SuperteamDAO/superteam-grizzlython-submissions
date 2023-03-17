import type { Session, User } from '@supabase/auth-helpers-nextjs';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Default } from '@/templates/Default';
import { getServerSideProps } from '@/utils/getServerAuth';

type PageProps = {
  session: Session;
  user: User;
};

const Drive = ({ session, user }: PageProps) => {
  const supabaseClient = useSupabaseClient();
  console.log('file: index.tsx:14 ~ Drive ~ session, user:', session, user);

  const [isLoading, setIsLoading] = useState(false);

  const signOut = async () => {
    setIsLoading(true);
    await supabaseClient.auth.signOut();
    setIsLoading(false);
  };

  return (
    <Default
      meta={
        <Meta
          title="Sign In"
          description="Visually gorgeous and blazingly fast Google Drive experience"
        />
      }
    >
      <div className="flex h-24 flex-col gap-4 p-8">
        Hello, {user?.user_metadata?.full_name}!
        <img
          className="inline-block h-8 w-8 rounded-full"
          src={user?.user_metadata?.picture}
          alt={user?.user_metadata?.full_name}
        />
        <button
          onClick={() => signOut()}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {isLoading ? 'Loading...' : 'Sign Out'}
        </button>
      </div>
    </Default>
  );
};

export default Drive;

export { getServerSideProps };
