import React, { ChangeEvent, useState, FC } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import AppLayout from '../../../components/layout/AppLayout';
import Spacing from '../../../components/layout/Spacing';
import CategoryButton from '../../../components/menu/CategoryButton';

const categories = [
  { id: 1, name: '메인식사' },
  { id: 2, name: '사이드' },
  { id: 3, name: '음료' },
];

const Menu: NextPage = () => {
  const router = useRouter();
  return (
    <AppLayout>
      <div>
        {categories.map((data) => (
          <CategoryButton key={data.name} data={data} />
        ))}
        <button className="btn px-5">Create Category</button>
      </div>
      <div className="divider" />
      <div>
        <button className="btn h-28 w-28 text-lg">+</button>
      </div>
    </AppLayout>
  );
};

export default Menu;
