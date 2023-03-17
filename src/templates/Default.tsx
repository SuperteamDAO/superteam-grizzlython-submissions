import type { ReactNode } from 'react';

type IDefaultProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Default = (props: IDefaultProps) => {
  return (
    <div className="min-h-full">
      {props.meta}
      {props.children}
    </div>
  );
};

export { Default };
