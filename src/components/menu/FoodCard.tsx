import React, { FC, useCallback } from 'react';
import { Food } from '../../types/dataTypes';

type Props = {
  foodData: Food;
};

const FoodCard: FC<Props> = ({ foodData }) => {
  const { name, price, description, image } = foodData;

  const onClickCard = useCallback(() => {
    console.log('click card!!');
  }, []);
  return (
    <div className="card w-full bg-base-100 shadow-md rounded-xl max-h-80" onClick={onClickCard}>
      <figure>
        <img className="rounded-xl" src={image} alt={`${name}_image`} />
      </figure>
      <div className="card-body items-center text-center p-5">
        <h2 className="card-title ">{name}</h2>
        <p>{price} 원</p>
      </div>
    </div>
  );
};

export default FoodCard;
