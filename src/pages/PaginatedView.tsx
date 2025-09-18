import { Typography, Container } from '@mui/material';

function PaginatedView() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexGrow: 1,
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
