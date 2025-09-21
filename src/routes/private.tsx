import DefaultLayout from '../layouts/DefaultLayout';
import PaginatedView from '../pages/PaginatedView';
import ProtectedRoute from './ProtectedRoute';

export const privateRoutes = {
  element: <ProtectedRoute />, // 👈 gatekeeper
  children: [
    {
      element: <DefaultLayout />,
      children: [{ path: '/view', element: <PaginatedView /> }],
    },
  ],
};
