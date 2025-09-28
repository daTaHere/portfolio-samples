import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const ContactUs = lazy(() => import('../pages/ContactUs'));
const ViewEdit = lazy(() => import('../pages/ViewEdit'));
const ViewDetails = lazy(() => import('../pages/ViewDetails'));

export const publicRoutes = [
  { index: true, element: <Home /> },
  { path: 'login', element: <Login /> },
  { path: 'contact', element: <ContactUs /> },
  { path: 'edit', element: <ViewEdit /> },
  { path: 'details', element: <ViewDetails /> },
];
