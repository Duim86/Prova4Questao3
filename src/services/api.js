import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  delayed: true,
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');
  const auth = config;
  if (token) {
    auth.headers.Authorization = `Bearer ${token}`;
  }
  return auth;
});

export default api;
