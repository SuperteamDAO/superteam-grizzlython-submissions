import type { ReactNode } from 'react';

type IDefaultProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Default = (props: IDefaultProps) => {
  // const [userSession, setUserSession] = useState<Session | null>(null);
  // const [user, setUser] = useState<User | null>(null);
  // useEffect(() => {
  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     async (event, session) => {
  //       setUserSession(session);
  //       setUser(session?.user ?? null);
  //     }
  //   );

  //   return () => {
  //     authListener?.unsubscribe();
  //   };
  // }, []);
  return (
    <div className="flex min-h-full">
      {props.meta}
      {props.children}
    </div>
  );
};

export { Default };
