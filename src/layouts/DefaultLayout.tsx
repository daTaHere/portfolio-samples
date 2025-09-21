import { Outlet } from 'react-router-dom';
// import { NavBar } from '../components/NavBar';
import Footer from '../components/Footer';
import { NavBarV2 } from '../components/NavBarV2';
import { Box } from '@mui/material';

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
      <NavBarV2 />
      <Outlet />
      <Footer />
    </Box>
  );
}
