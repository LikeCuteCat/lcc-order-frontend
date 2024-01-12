import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3065';
axios.defaults.withCredentials = true;

export const loadUserAPI = () => {
  // load user info
  return axios.get(`/user/1`).then((res) => res.data);
};

export const loginAPI = (data: { email: string; password: string }) => {
  return axios.post('/user/login', data).then((res) => res.data);
};

//signup.
export const signupAPI = (data: { email: string; storename: string; password: string }) => {
  return axios.post('/user', data).then((res) => res.data);
};

export const loadUserStoreAPI = (userId: number) => {
  return axios.get(`/store?userId=${userId}`).then((res) => res.data);
};
