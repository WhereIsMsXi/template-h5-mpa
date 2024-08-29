import axios from 'axios';

import { addLoading, subtractLoading } from './http-mask';
import { API } from '@/constant/api';

// 设置axios默认配置
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: API.timeout,
  headers: {
    ...API.headers,
  },
});

service.interceptors.request.use(
  (config) => {
    addLoading();

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response) => {
    subtractLoading();

    const { status, msg = API.noNetwork, data } = response.data;
    // http 状态码
    if (Number(response.status || 0) === 200) {
      // 接口状态码
      if (status === 0) {
        // 接口数据
        if (data) return data;
        return response.data;
      }
      // @ts-ignore
      showToast({
        message: msg,
      });
      return Promise.reject(new Error(msg));
    }

    // @ts-ignore
    showToast({
      message: API.noNetwork,
    });
    return Promise.reject(new Error(API.noNetwork));
  },
  (error) => {
    // @ts-ignore
    showToast({
      message: API.noNetwork,
    });
    return Promise.reject(error);
  },
);
export default service;
