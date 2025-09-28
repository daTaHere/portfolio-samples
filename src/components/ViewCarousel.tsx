import { memo } from 'react';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import { Box, CardMedia, GlobalStyles } from '@mui/material';
import { mockSildes } from '../data/mockSlides';

const slides = [
  { id: 1, src: mockSildes[0] },
  { id: 2, src: mockSildes[1] },
  { id: 3, src: mockSildes[2] },
];

export const ViewCarousel = memo(() => {
  const settings: Settings = {
    customPaging: (i: number) => (
      <CardMedia
        component="img"
        image={mockSildes[i]}
        sx={{
          objectFit: 'contain',
        }}
      />
    ),
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
      {/* Scoped CSS for thumbnails */}
      <GlobalStyles
        styles={{
          '.slider-container .slick-dots.slick-thumb': {
            position: 'relative', // from absolute -> relative
            marginBottom: 3, // small spacing
          },
          '.slider-container .slick-dots.slick-thumb li': {
            width: 'calc(90% / 3 - 8px)', // if you want exactly 3 per row
            height: 'auto', // keep aspect ratio
          },
          '.slider-container .slick-dots.slick-thumb li button': {
            padding: 0,
          },
        }}
      />

      <Box className="slider-container">
        <Slider {...settings}>
          {slides.map((slide) => (
            <CardMedia
              key={slide.id}
              component="img"
              image={slide.src}
              sx={{
                boxShadow: 5,
                borderRadius: 1.5,
                objectFit: 'cover',
              }}
            />
          ))}
        </Slider>
      </Box>
    </Box>
  );
});
