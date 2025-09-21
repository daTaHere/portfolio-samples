import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export const MainNavMenu = () => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
      <Button color="inherit" size="large" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" size="large" component={Link} to="/view">
        Dashboard
      </Button>
      <Button color="inherit" size="large" component={Link} to="/login">
        Login
      </Button>
      <Button color="inherit" size="large" component={Link} to="/contact">
        Contact Us
      </Button>
    </Box>
  );
};
