import { createContext, useContext, useState, useEffect } from 'react';
import { useUserQuery } from '../hooks/users/useUserQuery';
import type { User } from '../types/user';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (id: number) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<number | null>(null);

  // Run query only if userId is set (after login)
  const { data: user, isLoading } = useUserQuery(userId ?? -1, !!userId);

  // Restore login from localStorage (optional)
  useEffect(() => {
    const storedId = localStorage.getItem('userId');
    if (storedId) {
      setUserId(parseInt(storedId, 10));
    }
  }, []);

  const login = (id: number) => {
    setUserId(id);
    localStorage.setItem('userId', id.toString());
  };

  const logout = () => {
    setUserId(null);
    localStorage.removeItem('userId');
  };

  return (
    <AuthContext.Provider
      value={{ user: user ?? null, loading: isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider');
  }
  return context;
};
