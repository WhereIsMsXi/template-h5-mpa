export default [
  {
    path: '/',
    name: '首页',
    component: () =>
      import(/* webpackChunkName: "pages" */ '../views/index/IndexView.vue'),
    meta: {
      keepAlive: true,
    },
  },
];
