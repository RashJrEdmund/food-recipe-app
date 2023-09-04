/* eslint-disable no-param-reassign */
import axios from 'axios';
import { API_KEY, FOOD_BASE_URL } from './tools/constants';
import { LOCALSTORAGE } from '../services/storage';

const TOKEN = 'token';

const httpClient = axios.create({
  baseURL: FOOD_BASE_URL,
  headers: {
    'x-api-key': API_KEY,
  },
});

httpClient.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    config.headers.Authorization = `Bearer: ${LOCALSTORAGE.get(TOKEN)}`;
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default httpClient;
