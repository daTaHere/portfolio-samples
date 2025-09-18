import DefaultLayout from '../layouts/DefaultLayout';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import Login from '../pages/Login';

export const publicRoutes = {
  element: <DefaultLayout />,
  children: [
    { path: '/login', element: <Login /> },
    { path: '/contact', element: <ContactUs /> },
    { path: '/', element: <Home /> },
  ],
};
