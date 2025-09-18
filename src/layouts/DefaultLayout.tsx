import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
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
      <Outlet /> {/* 👈 React Router injects the child route here */}
      <Footer />
    </Box>
  );
}
