import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTextField } from '../components/FormTextField';

// ✅ Zod schema
const contactUsSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

type ContactUsFormData = z.infer<typeof contactUsSchema>;

const ContactForm: React.FC = () => {
  const methods = useForm<ContactUsFormData>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  const onSubmit = (data: ContactUsFormData) => {
    console.log('Form Data:', data);
    // TODO: API call
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          {/* First Name */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormTextField name="firstName" label="First Name" required />
            {/* <TextField
              fullWidth
              label="First Name"
              aria-label="First name"
              {...register('firstName')}
              error={!!errors.firstName}
              // helperText={errors.firstName?.message}
              sx={{ bgcolor: 'white' }}
              required
              slotProps={{
                inputLabel: {
                  sx: {
                    '& .MuiFormLabel-asterisk': {
                      color: 'red',
                    },
                  },
                },
              }}
              //        slotProps={{
              //   inputLabel: {
              //     sx: {
              //       '& .MuiFormLabel-asterisk': {
              //         color: 'red',
              //       },
              //     },
              //   },
              // }}
            /> */}
          </Grid>

          {/* Last Name */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormTextField name="lastName" label="Last Name" required />
            {/* <TextField
              fullWidth
              label="Last Name"
              aria-label="Last name"
              {...register('lastName')}
              error={!!errors.lastName}
              // helperText={errors.lastName?.message}
              sx={{ bgcolor: 'white' }}
              required
            /> */}
          </Grid>

          {/* Email */}
          <Grid size={12}>
            <FormTextField name="email" label="Email" required />
            {/* <TextField
              fullWidth
              label="Email"
              type="email"
              aria-label="Email address"
              {...register('email')}
              error={!!errors.email}
              // helperText={errors.email?.message}
              sx={{ bgcolor: 'white' }}
              required
            /> */}
          </Grid>

          {/* Subject */}
          <Grid size={12}>
            <FormTextField name="subject" label="Subject" />
            {/* <TextField
              fullWidth
              label="Subject"
              aria-label="Message subject"
              {...register('subject')}
              error={!!errors.subject}
              // helperText={errors.subject?.message}
              sx={{ bgcolor: 'white' }}
              required
            /> */}
          </Grid>

          {/* Message */}
          <Grid size={12}>
            <FormTextField
              name="message"
              label="Message"
              required
              multiline
              rows={4}
            />
            {/* <TextField
              fullWidth
              label="Message"
              aria-label="Message content"
              multiline
              rows={4}
              {...register('message')}
              error={!!errors.message}
              // helperText={errors.message?.message}
              sx={{ bgcolor: 'white' }}
              required
            /> */}
          </Grid>

          {/* Submit */}
          <Grid size={12} display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained" color="primary">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
