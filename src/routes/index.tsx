//Combines public and auth routes into app-wide router instance.
import { createBrowserRouter } from 'react-router-dom';
import { routes } from '../config/routes';

export const router = createBrowserRouter(routes);
