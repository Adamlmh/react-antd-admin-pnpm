import Home from '@/views/home';

import { LayoutGuard } from '../guard';
import { RouteObject } from '../types';

// Home route
const HomeRoute: RouteObject = {
  path: '/home',
  element: <LayoutGuard />,
  meta: {
    title: '首页',
    icon: 'home',
    affix: true,
    orderNo: 1,
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: '',
      element: <Home />,
      meta: {
        title: '首页',
        key: 'home',
        icon: 'home',
        orderNo: 1,
        hideMenu: true,
      },
    },
  ],
};

export default HomeRoute;
