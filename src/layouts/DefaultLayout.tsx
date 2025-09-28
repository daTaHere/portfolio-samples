import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';
import { NavBar } from '../components/common/NavBar';
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
      <NavBar />
      <Outlet />
      <Footer />
    </Box>
  );
}
