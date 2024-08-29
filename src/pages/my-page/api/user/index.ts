import { removeEmptyProps } from '@where_is_mr_li/utils';
import service from '@/api/http';

export function Test_ApiPath1(params: any): Promise<any> {
  const data = removeEmptyProps(params);
  return service({
    url: '/user/test/api-path1',
    method: 'post',
    data,
  });
}
