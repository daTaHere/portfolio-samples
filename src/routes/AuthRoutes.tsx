import { lazy } from 'react';
import ProtectedRoute from './ProtectedRoute';

const ViewMain = lazy(() => import('../pages/ViewMain'));
const ViewEdit = lazy(() => import('../pages/ViewEdit'));

export const authRoutes = [
  {
    path: 'view',
    element: (
      <ProtectedRoute allowedRoles={['registered', 'admin']}>
        <ViewMain />
      </ProtectedRoute>
    ),
  },
  {
    path: 'edit',
    element: (
      <ProtectedRoute allowedRoles={['registered', 'admin']}>
        <ViewEdit />
      </ProtectedRoute>
    ),
  },
];
