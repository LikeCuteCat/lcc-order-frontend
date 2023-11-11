import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import AppLayout from '../../../components/layout/AppLayout';
import App from 'next/app';

const Menu: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  return (
    <AppLayout>
      <div>{userId}'s menu...</div>
    </AppLayout>
  );
};

export default Menu;
