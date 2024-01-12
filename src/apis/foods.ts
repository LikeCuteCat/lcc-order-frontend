import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3065';
axios.defaults.withCredentials = true;

//Load all FOODS
export const loadFoodsAPI = () => {
  return axios.get('/food').then((res) => res.data);
};

export const loadCategoryFoodsAPI = (categoryId: number) => {
  return axios.get(`/food?categoryId=${categoryId}`).then((res) => res.data);
};
