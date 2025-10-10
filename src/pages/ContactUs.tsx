/*
  Thie ContactUs is the page layout for the contact us 
  Form and Content components. It divids the Content on the left and 
  From on the right for this page.

  Future iteration, implement a Create/Post request on submit to mock backend. 
*/
import { Box, Grid } from '@mui/material';
import { ContactForm, ContactUsContent } from '../components/contactUs';

const ContactUs = () => {
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
};
export default ContactUs;
