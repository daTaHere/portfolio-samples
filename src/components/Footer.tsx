import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 2, mt: 'auto', textAlign: 'center', bgcolor: 'grey.200' }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} My App
      </Typography>
    </Box>
  );
}

export default Footer;
