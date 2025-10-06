/*
  This routes component sets our DefaultLayout as the parent layout
  of our application. The children are return base on Auth/Authz protecting
  our private routes while allowing our public routes accessibility.
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
