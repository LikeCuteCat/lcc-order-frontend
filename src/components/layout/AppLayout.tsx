import React, { FC, ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { BiLogIn, BiSolidDashboard } from 'react-icons/bi';
import { useRecoilValue } from 'recoil';

import { user } from '../../recoil';

type Props = {
  children: ReactNode;
};

const AppLayout: FC<Props> = ({ children }) => {
  const { me } = useRecoilValue(user);

  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="navbar bg-base-100 size-lg flex justify-between">
        <Link href="/">
          <a className="btn btn-ghost normal-case hover:bg-transparent">ICC ORDER</a>
        </Link>
        <div>
          {me ? (
            <Link href="/dashboard">
              <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
                <BiSolidDashboard />
              </a>
            </Link>
          ) : (
            <Link href="/login">
              <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
                <BiLogIn />
              </a>
            </Link>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
