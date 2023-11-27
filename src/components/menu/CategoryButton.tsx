import React, { FC, useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {produce} from "immer";
import {css} from "@emotion/react";

import {food} from '../../recoil'
import {useQuery} from "react-query";
import {loadCategoryFoodsAPI, loadFoodsAPI} from "../../apis/foods";
import {foodType} from "../../types/reacoilState";

type Props = {
  data: { id: number | string , name: string };
};

const indicatorStyle = css`
  :hover{
    cursor: pointer;
  }
`

const CategoryButton: FC<Props> = ({ data}) => {
  const {id, name} = data;
  const queryKey:[string, number] | string = (typeof id === 'number') ? ['foods', id] : 'foods';
  const fetchFn = (typeof id === 'number') ? ()=>loadCategoryFoodsAPI(id) : loadFoodsAPI;
  const setFoodState = useSetRecoilState(food);
  const {data:foodsData} = useQuery<foodType[]>(queryKey, fetchFn);

  const onClick = useCallback(() => {
    if(foodsData){
      setFoodState((prev)=>produce(prev, (draft)=>{
        draft.foods = foodsData;
      }))
    }
  },[foodsData, setFoodState])

  const deleteCategory = useCallback(()=>{
    console.log('delete category')
  },[])

  return (
    <div className='indicator'>
      <span className="indicator-item indicator-center badge badge-secondary" onClick={deleteCategory} css={indicatorStyle}>삭제</span>
      <button className="btn w-max px-5 mr-1 ml-1" onClick={onClick}>
        {name}
      </button>
    </div>

  );
};
export default CategoryButton;
