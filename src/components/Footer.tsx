import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: 'auto',
        textAlign: 'center',
        bgcolor: 'grey.200',
        minWidth: '100vw',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2">
          © {new Date().getFullYear()} My App
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
