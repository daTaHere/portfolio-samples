import type { User } from './user';

export interface ViewCard {
  id: number;
  image: string;
  header: string;
  title: string;
  content: string;
  author?: User;
  publish: boolean;
}
