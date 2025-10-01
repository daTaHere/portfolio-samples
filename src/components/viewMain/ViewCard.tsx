import {
  Typography,
  Badge,
  Card,
  CardMedia,
  Divider,
  CardContent,
  CardActions,
  Box,
  Avatar,
  Stack,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import type { Post } from '../../types/post';
import { useAuthContext } from '../../context/AuthContext';
import { useTheme } from '@mui/material/styles';

type ViewCardProps = {
  postData: Post;
};

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  maxWidth: 345,
  margin: '0 auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.2s',
  overflow: 'visible',
  // Gradient hover wrapper
  '&:hover::before': {
    content: '""',
    position: 'absolute',
    inset: -8,
    zIndex: -1,
    borderRadius: 'inherit',
    background: theme.effect.hoverGlow[theme.palette.mode],
    filter: 'blur(5px)',
    opacity: 0.55,
    transition: 'opacity 0.3s, transform 0.3s, box-shadow 0.3s',
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[6],
  },
}));

export const ViewCard: React.FC<ViewCardProps> = ({ postData }) => {
  const { user } = useAuthContext();
  const theme = useTheme();
  const canDelete: boolean = postData.publish;
  const canEdit: boolean = user?.id === postData.author?.id;
  const isAuthor: boolean = user?.roles.includes('admin') ? true : false;

  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
      sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}
    >
      <Box>
        <StyledCard>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <CardMedia
              component="img"
              height={200}
              image={postData.media.mainImg}
              alt={postData.title}
              sx={{ cursor: 'pointer', objectFit: 'fill', p: 1 }}
              onClick={() => console.log(`Clicked card ${postData.id}`)}
            />
            {/* Overlay Badge/Chip */}
            {isAuthor && canDelete && (
              <Badge
                badgeContent="Published"
                sx={{
                  position: 'absolute',
                  top: 18,
                  right: 55,
                  '& .MuiBadge-badge': {
                    fontSize: theme.typography.caption,
                    fontWeight: 'bold',
                    p: 1,
                    borderRadius: '6px',
                    bgcolor: theme.palette.primary['light'],
                    color: theme.palette.common.white,
                  },
                }}
              />
            )}
          </Box>
          <CardContent sx={{ maxHeight: 200 }}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              {postData.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ px: 1 }}>
              {postData.content.substring(0, 55) + '...'}
            </Typography>
          </CardContent>

          <CardContent>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                src={postData.author.avatarUrl}
                alt={postData.author.email}
              />
              <Stack>
                <Stack direction="row" spacing={1}>
                  <Typography variant="caption" fontWeight="bold">
                    Author:
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Datahere
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography variant="caption" fontWeight="bold">
                    Published:
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    allDay
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
          {/* Conditional render Action section base on role */}
          {(isAuthor || canEdit) && (
            <>
              <Divider
                variant="middle"
                sx={{
                  bgcolor: theme.palette.background.default,
                }}
              />
              <CardActions
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  px: 1.5,
                }}
              >
                {canDelete ? (
                  <DeleteOutlineIcon color="primary" fontSize="large" />
                ) : (
                  <AddCircleOutlineTwoToneIcon
                    color="secondary"
                    fontSize="large"
                  />
                )}
                {canEdit && <ModeEditOutlineOutlinedIcon fontSize="large" />}
              </CardActions>
            </>
          )}
        </StyledCard>
      </Box>
    </Grid>
  );
};
