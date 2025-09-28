import { lazy } from 'react';
import ProtectedRoute from './ProtectedRoute';

const ViewMain = lazy(() => import('../pages/ViewMain'));

export const authRoutes = [
  {
    path: 'view',
    element: (
      <ProtectedRoute allowedRoles={['user', 'admin']}>
        <ViewMain />
      </ProtectedRoute>
    ),
  },
];
