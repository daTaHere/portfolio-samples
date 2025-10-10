/*
  DefaultRoutes defines all public routes. 
  Add route to this array for all users
  Example object:
  {
    path: string -> define url route /{your route name}
    element: React.FC -> The component that renders when the route is hit
  }
*/

import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const ContactUs = lazy(() => import('../pages/ContactUs'));
// const ViewDetails = lazy(() => import('../pages/ViewDetails'));

export const publicRoutes = [
  { index: true, element: <Home /> },
  { path: 'login', element: <Login /> },
  { path: 'contact', element: <ContactUs /> },
];
