import React, { FC, useCallback } from 'react';
import type { NextPage } from 'next';
import { useQuery } from 'react-query';
import { loadCategoriesAPI } from '../../apis/categories';
import { css } from '@emotion/react';

import AppLayout from '../../components/layout/AppLayout';
import CategoryButtons from '../../components/menu/CategoryButtons';
import FoodCard from '../../components/menu/FoodCard';
import { useLoadFoods } from '../../hooks/foodsActionHooks';
import Spacing from '../../components/layout/Spacing';
import AddMenuButton from '../../components/menu/AddMunuButton';
import AddCategoryButton from '../../components/menu/AddCategoryButton';

const foodsWrapper = css`
  height: 72vh;
  boarder: 10px solid black;
  overflow-y: hidden;
  &:hover {
    overflow-y: auto;
  }
`;

const Menu: NextPage = () => {
  const [{ foods, foodByCategory }] = useLoadFoods();

  return (
    <AppLayout>
      <div className="flex items-row justify-end gap-3">
        <AddCategoryButton />
        <AddMenuButton />
      </div>
      <Spacing />
      <div>
        <CategoryButtons />
      </div>
      <div className="divider mt-1 mb-1" />
      <div className="grid gap-4 grid-cols-3" css={foodsWrapper}>
        {foodByCategory?.map((food) => <FoodCard key={food.id} foodData={food} />)}
      </div>
    </AppLayout>
  );
};

export default Menu;
