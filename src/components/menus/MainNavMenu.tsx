/*
  The MainNavMenu maps the navLink and renders Link buttons in
  to NavBar component.
*/

import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { navLinks } from '../../config/navLinks';

export const MainNavMenu = () => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
      {navLinks.map((link) => (
        <Button
          key={link.path}
          color="inherit"
          size="large"
          component={Link}
          to={link.path}
        >
          {link.label}
        </Button>
      ))}
    </Box>
  );
};
