import type { User } from './user';

export interface Notification {
  id: number;
  read: boolean;
  recipient: User;
  sender: string;
  image: string;
  date: string;
  time: string;
  message: string;
}
