import * as z from 'zod';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl?: string;
  roles: string[];
}

export const UserSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  avatarUrl: z.string().optional(),
  roles: z.array(z.string()),
});

export type Role = 'user1' | 'user2' | 'admin';

export interface AvailableUser {
  id: number;
  label: string;
  value: Role;
  icon: React.ElementType;
}
