import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock:false,
  proxy: {
    "/api": {
      "target": "http://127.0.0.1:7001",
      "changeOrigin": true,
    }
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
          component: '@/pages/User/Detail',
          title: '用户'
        },
        {
          path: '/login',
          component: '@/pages/User/Login',
          title: '登录'
        },
        {
          path: '/register',
          component: '@/pages/User/Register',
          title: '注册'
        }
      ]
    },
  ],
  fastRefresh: {},
});
