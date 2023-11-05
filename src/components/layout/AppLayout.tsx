import React, {FC, ReactNode} from 'react';
import Link from "next/link";

type Props = {
  children: ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="navbar bg-base-100">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-lg">ICC ORDER</a>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
