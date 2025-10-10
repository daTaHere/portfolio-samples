/*
  Custom React Query hook for fetching paginated posts.
  Demonstrates use of query keys for cache isolation per page.
  Stale time ensures that data refreshes after a defined interval.
*/

import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getPostPage } from '../../services/postServices';
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
    queryFn: () => getPostPage(page),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });
