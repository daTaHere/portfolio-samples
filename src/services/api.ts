/**
  Mock API implementation for demo purposes.
  Will be replaced with a full API client in a future iteration.
*/

import { mockUsers } from '../data/mockUsers';

type FetchOptions = RequestInit & { auth?: boolean };

export async function apiFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  // Check for user endpoint and return mock user
  if (endpoint.startsWith('/users/')) {
    const id = Number(endpoint.split('/').pop());
    const user = mockUsers.find((u) => u.id === id);
    if (!user) throw new Error(`User with id ${id} not found`);
    return user as T;
  }

  // Fallback for unimplemented endpoints
  throw new Error(`Unknown endpoint: ${endpoint}`);
}
