import { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '../types/user';
import { mockUsers } from '../data/mockUsers';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (userId: number) => void;
  logout: () => void;
};
// ---- Context ----
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ---- Provider ----
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Fake check on mount (replace with API call to /me or token check)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  //   Simulate login
  const login = (id: number) => {
    setLoading(true);

    // Replace this with API call
    // await new Promise((res) => setTimeout(res, 1000));
    const currentUser = mockUsers.filter((user) => user.id === id)[0];
    if (currentUser) {
      const loggedInUser = { ...currentUser, isLoggedIn: true };
      setUser(loggedInUser);
    }
    localStorage.setItem('user', JSON.stringify(currentUser));
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ---- Hook ----
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider');
  }
  return context;
};
