import React, { FC } from 'react';
import { BiMenu } from 'react-icons/bi';
import Spacing from '../layout/Spacing';
import Link from 'next/link';

type Props = {
  userId: string;
};

const MenuButton: FC<Props> = ({ userId }) => {
  const basePath: string = `/dashboard`;

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn drawer-button btn-ghost normal-case text-xl bg-transparent hover:bg-transparent"
        >
          <BiMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="text-3xl text-center">ICC ORDER</div>
          <div className="divider" />
          <li>
            <Link href={basePath}>
              <a>가게 대시보드</a>
            </Link>
          </li>
          <li>
            <Link href={`${basePath}/profile`}>
              <a>가게 프로필</a>
            </Link>
          </li>
          <li>
            <Link href={`${basePath}/menu`}>
              <a>매뉴판 꾸미기</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuButton;
