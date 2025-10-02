// // src/api/api.ts
// const API_URL = import.meta.env.VITE_API_URL; // <--- Your backend URL hear.

// type FetchOptions = RequestInit & { auth?: boolean };

// export async function apiFetch<T>(
//   endpoint: string,
//   options: FetchOptions = {}
// ): Promise<T> {
//   const headers: HeadersInit = {
//     'Content-Type': 'application/json',
//     ...(options.headers || {}),
//   };

//   const res = await fetch(`${API_URL}${endpoint}`, {
//     ...options,
//     headers,
//   });

//   if (!res.ok) {
//     throw new Error(`API error: ${res.status}`);
//   }

//   return res.json() as Promise<T>;
// }

// src/api/api.ts
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
