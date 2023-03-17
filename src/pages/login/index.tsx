import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Default } from '@/templates/Default';
import { getURL } from '@/utils/auth';
import { getServerSideProps } from '@/utils/getServerAuth';

const Login = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const signInWithGoogle = async () => {
    await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${getURL()}drive`,
      },
    });
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
      <div className="flex flex-1 flex-col justify-center bg-secondary py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <button
              onClick={() => signInWithGoogle()}
              className="inline-flex w-full justify-center rounded-md border border-primary-800 bg-secondary py-2 px-4 text-sm font-medium text-primary-800 shadow-sm hover:bg-white"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              <span className="ml-2">Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={`${router.basePath}/assets/images/bg.jpg`}
          alt=""
        />
      </div>
    </Default>
  );
};

export default Login;

export { getServerSideProps };
