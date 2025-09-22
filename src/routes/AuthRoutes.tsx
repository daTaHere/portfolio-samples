import DefaultLayout from '../layouts/DefaultLayout';
import ProtectedRoute from './ProtectedRoute';
import { lazy } from 'react';

const View = lazy(() => import('../pages/PaginatedView'));

export const authRoutes = [
  {
    element: <ProtectedRoute allowedRoles={['user', 'admin']} />,
    children: [
      {
        element: <DefaultLayout />,
        children: [{ path: 'view', element: <View /> }],
      },
    ],
  },
];
