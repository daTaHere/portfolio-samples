import { mockPost } from '../data/mockPost';
import type { Post } from '../types/post';

export const getPosts = async (
  page: number
): Promise<{
  totalPages: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
  data: Post[];
}> => {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 200));

  const pageData = mockPost.pages.find((p) => p.page === page + 1);

  if (!pageData) {
    throw new Error(`Page ${page} not found`);
  }

  return {
    totalPages: mockPost.totalPages,
    ...pageData,
  };
};
