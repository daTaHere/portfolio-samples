// Example of basic service request to a backend
import { apiFetch } from '../services/api';
import type { User } from '../types/user';

export const getUserById = async (id: number): Promise<User> => {
  return apiFetch<User>(`/users/${id}`, { auth: true });
};
