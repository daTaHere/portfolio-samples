import { Typography, Button, Container } from '@mui/material';
import { theme } from '../theme/defaultTheme';
// import { ThemeSelector } from '../components/themeSelector';

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" color="secondary" sx={{ textAlign: 'center' }}>
        Welcome to the Home Page
      </Typography>
      {/* <ThemeSelector /> */}
    </Container>
  );
}
