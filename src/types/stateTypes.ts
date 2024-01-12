import { Food, Category } from './dataTypes';

export type foodStateType = {
  categories: Array<Category>;
  foods: Array<Food>;
  foodByCategory: Array<Food>;
};

export type userStateType = {
  me: User | null;
};

export interface User {
  id: number;
  email: string;
  type: string;
  storeInfo?: Store;
}

export interface Store {
  id: number;
  name: string;
  address: string;
  description: string;
  seat: number;
  image: string;
  categories: Array<Category>;
  userId: number;
}
