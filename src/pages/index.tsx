import type { NextPage } from 'next';

import { useLoadUser } from '../hooks/userActionHooks';
import AppLayout from '../components/layout/AppLayout';
import CustomerView from '../components/home/CustomerView';
import AdminView from '../components/home/AdminView';

const Home: NextPage = () => {
  const { me } = useLoadUser();

  return <AppLayout>{me?.type === 'admin' ? <AdminView /> : <CustomerView />}</AppLayout>;
};

export default Home;
