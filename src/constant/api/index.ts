import type { httpConfigType } from './index.type';

export const API: httpConfigType = {
  noNetwork: '请检查网络连接！',
  timeout: 10000,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
};

export const PAGE = {
  field: '_page',
  pageSize: 10,
};
