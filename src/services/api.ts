import { mockUsers } from '../data/mockUsers';

type FetchOptions = RequestInit & { auth?: boolean };

export async function apiFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  // Fallback to mock data for demo purposes
  if (endpoint.startsWith('/users/')) {
    const id = Number(endpoint.split('/').pop());
    const user = mockUsers.find((u) => u.id === id);
    if (!user) throw new Error(`User with id ${id} not found`);
    return user as T;
  }

  throw new Error(`Unknown endpoint: ${endpoint}`);
}
