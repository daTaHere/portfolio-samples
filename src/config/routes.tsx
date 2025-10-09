/*
  Ensure all pages are childern of the default layout.
*/

import DefaultLayout from '../layouts/DefaultLayout';
import { publicRoutes } from '../routes/DefaultRoutes';
import { authRoutes } from '../routes/AuthRoutes';

export const routes = [
  {
    element: <DefaultLayout />,
    children: [...publicRoutes, ...authRoutes],
  },
];
