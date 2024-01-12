import React, { FC, ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { BiLogIn, BiSolidDashboard } from 'react-icons/bi';
import { useRecoilValue } from 'recoil';

import { user } from '../../recoil';
import { css } from '@emotion/react';

type Props = {
  children: ReactNode;
};

const containerCss = css`
  max-width: calc(100%-200px);
  height: 100%;
  background-color: white;
`;

const AppLayout: FC<Props> = ({ children }) => {
  const { me } = useRecoilValue(user);

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <div className="container border" css={containerCss}>
        <div className="navbar bg-base-100 size-lg flex justify-between">
          <Link href="/">
            <a className="btn btn-ghost normal-case hover:bg-transparent">ICC ORDER</a>
          </Link>
          <div>
            {me ? (
              <Link href="/dashboard">
                <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">사장님</a>
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
        <div className="content flex flex-col justify-center p-3">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
