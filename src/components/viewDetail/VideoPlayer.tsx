import { Box } from '@mui/material';
import ReactPlayer from 'react-player';

type VideoPlayerProps = {
  mediaData: string;
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ mediaData }) => {
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
        src={mediaData}
        controls
        width="95%"
        height="95%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </Box>
  );
};
