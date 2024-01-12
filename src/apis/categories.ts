import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3065'
axios.defaults.withCredentials = true;

export const loadCategoriesAPI = () => {
  return axios.get('/category').then((res)=>res.data);
}

export const addCategoryAPI = (data:{name: string}) => {
  return axios.post('/category', data).then((res)=>res.data);
}

export const removeCategoryAPI = (categoryId: number) => {
  return axios.delete(`/category/${categoryId}`).then((res)=>res.data);
}