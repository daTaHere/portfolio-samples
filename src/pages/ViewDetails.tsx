/*
  ViewDetails page layout, top section will render the Carousel component
  on the right, and the Post text content on the right. The bottom section 
  will render the video player section.
*/

import { Grid, Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Carousel, ContentCard, VideoPlayer } from '../components/viewDetail';
import { usePostQuery } from '../hooks/post/usePostQuery';

const ViewDetails = () => {
  const { id } = useParams();
  const { data: postData, isLoading, isError } = usePostQuery(Number(id));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Top section: carousel + story content */}
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : isError ? (
        <Typography>Error loading posts</Typography>
      ) : (
        <>
          <Grid container spacing={4}>
            {/* Left column: images */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Carousel mediaData={postData!.data.media.slides} />
            </Grid>
            {/* Right column: story + author info */}
            <Grid size={{ xs: 12, sm: 6 }} sx={{ alignContent: 'center' }}>
              <ContentCard postData={postData!.data} />
            </Grid>
          </Grid>
          {/* Video section */}
          <Grid container justifyContent="center" sx={{ mt: 10 }}>
            <Grid size={{ xs: 12, sm: 8 }}>
              <VideoPlayer mediaData={postData!.data.media.video} />
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default ViewDetails;
