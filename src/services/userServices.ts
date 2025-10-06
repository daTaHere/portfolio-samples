/*
  User service file, this file contains the raw 
  CRUD HTTP request methods for User data.
*/

import { apiFetch } from '../services/api';
import type { User } from '../types/user';

/**
 * Fetch a user by ID.
 * Wraps the apiFetch function for the user entity.
 * This separation allows easy replacement of the mock API with real backend calls.
 */

export const getUserById = async (id: number): Promise<User> => {
  return apiFetch<User>(`/users/${id}`, { auth: true });
};
