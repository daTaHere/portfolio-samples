/* 
  Contact Us Form component:
  - Form state manage via React-Form-Hooks
  - Input Validation via zod
*/

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Grid } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { FormTextField } from '../../components/common/FormTextField';

// ✅ Zod schema
const contactUsSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string(),
  message: z.string().min(1, 'Message is required'),
});

type ContactUsFormData = z.infer<typeof contactUsSchema>;

export const ContactForm = () => {
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
          <Grid
            size={{ xs: 12, sm: 6 }}
            // sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <FormTextField
              name="firstName"
              label="First Name"
              isRequired={true}
            />
          </Grid>
          {/* Last Name */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormTextField
              name="lastName"
              label="Last Name"
              isRequired={true}
            />
          </Grid>
          {/* Email */}
          <Grid size={12}>
            <FormTextField name="email" label="Email" isRequired={true} />
          </Grid>

          {/* Subject */}
          <Grid size={12}>
            <FormTextField name="subject" label="Subject" />
          </Grid>
          {/* Message */}
          <Grid size={12}>
            <FormTextField
              name="message"
              label="Message"
              isRequired={true}
              multiline
              rows={4}
            />
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
