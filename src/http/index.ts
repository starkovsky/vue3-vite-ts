import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

import { API_URL, isPROD } from '@/runtimeEnv';

const HTTPClient = axios.create({
  baseURL: API_URL,
});

HTTPClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401 && isPROD) {
      alert('You are not authenticated');
    }
    return Promise.reject(error);
  },
);

export const HTTPRequest = (
  options: AxiosRequestConfig,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  return HTTPClient.request({
    ...options,
    paramsSerializer: (params) => {
      return qs.stringify(params, {
        arrayFormat: 'comma',
        encode: false,
      });
    },
  });
};
