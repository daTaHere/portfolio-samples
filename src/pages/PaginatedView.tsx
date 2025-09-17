import { Typography, Container } from '@mui/material';

function PaginatedView() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      {' '}
      <Typography variant="h4">Dashboard</Typography>
    </Container>
  );
}

export default PaginatedView;
