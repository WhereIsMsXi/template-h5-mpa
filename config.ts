import { format2KebabCase } from '@where_is_mr_li/utils';

interface MpaPage {
  id: number;
  title: string;
  name: string;
  src: string;
  ftp: string;
}
interface MpaPageValue {
  [key: string]: MpaPage;
}

const MAP = {
  id1: 'myPage',
};

const apiUrl = '';
const prevUrl = '/pages';
const entry: MpaPageValue = {
  myPage: {
    id: 1,
    title: '示例页',
    name: MAP.id1,
    src: `./src/views/${format2KebabCase(MAP.id1)}`,
    ftp: `${apiUrl}${prevUrl}/my-page`,
  },
};
// 当前项目
export const currentEntry = entry[MAP.id1];
