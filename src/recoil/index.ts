import { atom } from 'recoil';
import { foodStateType, userStateType } from '../types/stateTypes';

export const user = atom<userStateType>({
  key: 'userState',
  default: {
    me: null,
  },
});

export const food = atom<foodStateType>({
  key: 'foodState',
  default: {
    foods: [],
    categories: [],
    foodByCategory: [],
  },
});
