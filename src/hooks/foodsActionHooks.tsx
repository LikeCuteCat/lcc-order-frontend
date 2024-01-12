import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { produce } from 'immer';

import { food } from '../recoil';
import { loadFoodsAPI } from '../apis/foods';
import { loadCategoriesAPI } from '../apis/categories';
import { foodStateType } from '../types/stateTypes';
import { Food } from '../types/dataTypes';

export const useLoadFoods = (): [foodStateType, boolean, unknown] => {
  const [foodState, setFoodState] = useRecoilState<foodStateType>(food);
  const { data, isLoading, error } = useQuery<Food[]>('foods', loadFoodsAPI);

  useEffect(() => {
    if (data) {
      setFoodState((prev) =>
        produce(prev, (draft) => {
          draft.foods = data;
        }),
      );
    }
  }, [data]);

  return [foodState, isLoading, error];
};

export const useLoadCategories = () => {
  const [foodState, setFoodState] = useRecoilState<foodStateType>(food);
  const { data } = useQuery('categories', loadCategoriesAPI);

  useEffect(() => {
    if (data) {
      setFoodState((prev) =>
        produce(prev, (draft) => {
          draft.categories = data;
        }),
      );
    }
  }, [data]);

  return foodState;
};
