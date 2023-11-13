import React, { FC } from 'react';

type Props = {
  data: { id: number; name: string };
};

const CategoryButton: FC<Props> = ({ data }) => {
  const onClick = () => {
    //fetching the menu
    console.log('clicked for', data.name);
  };
  return (
    <button className="btn w-max px-5 mr-3" onClick={onClick}>
      {data.name}
    </button>
  );
};

export default CategoryButton;
