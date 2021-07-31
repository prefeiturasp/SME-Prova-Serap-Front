import axios from 'axios';
import { urlBase } from './variaveis';
import { store } from '~/redux';

let url = '';

const cancelToken = axios.CancelToken.source();

urlBase().then((resposta) => {
  url = resposta?.data;
});

const api = axios.create({
  baseURL: url,
});

api.interceptors.request.use(
  async (config) => {
    const { token } = store.getState().usuario;

    if (!url) url = await urlBase();

    if (token) config.headers.Authorization = `Bearer ${token}`;

    config.cancelToken = cancelToken.token;

    config.baseURL = url;

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) return Promise.reject(error);
    if (error.response?.status === 401) {
      console.log(error);
    }
    return Promise.reject(error);
  },
);

export default api;
