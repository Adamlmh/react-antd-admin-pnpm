import { lazy } from 'react';

import { LazyLoad } from '@/components/LazyLoad';

import { LayoutGuard } from '../guard';
import { RouteObject } from '../types';

// graph-editor module page
const GraphEditorRoute: RouteObject = {
  path: '/graph-editor',
  element: <LayoutGuard />,
  meta: {
    title: '图形编辑器',
    icon: 'flow',
    orderNo: 8,
  },
  children: [
    {
      path: 'flow-chart',
      element: LazyLoad(lazy(() => import('@/views/blank'))),
      meta: {
        title: '流程图',
        key: 'flowChart',
      },
    },
    {
      path: 'mind-chart',
      element: LazyLoad(lazy(() => import('@/views/blank'))),
      meta: {
        title: '思维导图',
        key: 'mindChart',
      },
    },
  ],
};

export default GraphEditorRoute;
