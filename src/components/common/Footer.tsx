import { Box, Container, IconButton, Typography } from '@mui/material';
import { footerIcons } from '../../config/footerIcons';

export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          minWidth: '100vw',
          mt: 'auto',
          alignItems: 'center',
          bgcolor: 'background.paper',
          boxShadow: 2,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            my: 1,
          }}
        >
          <Typography variant="caption" gutterBottom>
            © 2025 Adam Huynh. All rights reserved.
          </Typography>
          <Box>
            {footerIcons.map(({ icon: Icon, label, url }) => (
              <IconButton color="inherit" key={label} href={url}>
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};
