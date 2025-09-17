import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Container, Box } from '@mui/material';

export default function DefaultLayout() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar />
      <Container maxWidth="xl" sx={{ flex: 1, py: 2 }}>
        <Outlet /> {/* 👈 React Router injects the child route here */}
      </Container>
      <Footer />
    </Box>
  );
}
