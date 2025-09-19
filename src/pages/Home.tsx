import { Typography, Button, Container } from '@mui/material';
import { ThemeSelector } from '../components/themeSelector';

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Welcome to the Home Page
      </Typography>
      <ThemeSelector />
    </Container>
  );
}
