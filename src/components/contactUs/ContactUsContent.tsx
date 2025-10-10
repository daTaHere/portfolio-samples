/*
  Contact Us Content section:
  - Display company info ie email, phone number, business hrs
*/

import { Box, Typography, Link } from '@mui/material';
import Phone from '../../assets/phone icon.png';

export const ContactUsContent = () => {
  return (
    <>
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
        info@youremail.com
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
    </>
  );
};
