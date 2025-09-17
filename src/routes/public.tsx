import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';

export const publicRoutes = {
  element: <DefaultLayout />,
  children: [
    { path: '/login', element: <Login /> },
    { path: '/', element: <Home /> },
  ],
};
