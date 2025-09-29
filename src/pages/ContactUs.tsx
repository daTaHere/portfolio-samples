import { Box, Grid } from '@mui/material';
import { ContactForm, ContactUsContent } from '../components/contactUs';

function ContactUs() {
  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            p: { xs: 3, md: 5, lg: 12, xl: 22 },
            alignContent: 'center',
            bgcolor: 'background.paper',
          }}
        >
          <ContactUsContent />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            p: { xs: 3, md: 5, lg: 12, xl: 22 },
            alignContent: 'center',
          }}
        >
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
}
export default ContactUs;
