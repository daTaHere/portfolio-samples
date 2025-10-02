import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getPosts } from '../../services/postServices';
import type { Post } from '../../types/post';

type PostPage = {
  page: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
  data: Post[];
};

export const usePostsQuery = (page: number) =>
  useQuery<PostPage>({
    queryKey: ['posts', page],
    queryFn: () => getPosts(page),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });
