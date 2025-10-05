import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Stack,
} from '@mui/material';
import DOMPurify from 'dompurify';

type ViewPreviewProps = {
  title: string;
  content: string;
  mainImage: File | string | null;
  slide1: File | string | null;
  slide2: File | string | null;
  slide3: File | string | null;
};

export const ViewPreview: React.FC<ViewPreviewProps> = ({
  title,
  content,
  mainImage,
  slide1,
  slide2,
  slide3,
}) => {
  const slides = [slide1, slide2, slide3];
  return (
    <>
      <Typography variant="h5" textAlign="center" gutterBottom>
        Preview
      </Typography>
      <Card sx={{ p: 3, borderRadius: 3 }}>
        <CardMedia
          component="img"
          height={300}
          image={(mainImage as string) ?? '/users/user-0.jpg'}
          alt={`main-img`}
          sx={{ borderRadius: 1, objectFit: 'cover' }}
        />
        <CardContent
          sx={{
            height: 200,
            overflowY: 'auto',
            wordBreak: 'break-word',
          }}
        >
          <Typography variant="h6">{title || 'TITLE'}</Typography>
          <Typography
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content || 'Tell us your Journey?'),
            }}
          />
        </CardContent>
        <CardActions>
          <Stack direction="row" spacing={1} justifyContent="center">
            {slides.map((slide, index) => (
              <Box key={`slide${index + 1}`} textAlign="center">
                <Typography variant="caption">{`SLIDE ${
                  index + 1
                }`}</Typography>
                <Avatar
                  variant="rounded"
                  src={(slide as string) ?? '/users/user-0.jpg'}
                  sx={{ width: 85, height: 85, mt: 1 }}
                />
              </Box>
            ))}
          </Stack>
        </CardActions>
      </Card>
    </>
  );
};
