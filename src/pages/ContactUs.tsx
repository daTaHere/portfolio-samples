import { Box, Typography, Link, Grid, Container } from '@mui/material';
import ContactForm from '../components/ContactForm';
import Phone from '../assets/phone icon.png';

function ContactUs() {
  return (
    <Box sx={{ display: 'flex', flexGrow: 1, minHeight: '100vh' }}>
      <Grid container spacing={4}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ p: { xs: 3, md: 5, lg: 12 }, alignContent: 'center' }}
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
            p: { xs: 3, md: 5, lg: 12 },
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
// import { Box, Typography, Link, Grid, Container } from '@mui/material';
// import ContactForm from '../components/ContactForm';
// import Phone from '../assets/phone icon.png';

// function ContactUs() {
//   return (
//     <Box sx={{ flex: 1 }}>
//       <Grid container spacing={4}>
//         {/* Left Side: Contact Info */}
//         <Grid size={{ xs: 12, md: 6 }}>
//           <Box
//             component="img"
//             src={Phone}
//             alt="Phone icon"
//             sx={{ maxHeight: 120, maxWidth: 120, mb: 3 }}
//           />

//           <Typography variant="h4" component="h2" gutterBottom>
//             Contact Us
//           </Typography>

//           <Typography variant="body1" gutterBottom>
//             Have questions and prefer to talk with one of our representatives?
//             Send inquiries to
//           </Typography>

//           <Typography
//             variant="h6"
//             component={Link}
//             href="mailto:info@monefi.com"
//             underline="hover"
//           >
//             info@monefi.com
//           </Typography>

//           <Box sx={{ mt: 3 }}>
//             <Typography variant="subtitle1">Hours of Operation:</Typography>
//             <Typography variant="body2">Monday - Friday</Typography>
//             <Typography variant="body2">7:30am - 5:00pm MST</Typography>
//           </Box>
//         </Grid>

//         {/* Right Side: Contact Form */}
//         <Grid size={{ xs: 12, md: 6 }}>
//           <Box
//             sx={{ p: { xs: 2, md: 4 }, bgcolor: 'grey.100', borderRadius: 2 }}
//           >
//             <ContactForm />
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default ContactUs;
