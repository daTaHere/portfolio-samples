/**
 Custom React Query hook for fetching a user by ID.
 Uses caching and stale-time to optimize repeated requests.
 Keeps data fetching logic out of components for cleaner UI code.

 For prod we would want to fetch the session cookie in from browser.
 The sesseion cookie should be index to ensure quick lookup and 
 checked if session is valid or has expired.
*/

import { useQuery } from '@tanstack/react-query';
import { getUserById } from '../../services/userServices';

export const useUserQuery = (id: number, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(id),
    enabled, // 🔑 prevents auto-fetch until login
    staleTime: 1000 * 60 * 5, // cache for 5 mins
  });
};
