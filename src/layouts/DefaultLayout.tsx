/*
  The DefaulLayout ensure that the page being route to will
  always provide the navBar on top and footer at bottom of 
  the page.
*/

import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Footer, NavBar } from '../components/common';

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
