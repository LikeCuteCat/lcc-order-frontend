import type { NextPage } from 'next';
import { css, SerializedStyles } from '@emotion/react'; // Add the import statement for SerializedStyles
import styled from '@emotion/styled';
import Link from 'next/link';

import { useLoadUser } from '../hooks/userActionHooks';
import CategoryButtons from '../components/menu/CategoryButtons';
import { useLoadFoods } from '../hooks/foodsActionHooks';
import FoodCard from '../components/menu/FoodCard';

const PageContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: white;
`;

const buttonCss = css`
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.25);
`;

const CategoryButtonsCss: SerializedStyles = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FoodContainer = styled.div`
  height: 100vh;
  overflow-y: hidden;
  &:hover {
    overflow-y: auto;
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 1rem;
  padding: 1rem 0px;
`;

const Home: NextPage = () => {
  const { me } = useLoadUser();
  const [{ foodByCategory }] = useLoadFoods();

  return (
    <main className="flex items-center justify-center w-full h-screen">
      <PageContainer className="grid grid-cols-6">
        <div className="flex flex-col gap-3 p-3">
          <div className="text-center text-2xl">
            <Link href="/">
              <a>LCC Order</a>
            </Link>
          </div>
          <div className="grow">
            <CategoryButtons css={CategoryButtonsCss} />
          </div>
          <Link href="/dashboard">
            <button className="btn">사장님 페이지</button>
          </Link>
        </div>
        <div className="col-span-4">
          <FoodContainer>{foodByCategory?.map((food) => <FoodCard key={food.id} foodData={food} />)}</FoodContainer>
        </div>
        <div className="flex flex-col p-3 gap-3">
          <div className="grow flex flex-col">
            <div className="h-full">
              <div className="text-center text-2xl pt-3">🛒 장바구니 🛒</div>
              <div className="w-full h-full">주문내역을 담을 창.</div>
            </div>
            <div className="rounded-t-2xl bg-white w-full h-20 flex justify-center items-center p-3" css={buttonCss}>
              <button className="btn w-full">주문 하기</button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button className="btn w-full">주문 내역</button>
            <button className="btn w-full">직원 호출</button>
          </div>
        </div>
      </PageContainer>
    </main>
  );
};

export default Home;
