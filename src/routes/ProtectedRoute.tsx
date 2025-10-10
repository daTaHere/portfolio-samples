/*
  PoctectedRoute is a hook used to validate user's log in 
  state and role access. The useAuthContext user state is called
  and evalated. If the user is not logged in or is not assigned a 
  required role. The route will not be accessible and they will 
  be redirected to the main/home page.
*/
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

interface ProtectedRouteProps {
  allowedRoles?: string[];
  children: React.ReactNode;
}

export default function ProtectedRoute({
  allowedRoles,
  children,
}: ProtectedRouteProps) {
  const { user, loading } = useAuthContext();

  if (loading) {return <div>Loading...</div>;}
  if (!user) {return <Navigate to="/" replace />;}
  // If allowedRoles is defined, check if user's roles intersect with allowedRoles.
  // If no match, redirect to home.
  if (allowedRoles && !user.roles.some((role) => allowedRoles.includes(role)))
    {return <Navigate to="/" replace />;}

  return <>{children}</>;
}
