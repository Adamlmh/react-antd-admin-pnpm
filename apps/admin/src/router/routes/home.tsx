import { lazy, Suspense } from 'react';

import { LazyLoad } from '@/components/LazyLoad';

import { LayoutGuard } from '../guard';

import type { RouteObject } from '../types';
import Loading from '@/components/LazyLoad/src/Loading';
const HomePage = lazy(() => import('@/views/home/index'));
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
      element: (
        <Suspense fallback={<Loading />}>
          <HomePage />
        </Suspense>
      ),
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
