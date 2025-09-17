import { Container, Typography } from '@mui/material';

const LandingPage = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Site
      </Typography>
      <Typography variant="body1">This is the landing page.</Typography>
    </Container>
  );
};

export default LandingPage;
