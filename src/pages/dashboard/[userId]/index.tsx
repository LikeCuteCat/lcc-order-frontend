import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import AppLayout from '../../../components/layout/AppLayout';

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query; // bring userId
  return (
    <AppLayout>
      <div>{userId}'s dashboard...</div>
    </AppLayout>
  );
};

export default Dashboard;
