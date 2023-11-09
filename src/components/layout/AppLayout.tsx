import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import { BiLogIn } from 'react-icons/bi';

type Props = {
  children: ReactNode;
};

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="navbar bg-base-100 size-lg flex justify-between">
        <Link href="/">
          <a className="btn btn-ghost normal-case hover:bg-transparent">ICC ORDER</a>
        </Link>
        <Link href="/login">
          <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
            <BiLogIn />
          </a>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
