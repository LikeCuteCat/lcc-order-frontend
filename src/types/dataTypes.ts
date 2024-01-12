export interface User {
  email: string;
  id: number;
  password: string;
  storeId: number;
  type: string;
}

export interface Store {
  id: number;
  name: string;
  address: string;
  description: string;
  seat: number;
  image: string;
  userId: number;
}

export interface Food {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  storeId: number;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
  storeId: number;
}
