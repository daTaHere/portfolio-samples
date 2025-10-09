/**
  Mock API client for demo purposes. 
  Future: integrate live REST/GraphQL API.
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
