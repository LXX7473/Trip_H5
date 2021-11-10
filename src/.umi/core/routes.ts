// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/lixiang/Desktop/trip/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index').default,
    "routes": [
      {
        "path": "/",
        "component": require('@/pages/home').default,
        "title": "主页",
        "exact": true
      },
      {
        "path": "/detail",
        "component": require('@/pages/order').default,
        "title": "详情",
        "exact": true
      },
      {
        "path": "/user",
        "component": require('@/pages/User/Detail').default,
        "title": "用户",
        "exact": true
      },
      {
        "path": "/login",
        "component": require('@/pages/User/Login').default,
        "title": "登录",
        "exact": true
      },
      {
        "path": "/register",
        "component": require('@/pages/User/Register').default,
        "title": "注册",
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
