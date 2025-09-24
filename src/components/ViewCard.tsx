import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import type { ViewCard } from '../types/ViewCard';

type ViewCardprops = {
  cardData: ViewCard;
};

// Outer wrapper with gradient border on hover
const CardWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  overflow: 'visible', // allow pseudo-element to show outside
  '&:hover::before': {
    content: '""',
    position: 'absolute',
    inset: -4,
    zIndex: -1,
    borderRadius: 'inherit',
    background: theme.effect.hoverGlow[theme.palette.mode],
    filter: 'blur(5px)',
    opacity: 0.55,
    transition: 'opacity 0.3s, transform 0.3s',
    transform: 'translate3d(0, 0, 0) scale(1)',
  },
}));

// Styled card component
const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: 300,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: theme.shadows[3],
  transition: 'transform 0.2s',
}));

export const CardView: React.FC<ViewCardprops> = ({ cardData }) => {
  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 3 }}
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <CardWrapper>
        <StyledCard>
          <CardMedia
            sx={{
              width: '100%',
              minHeight: 300,
              objectFit: 'cover',
              cursor: 'pointer',
              borderImage: 2,
            }}
            image={cardData.image}
            title={cardData.title}
            onClick={() => console.log(`${cardData.id}`)}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardData.header}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {cardData.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </StyledCard>
      </CardWrapper>
    </Grid>
  );
};
