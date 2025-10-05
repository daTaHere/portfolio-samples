// src/hooks/useUserQuery.ts
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
