import {
  Typography,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  Box,
  Avatar,
  Stack,
  Grid,
} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import type { ViewCard } from '../types/ViewCard';
import { useAuthContext } from '../context/AuthContext';

type ViewCardProps = {
  cardData: ViewCard;
};

// Gradient hover wrapper
const CardWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  overflow: 'visible',
  '&:hover::before': {
    content: '""',
    position: 'absolute',
    inset: -5,
    zIndex: -1,
    borderRadius: 'inherit',
    background: theme.effect.hoverGlow[theme.palette.mode],
    filter: 'blur(5px)',
    opacity: 0.55,
    transition: 'opacity 0.3s, transform 0.3s',
    // transform: 'translate3d(0, 0, 0) scale(1)',
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[6],
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  maxWidth: 345,
  margin: '0 auto',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: theme.shadows[3],
  transition: 'transform 0.2s',
}));

export const CardView: React.FC<ViewCardProps> = ({ cardData }) => {
  const { user } = useAuthContext();

  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
      sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}
    >
      <CardWrapper>
        <StyledCard>
          <CardMedia
            component="img"
            height={300}
            image={cardData.image}
            alt={cardData.title}
            sx={{ cursor: 'pointer', objectFit: 'cover' }}
            onClick={() => console.log(`Clicked card ${cardData.id}`)}
          />
          <CardContent>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              {cardData.header}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              // sx={{ fontSize: 'clamp(0.8rem, 1vw + 0.5rem, 1rem)' }}
            >
              {cardData.content}
            </Typography>
          </CardContent>

          <CardContent>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar alt={cardData.header} src={cardData.image} />
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

          {user?.roles.includes('admin') && (
            <CardActions>
              <FormGroup sx={{ flexGrow: 1 }}>
                <FormControlLabel control={<Checkbox />} label="Publish" />
              </FormGroup>
              <Stack direction="row" spacing={1}>
                <DeleteOutlineIcon color="primary" />
                <ModeEditOutlineOutlinedIcon color="primary" />
              </Stack>
            </CardActions>
          )}
        </StyledCard>
      </CardWrapper>
    </Grid>
  );
};
