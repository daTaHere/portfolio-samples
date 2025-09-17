import DefaultLayout from '../layouts/DefaultLayout';
import PaginatedView from '../pages/PaginatedView';

export const privateRoutes = {
  element: <DefaultLayout />,
  children: [{ path: '/view', element: <PaginatedView /> }],
};
