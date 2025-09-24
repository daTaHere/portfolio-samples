import { lazy } from 'react';
import ProtectedRoute from './ProtectedRoute';

const View = lazy(() => import('../pages/PaginatedView'));

export const authRoutes = [
  {
    path: 'view',
    element: (
      <ProtectedRoute allowedRoles={['user', 'admin']}>
        <View />
      </ProtectedRoute>
    ),
  },
];
