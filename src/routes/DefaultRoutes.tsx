import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactPage = lazy(() => import('../pages/ContactUs'));
const EditView = lazy(() => import('../pages/EditView'));

export const publicRoutes = [
  { index: true, element: <HomePage /> },
  { path: 'login', element: <LoginPage /> },
  { path: 'contact', element: <ContactPage /> },
  { path: 'edit', element: <EditView /> },
];
