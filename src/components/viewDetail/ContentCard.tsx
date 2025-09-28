import {
  Typography,
  Avatar,
  CardContent,
  Stack,
  Container,
} from '@mui/material';
import type { ViewData } from '../../pages/ViewDetails';
import formatUtcHelper from '../../utils/formatUtcHelper';

type ContentCardProps = {
  viewData: ViewData;
};

// export const formatUTCDate = (utcDate: string) => {
//   return new Intl.DateTimeFormat('en-US', {
//     year: 'numeric',
//     month: 'short',
//   }).format(new Date(utcDate));
// };

export const ContentCard: React.FC<ContentCardProps> = ({ viewData }) => {
  return (
    <Container>
      <CardContent>
        <Typography variant="h5" textAlign="center" gutterBottom>
          {viewData.name}
        </Typography>

        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
          &ldquo;{viewData.story}&rdquo;
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" mt={3}>
          <Avatar
            src={viewData.createdBy.avatarUrl}
            alt={`${viewData.createdBy.firstName} ${viewData.createdBy.lastName}`}
            sx={{ width: 50, height: 50 }}
          />
          <Stack>
            <Typography variant="caption">
              <strong>Author:</strong>{' '}
              {`${viewData.createdBy.firstName} ${viewData.createdBy.lastName}`}
            </Typography>
            <Typography variant="caption">
              <strong>Published:</strong>{' '}
              {formatUtcHelper(viewData.datePublished)}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Container>
  );
};
