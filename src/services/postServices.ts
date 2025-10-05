// Hooks are thin wrappers around one service call that add React Query’s behavior:

// useUserQuery(id) → wraps getUserById

// useUsersQuery() → wraps getUsers

// useCreateUserMutation() → wraps createUser

// useUpdateUserMutation(id) → wraps updateUser

// useDeleteUserMutation(id) → wraps deleteUser

import { mockPostPages } from '../data/mockPostPages';
import { mockPost } from '../data/mockPost';
import type { Post } from '../types/post';

export const getPostPage = async (
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

  const pageData = mockPostPages.pages.find((p) => p.page === page + 1);

  if (!pageData) {
    throw new Error(`Page ${page} not found`);
  }

  return {
    totalPages: mockPostPages.totalPages,
    ...pageData,
  };
};

export const getPostById = async (
  postId: number
): Promise<{
  data: Post;
}> => {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 200));

  const postData = mockPost.find((p) => p.id === postId);

  if (!postData) {
    throw new Error(`Post ${postId} not found`);
  }

  return { data: postData };
};
