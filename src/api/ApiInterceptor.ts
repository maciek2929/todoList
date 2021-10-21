import axios from 'axios';

export const iAxios = axios.create({});

iAxios.interceptors.request.use(
  (config) => {
    const token: string = localStorage.getItem('jwt') || '';

    if (token && config && config.headers) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
