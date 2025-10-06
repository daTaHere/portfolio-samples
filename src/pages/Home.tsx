/*
  This Home page is the template component for all other pages.
  It is the min setup for creating any page

  Future iteration, this page will be the landing page later. It will
  render when user's first visit the app, log out, or visit a unkown/restricted route.
*/
import { Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" color="secondary" sx={{ textAlign: 'center' }}>
        Welcome to the Home Page
      </Typography>
    </Container>
  );
}
