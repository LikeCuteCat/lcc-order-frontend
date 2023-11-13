import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: null,
});

export const categoriesState = atom({
  key: 'categoriesState',
  default: [],
});

export const menusState = atom({
  key: 'menusState',
  default: [],
});

export const seatState = atom({
  key: 'seatState',
  default: [],
});
