import { Box } from '@mui/material';
import ReactPlayer from 'react-player';
import type { ViewData } from '../pages/ViewDetails';

type ViewVideoPlayerProps = {
  media: ViewData;
};

export const ViewVideoPlayer: React.FC<ViewVideoPlayerProps> = ({ media }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        paddingTop: '56.25%', // 16:9 aspect ratio
        borderRadius: 3,
        overflow: 'hidden',
      }}
    >
      <ReactPlayer
        src={
          media.mediaId.videoUrl ??
          'https://www.youtube.com/watch?v=jHm_ZxLTB40'
        }
        controls
        width="95%"
        height="95%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </Box>
  );
};
