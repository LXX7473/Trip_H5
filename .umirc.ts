import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: '@/pages/home',
          title: '主页'
        },
        {
          path: '/detail',
          component: '@/pages/order',
          title: '详情'
        },
        {
          path: '/user',
          component: '@/pages/user',
          title: '用户'
        }
      ]
    },
  ],
  fastRefresh: {},
});
