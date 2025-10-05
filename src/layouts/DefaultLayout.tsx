import { Outlet } from 'react-router-dom';
import { Footer, NavBar } from '../components/common';
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
