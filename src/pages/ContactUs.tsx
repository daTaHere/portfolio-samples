import { Box, Typography, Link, Grid } from '@mui/material';
import ContactForm from '../components/ContactForm';
import Phone from '../assets/phone icon.png';

function ContactUs() {
  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ p: { xs: 3, md: 5, lg: 12, xl: 22 }, alignContent: 'center' }}
        >
          <Box
            component="img"
            src={Phone}
            alt=""
            sx={{ maxhight: 150, maxWidth: 150 }}
          />
          <Box sx={{ mb: 3 }}>
            <Typography variant="h3" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="h6" gutterBottom>
              Have questions and prefer to talk with one of our representatives?
              Send inquires to
            </Typography>
          </Box>

          <Typography variant="h5" component={Link}>
            info@monefi.com
          </Typography>
          <Box sx={{ my: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Hours of Operation:
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Monday-Friday
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              7:30am - 5:00pm MST
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            p: { xs: 3, md: 5, lg: 12, xl: 22 },
            alignContent: 'center',
            bgcolor: 'grey.200',
          }}
        >
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
}
export default ContactUs;
