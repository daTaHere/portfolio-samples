import { createBrowserRouter } from 'react-router-dom';
import { routes } from '../config/routes';

function mapRoutes(route: any) {
  const { children, ...rest } = route;
  return {
    ...rest,
    children: children?.map(mapRoutes),
  };
}

export const router = createBrowserRouter(routes.map(mapRoutes));
