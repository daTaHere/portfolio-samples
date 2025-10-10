/*
  Ensure all pages are childern of the default layout.
*/

import DefaultLayout from '../layouts/DefaultLayout';
import { authRoutes } from '../routes/AuthRoutes';
import { publicRoutes } from '../routes/DefaultRoutes';

export const routes = [
  {
    element: <DefaultLayout />,
    children: [...publicRoutes, ...authRoutes],
  },
];
