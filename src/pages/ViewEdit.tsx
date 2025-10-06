/*
  The ViewEdit page renders the Edit page layout with the form section
  on the left and the preview section one the right.
*/

import { useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { ViewForm, ViewPreview } from '../components/viewEdit';
import { UserSchema, type User } from '../types/user';
import DOMPurify from 'dompurify';
import * as z from 'zod';

export interface ViewInput {
  author: User;
  email: string;
  title: string;
  content: string;
  selectedImage: 'mainImage' | 'slide1' | 'slide2' | 'slide3' | '';
  mainImage: File | string | null;
  slide1: File | string | null;
  slide2: File | string | null;
  slide3: File | string | null;
}

const viewFormSchema = z.object({
  author: UserSchema,
  email: z.string().email('Invalid email'),
  title: z.string().min(2).max(20),
  content: z.string().min(1, 'Story is required'),
  selectedImage: z.enum(['mainImage', 'slide1', 'slide2', 'slide3', '']),
  mainImage: z.instanceof(File).or(z.string()).nullable(),
  slide1: z.instanceof(File).or(z.string()).nullable(),
  slide2: z.instanceof(File).or(z.string()).nullable(),
  slide3: z.instanceof(File).or(z.string()).nullable(),
});

export type ViewFormData = z.infer<typeof viewFormSchema>;

const View = () => {
  const navigate = useNavigate();
  const { state, pathname } = useLocation();
  const { user } = useAuthContext();

  const DEFAULT_DATA: ViewFormData = {
    author: user as User,
    title: '',
    email: '',
    content: '',
    selectedImage: '',
    mainImage: null,
    slide1: null,
    slide2: null,
    slide3: null,
  };

  const methods = useForm<ViewFormData>({
    resolver: zodResolver(viewFormSchema),
    defaultValues: DEFAULT_DATA,
  });

  const { handleSubmit, setValue, watch, reset } = methods;

  // Watch everything for preview
  const watched = watch();
  const { title, content, mainImage, slide1, slide2, slide3 } = watched;

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }

    if (pathname.includes('new') && user) {
      reset({ ...DEFAULT_DATA, email: user.email });
    } else if (state?.payload) {
      const currentView = state.payload;
      const [slide1, slide2, slide3] = currentView.mediaId.images.slides || [];
      reset({
        author: user,
        content: currentView.story,
        title: currentView.title,
        email: currentView.createdBy.email,
        selectedImage: '',
        mainImage: currentView.mediaId.images.main,
        slide1,
        slide2,
        slide3,
      });
    }
  }, [user, navigate, pathname, state, reset]);

  const onSubmit: SubmitHandler<ViewFormData> = (values) => {
    const sanitizedStory = DOMPurify.sanitize(values.content);
    console.log({ ...values, story: sanitizedStory });
  };

  const handleFileSelect = (file: File) => {
    const selectedImage = watched.selectedImage;
    if (!selectedImage) return;
    const previewUrl = URL.createObjectURL(file);
    setValue(selectedImage, previewUrl);
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <FormProvider {...methods}>
        <Grid container spacing={4}>
          {/* Form Column */}
          <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
            <ViewForm
              handleFileSelect={handleFileSelect}
              onSubmit={handleSubmit(onSubmit)}
            />
          </Grid>

          {/* Preview Column */}
          <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
            <ViewPreview
              title={title}
              content={content}
              mainImage={mainImage}
              slide1={slide1}
              slide2={slide2}
              slide3={slide3}
            />
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
};

export default View;
