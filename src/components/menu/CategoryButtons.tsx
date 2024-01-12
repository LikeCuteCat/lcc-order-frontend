import React, { FC, useCallback, useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { produce } from 'immer';
import { CSSObject, SerializedStyles } from '@emotion/react';

import { food } from '../../recoil';
import { useQuery } from 'react-query';
import { loadCategoryFoodsAPI, loadFoodsAPI } from '../../apis/foods';
import { loadCategoriesAPI } from '../../apis/categories';
import { CategoryButtonType } from '../../types/ComponentTypes';
import { Category, Food } from '../../types/dataTypes';

type Props = {
  css?: SerializedStyles;
};

const CategoryButtons = ({ ...props }: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [{ categories }, setFoodState] = useRecoilState(food);
  const { data } = useQuery<Category[]>('categories', loadCategoriesAPI);

  useEffect(() => {
    if (data) {
      setFoodState((prev) =>
        produce(prev, (draft) => {
          draft.categories = data;
        }),
      );
    }
  }, [data]);

  const onClickButtonHandler = useCallback((id: number) => {
    setActiveTab(id);
    if (id === 0) {
      setFoodState((prev) =>
        produce(prev, (draft) => {
          draft.foodByCategory = draft.foods;
        }),
      );
    } else {
      setFoodState((prev) =>
        produce(prev, (draft) => {
          draft.foodByCategory = draft.foods.filter((food) => food.categoryId === id);
        }),
      );
    }
  }, []);

  return (
    <div className="indicator" {...props}>
      <button
        className={`btn btn-sm btn-lg px-2 mx-1 ${activeTab === 0 && 'btn-accent'}`}
        onClick={() => onClickButtonHandler(0)}
      >
        전체 매뉴
      </button>
      {categories?.map((category) => (
        <CategoryButton
          key={category.id}
          isActive={activeTab === category.id}
          onClickHandler={() => onClickButtonHandler(category.id)}
          data={category}
        />
      ))}
    </div>
  );
};

const CategoryButton: FC<CategoryButtonType> = ({ isActive, onClickHandler, data }) => {
  return (
    <button className={`btn btn-sm btn-lg px-2 mx-1 ${isActive && 'btn-accent'}`} onClick={onClickHandler}>
      {data?.name}
    </button>
  );
};

export default CategoryButtons;
