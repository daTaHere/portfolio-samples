// import { Grid, Container } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { Carousel, ContentCard, VideoPlayer } from '../components/viewDetail';

// // Types (adapt these if you have them defined elsewhere)
// export interface Author {
//   avatarUrl: string;
//   firstName: string;
//   lastName: string;
// }

// export interface Media {
//   images: {
//     slides: string[];
//   };
//   videoUrl?: string;
// }

// export interface ViewData {
//   name: string;
//   story: string;
//   createdBy: Author;
//   datePublished: string;
//   mediaId: Media;
// }

// const payload = {
//   name: 'The Amazing Story',
//   story:
//     'Once upon a time, in a faraway land, a developer built an amazing React + TypeScript app...',
//   datePublished: '2025-09-27T12:00:00Z',
//   createdBy: {
//     firstName: 'Data',
//     lastName: 'Huynh',
//     avatarUrl: 'https://i.pravatar.cc/150?img=3',
//   },
//   mediaId: {
//     images: {
//       slides: [
//         'https://via.placeholder.com/800x400?text=Slide+1',
//         'https://via.placeholder.com/800x400?text=Slide+2',
//         'https://via.placeholder.com/800x400?text=Slide+3',
//       ],
//     },
//     videoUrl: 'https://www.youtube.com/watch?v=jHm_ZxLTB40',
//   },
// };

// const ViewDetails = () => {
//   const { state } = useLocation();
//   const DetailedData = state ? (state.payload as ViewData) : payload;

//   return (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       {/* Top section: carousel + story content */}
//       <Grid container spacing={4}>
//         {/* Left column: images */}
//         <Grid size={{ xs: 12, sm: 6 }}>
//           <Carousel />
//         </Grid>
//         {/* Right column: story + author info */}
//         <Grid size={{ xs: 12, sm: 6 }} sx={{ alignContent: 'center' }}>
//           <ContentCard viewData={DetailedData} />
//         </Grid>
//       </Grid>

//       {/* Video section */}
//       <Grid container justifyContent="center" sx={{ mt: 10 }}>
//         <Grid size={{ xs: 12, sm: 8 }}>
//           <VideoPlayer media={DetailedData} />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ViewDetails;

import { Grid, Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { usePostQuery } from '../hooks/post/usePostQuery';
import { Carousel, ContentCard, VideoPlayer } from '../components/viewDetail';

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
