export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl?: string;
  roles: string[];
}
export type Role = 'user1' | 'user2' | 'admin' | 'borrower' | 'merchant';

export interface AvailableUser {
  id: number;
  label: string;
  value: Role;
  icon: React.ElementType;
}
