/*
  Post service file, this file contains the raw 
  CRUD HTTP request methods for Post data.
*/

import { mockPost } from '../data/mockPost';
import { mockPostPages } from '../data/mockPostPages';
import type { Post } from '../types/post';

/*
  Fetch a post by ID.
  Abstracted to allow future integration with a real API endpoint.
*/

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

/**
 * Fetch a paginated list of posts.
 * Demonstrates how the service could handle query params for pagination.
 */

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
