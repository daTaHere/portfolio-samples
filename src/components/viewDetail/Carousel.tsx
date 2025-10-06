/*
  Carousel component renders a main image above thumbnail 
  images that are use to navigate through slide images. The 
  selected image will be displayed and expanded in the main image
  section.
*/

import { memo } from 'react';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import { Box, CardMedia, GlobalStyles } from '@mui/material';

type CarouselProps = {
  mediaData: string[];
};

export const Carousel: React.FC<CarouselProps> = memo(({ mediaData }) => {
  const settings: Settings = {
    customPaging: (i: number) => (
      <CardMedia
        component="img"
        image={mediaData[i]}
        sx={{
          minHeight: '100px',
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

  console.log(mediaData);

  return (
    <Box>
      {/* Scoped CSS for thumbnails */}
      <GlobalStyles
        styles={{
          '.slider-container .slick-dots.slick-thumb': {
            position: 'relative', // from absolute -> relativ
          },
          '.slider-container .slick-dots.slick-thumb li': {
            width: 'calc(70% / 3 - 8px)', // if you want exactly 3 per row
            height: 'auto', // keep aspect ratio
            marginLeft: '15px',
            marginRight: '15px',
          },
          '.slider-container .slick-dots.slick-thumb li im': {
            padding: 0,
          },
        }}
      />

      <Box id="kdk" className="slider-container">
        <Slider {...settings}>
          {mediaData.map((slide) => (
            <CardMedia
              key={mediaData.indexOf(slide)}
              component="img"
              image={slide}
              sx={{
                height: 500,
                objectFit: 'contain',
              }}
            />
          ))}
        </Slider>
      </Box>
    </Box>
  );
});
