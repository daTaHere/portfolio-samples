import { Outlet } from 'react-router-dom';
import Avatar1 from '../assets/Avatar/avatar-1.jpg';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { NavBarV2 } from '../components/NavBarV2';
import type { User } from '../components/NavBarV2';
import { Box } from '@mui/material';

const currentUser: User = {
  id: 1,
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane.doe@email.com',
  avatarUrl: Avatar1,
  isLoggedIn: false,
  roles: ['admin'],
};
export default function DefaultLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
      }}
    >
      <NavBarV2
        headerstyle="dark"
        currentUser={currentUser}
        login={(id) => console.log('login', id)}
        logout={() => console.log('logout')}
      />
      {/* <NavBar /> */}
      <Outlet /> {/* 👈 React Router injects the child route here */}
      <Footer />
    </Box>
  );
}
