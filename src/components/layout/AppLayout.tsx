import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import { BiLogIn, BiSolidDashboard } from 'react-icons/bi';
import { useRouter } from 'next/router';

import MenuButton from '../customizedUI/MenuButton';

type Props = {
  children: ReactNode;
};

const AppLayout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const inDashbordPage = router.pathname.includes('dashboard');
  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="navbar bg-base-100 size-lg flex justify-between">
        <Link href="/">
          <a className="btn btn-ghost normal-case hover:bg-transparent">ICC ORDER</a>
        </Link>
        <div>
          {inDashbordPage && <MenuButton userId="1" />}
          <Link href="/dashboard/1">
            <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
              <BiSolidDashboard />
            </a>
          </Link>
          <Link href="/login">
            <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
              <BiLogIn />
            </a>
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
