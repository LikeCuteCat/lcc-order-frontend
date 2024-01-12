import React, { useCallback } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

import AppLayout from '../../components/layout/AppLayout';
import { useLoadUser } from '../../hooks/userActionHooks';
import Spacing from '../../components/layout/Spacing';
import IncomeState from './components/IncomeState';

const DashBoard: NextPage = () => {
  const { me } = useLoadUser();
  return (
    <AppLayout>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex col-span-2">
          <IncomeState />
        </div>
        <div className="col-span-1">
          <Link href="/dashboard/profile">
            <a className="btn w-full">가게정보 수정</a>
          </Link>
          <Spacing />
          <Link href="/dashboard/menu">
            <a className="btn w-full">메뉴정보 수정</a>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default DashBoard;
