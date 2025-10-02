// import { createContext, useContext, useState, useEffect } from 'react';
// import type { User } from '../types/user';
// import { mockUsers } from '../data/mockUsers';

// type AuthContextType = {
//   user: User | null;
//   loading: boolean;
//   login: (userId: number) => void;
//   logout: () => void;
// };
// // ---- Context ----
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // ---- Provider ----
// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   // Fake check on mount (replace with API call to /me or token check)
//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     setLoading(false);
//   }, []);

//   //   Simulate login
//   const login = (id: number) => {
//     setLoading(true);

//     // Replace this with API call
//     // await new Promise((res) => setTimeout(res, 1000));
//     const currentUser = mockUsers.filter((user) => user.id === id)[0];
//     if (currentUser) {
//       const loggedInUser = { ...currentUser, isLoggedIn: true };
//       setUser(loggedInUser);
//     }
//     localStorage.setItem('user', JSON.stringify(currentUser));
//     setLoading(false);
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // ---- Hook ----
// export const useAuthContext = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used inside an AuthProvider');
//   }
//   return context;
// };

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
