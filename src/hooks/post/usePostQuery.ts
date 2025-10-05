import { useQuery } from '@tanstack/react-query';
import { getPostById } from '../../services/postServices';
import type { Post } from '../../types/post';

type PostData = {
  data: Post;
};

export const usePostQuery = (postId: number) =>
  useQuery<PostData>({
    queryKey: ['post', postId],
    queryFn: () => getPostById(postId),
    staleTime: 1000 * 60 * 5,
  });
