import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3065'
axios.defaults.withCredentials = true;

export const addFoodAPI = (data:any) => {
  return axios.post('/food', data).then((res)=>res.data);
}
