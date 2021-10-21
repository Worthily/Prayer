import axios, { AxiosRequestConfig } from 'axios';
import { store } from '../store';
import { API_LINK } from './constants';

const headers = {
  'Content-type': 'application/json',
};
const axiosCfg: AxiosRequestConfig = {
  baseURL: API_LINK,
  headers: headers,
};
export const api = axios.create(axiosCfg);

api.interceptors.request.use((axiosCfg) => {
  try {
    const token = store.getState().user.token;
    console.log('tokenA>>>' + ' ' + token);
    axiosCfg.headers!.Authorization = `Bearer ${token}`;
    return axiosCfg;
  } catch {
    axiosCfg.headers!.Authorization = `Bearer a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3`;
    return axiosCfg;
  }
});