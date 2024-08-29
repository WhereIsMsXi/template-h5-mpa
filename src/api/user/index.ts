import { removeEmptyProps } from '@where_is_mr_li/utils';
import service from '../http';

export function Test_ApiPath(params: any): Promise<any> {
  const data = removeEmptyProps(params);
  return service({
    url: '/user/test/api-path',
    method: 'post',
    data,
  });
}
