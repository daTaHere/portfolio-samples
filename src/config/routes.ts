import { publicRoutes } from '../routes/DefaultRoutes';
import { authRoutes } from '../routes/AuthRoutes';

export const routes = [...publicRoutes, ...authRoutes];
