import { useEffect, useState, useCallback } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  Stack,
  MenuItem,
  useTheme,
  Select,
  FormControl,
  Container,
} from '@mui/material';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import DOMPurify from 'dompurify';

import * as z from 'zod';
import { FormTextField } from '../components/FormTextField';
import { useAuthContext } from '../context/AuthContext';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import RichEditor from '../components/RichEditor';
import { theme } from '../theme/defaultTheme';

interface ViewForm {
  name: string;
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
  name: z.string().min(1, 'Title is required'),
  email: z.string().email('Invalid email'),
  title: z.string().min(2).max(20),
  content: z.string().min(1, 'Story is required'),
  selectedImage: z.enum(['mainImage', 'slide1', 'slide2', 'slide3', '']),
  mainImage: z.instanceof(File).or(z.string()).nullable(),
  slide1: z.instanceof(File).or(z.string()).nullable(),
  slide2: z.instanceof(File).or(z.string()).nullable(),
  slide3: z.instanceof(File).or(z.string()).nullable(),
});

type ViewFormData = z.infer<typeof viewFormSchema>;

const DropzoneComponent: React.FC<{ onFileSelect: (file: File) => void }> = ({
  onFileSelect,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length) onFileSelect(acceptedFiles[0]);
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    multiple: false,
    onDrop,
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed grey',
        p: 2,
        textAlign: 'center',
        borderRadius: 1,
        cursor: 'pointer',
        bgcolor: 'white',
      }}
    >
      <input {...getInputProps()} />
      <Typography sx={{ color: theme.palette.text.secondary }}>
        {isDragActive ? 'Release to drop the file here' : 'Upload Image'}
      </Typography>
      <CloudUploadOutlinedIcon color="secondary" fontSize="large" />
    </Box>
  );
};

const EditView: React.FC = () => {
  const navigate = useNavigate();
  const { state, pathname } = useLocation();
  const { user } = useAuthContext();
  const theme = useTheme();

  const DEFAULT_DATA: ViewForm = {
    name: '',
    title: '',
    email: '',
    content: '',
    selectedImage: '',
    mainImage: null,
    slide1: null,
    slide2: null,
    slide3: null,
  };

  const [viewData, setViewData] = useState<ViewForm>(DEFAULT_DATA);

  const methods = useForm<ViewForm>({
    resolver: zodResolver(viewFormSchema),
    defaultValues: DEFAULT_DATA,
  });

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = methods;

  const storyContent = watch('content');

  useEffect(() => {
    if (!user) navigate('/');
    if (pathname.includes('new') && user) {
      setViewData({ ...DEFAULT_DATA, email: user.email });
    } else if (state?.payload) {
      const currentView = state.payload;
      const [slide1, slide2, slide3] = currentView.mediaId.images.slides || [];
      setViewData({
        name: currentView.name,
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
  }, [user, navigate, pathname, state]);

  const onSubmit: SubmitHandler<ViewFormData> = (values) => {
    const sanitizedStory = DOMPurify.sanitize(values.content);
    console.log({ ...values, story: sanitizedStory });
  };

  const handleFileSelect = (file: File) => {
    const selectedImage = watch('selectedImage');
    if (!selectedImage) return;
    const previewUrl = URL.createObjectURL(file);
    setValue(selectedImage, previewUrl);
    setViewData((prev) => ({ ...prev, [selectedImage]: previewUrl }));
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={4}>
            {/* Form Column */}
            <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
              <Stack spacing={2}>
                <Typography variant="h5" textAlign="center">
                  Edit Story
                </Typography>
                <FormTextField name="title" label="Title" />
                <FormTextField name="email" label="Email" />

                <Controller
                  name="content"
                  control={control}
                  render={({ field }) => (
                    <RichEditor
                      value={field.value}
                      onChange={(html) => field.onChange(html)}
                    />
                  )}
                />
                {errors.content && (
                  <Typography color="error" variant="caption">
                    {errors.content.message}
                  </Typography>
                )}

                <Controller
                  name="selectedImage"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <Select {...field} displayEmpty>
                        <MenuItem disabled value="">
                          <em>Upload Image for</em>
                        </MenuItem>
                        <MenuItem value="mainImage">Main</MenuItem>
                        <MenuItem value="slide1">Slide 1</MenuItem>
                        <MenuItem value="slide2">Slide 2</MenuItem>
                        <MenuItem value="slide3">Slide 3</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />

                <DropzoneComponent onFileSelect={handleFileSelect} />
              </Stack>
              <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Submit
              </Button>
            </Grid>

            {/* Preview Column */}
            <Grid size={{ xs: 12, sm: 6 }} sx={{ minWidth: 0 }}>
              <Typography variant="h5" textAlign="center" gutterBottom>
                Preview
              </Typography>
              <Card sx={{ p: 3, borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  height={300}
                  image={(viewData.mainImage as string) ?? '/users/user-0.jpg'}
                  alt={`${viewData.name}-main-img`}
                  sx={{ borderRadius: 1, objectFit: 'cover' }}
                />
                <CardContent
                  sx={{
                    height: 200,
                    overflowY: 'auto',
                    wordBreak: 'break-word',
                  }}
                >
                  <Typography variant="h6">
                    {viewData.name || 'TITLE'}
                  </Typography>
                  <Typography
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        storyContent || 'Tell us your Journey?'
                      ),
                    }}
                  />
                </CardContent>
                <CardActions>
                  <Stack direction="row" spacing={1} justifyContent="center">
                    {['slide1', 'slide2', 'slide3'].map((slide) => (
                      <Box key={slide} textAlign="center">
                        <Typography variant="caption">
                          {slide.toUpperCase()}
                        </Typography>
                        <Avatar
                          variant="rounded"
                          src={
                            (viewData[slide as keyof ViewForm] as
                              | string
                              | undefined) ?? '/users/user-0.jpg'
                          }
                          sx={{ width: 85, height: 85, mt: 1 }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Container>
  );
};

export default EditView;
