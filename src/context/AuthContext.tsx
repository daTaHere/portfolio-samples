import { createContext, useContext, useState, useEffect } from 'react';
import Avator1 from '../assets/Avatar/avatar-1.jpg';
import Avator2 from '../assets/Avatar/avatar-2.jpg';
import Avator3 from '../assets/Avatar/avatar-3.jpg';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl?: string;
  roles: string[];
}

const allUsers: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    avatarUrl: Avator1,
    roles: [],
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@email.com',
    avatarUrl: Avator2,
    roles: ['customer'],
  },
  {
    id: 3,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@email.com',
    avatarUrl: Avator3,
    roles: ['admin'],
  },
  {
    id: 4,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@email.com',
    avatarUrl: Avator2,
    roles: ['borrower'],
  },
  {
    id: 4,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@email.com',
    avatarUrl: Avator1,
    roles: ['Merchant'],
  },
];

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
    const storedUser = sessionStorage.getItem('user');
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
    const currentUser = allUsers.filter((user) => user.id === id)[0];
    if (currentUser) {
      const loggedInUser = { ...currentUser, isLoggedIn: true };
      setUser(loggedInUser);
    }
    // sessionStorage.setItem('user', JSON.stringify(currentUser));
    setLoading(false);
  };

  const logout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
    console.log('hit');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ---- Hook ----
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider');
  }
  return context;
};
