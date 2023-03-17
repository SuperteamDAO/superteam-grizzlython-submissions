import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { GetServerSideProps } from 'next';

const unauthenticatedRoutes = ['/login/'];

const invalidRoutes = ['/'];

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(
    'file: getServerAuth.ts:13 ~ constgetServerSideProps:GetServerSideProps= ~ session:',
    session
  );

  if (!session) {
    if (unauthenticatedRoutes.indexOf(ctx?.resolvedUrl) < 0) {
      return {
        props: {},
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
    return {
      props: {},
    };
  }

  if (
    [...unauthenticatedRoutes, ...invalidRoutes].indexOf(ctx?.resolvedUrl) >= 0
  ) {
    return {
      props: {
        session,
        user: session?.user,
      },
      redirect: {
        destination: '/drive',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      user: session?.user,
    },
  };
};
