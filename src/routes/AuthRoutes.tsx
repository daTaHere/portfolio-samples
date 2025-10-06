/*
  AuthRoutes is the gatekeeper for our private routes.
  The component is wrapped in a ProtectedRoute component
  that validate user's logged in state, and associated roles
  before allow access to route.
  Example object:
  {
    path: string -> define url route
    element: 
           -> ProtectedRoute = (help hook to check login status)
  }        -> allowedRoles = {define what roles are allowed to this route}
*/

import { lazy } from 'react';
import ProtectedRoute from './ProtectedRoute';

const ViewMain = lazy(() => import('../pages/ViewMain'));
const ViewEdit = lazy(() => import('../pages/ViewEdit'));
const ViewDetails = lazy(() => import('../pages/ViewDetails'));

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
  {
    path: 'details/:id',
    element: (
      <ProtectedRoute allowedRoles={['registered', 'admin']}>
        <ViewDetails />
      </ProtectedRoute>
    ),
  },
];
