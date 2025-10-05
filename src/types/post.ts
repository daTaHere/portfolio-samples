type Media = {
  mainImg: string;
  slides: string[];
  video: string;
};

type Author = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
};

export interface Post {
  id: number;
  title: string;
  content: string;
  author: Author;
  publish: boolean;
  type: string;
  media: Media;
  datePublished?: string;
}
