/*
  The CardContent component renders the user's complete
  Post Text content with Rich editing ie Bold, Underline, Italic, and 
  bullet point list.
*/

import {
  Typography,
  Avatar,
  CardContent,
  Stack,
  Container,
} from '@mui/material';
import type { Post } from '../../types/post';
import formatUtcHelper from '../../utils/formatUtcHelper';

type ContentCardProps = {
  postData: Post;
};

export const ContentCard: React.FC<ContentCardProps> = ({ postData }) => {
  return (
    <Container>
      <CardContent>
        <Typography variant="h5" textAlign="center" gutterBottom>
          {postData.title}
        </Typography>

        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
          &ldquo;{postData.content}&rdquo;
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" mt={3}>
          <Avatar
            src={postData.author.avatarUrl}
            alt={`Author Avatar`}
            sx={{ width: 50, height: 50 }}
          />
          <Stack>
            <Typography variant="caption">
              <strong>Author:</strong>{' '}
              {`${postData.author.firstName} ${postData.author.lastName}`}
            </Typography>
            <Typography variant="caption">
              <strong>Published:</strong>{' '}
              {formatUtcHelper(postData.datePublished || '')}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Container>
  );
};
