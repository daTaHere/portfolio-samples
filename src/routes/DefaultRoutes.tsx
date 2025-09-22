import DefaultLayout from '../layouts/DefaultLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactPage = lazy(() => import('../pages/ContactUs'));

export const publicRoutes = [
  {
    element: <DefaultLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
];
