// import { createTheme } from '@mui/material/styles';
// import { blueGrey } from '@mui/material/colors';

// const lightPalette = {
//   primary: { main: '#9400ff' },
//   secondary: { main: '#19cb98' },
//   background: {
//     default: 'hsl(0, 0%, 100%)', // light grayish-blue
//     paper: 'hsl(240, 20%, 98%)', // white
//   },
// };

// const darkPalette = {
//   primary: { main: '#19cb98' }, // brighter blue for contrast
//   secondary: { main: '#9400ff' },
//   background: {
//     default: blueGrey[700], // near black
//     paper: blueGrey[900], // dark gray
//   },
//   hoverEffect: 'linear-gradient(180deg, #9b5de5 0%, #f15bb5 100%)',
// };

// // export const typography = {
// const typography = {
//   fontFamily: 'Roboto, Inter, sans-serif',

//   // Heading 1 - Adjusted max size to prevent excessive scaling on larger screens
//   h1: {
//     fontSize: 'clamp(2rem, 6vw + 2rem, 3.5rem)', // Scales fluidly between 2rem and 3.5rem
//     fontWeight: 600,
//     lineHeight: 1.2,
//     letterSpacing: -0.5,
//   },

//   // Heading 2 - Refined scaling for a good balance between mobile and desktop
//   h2: {
//     fontSize: 'clamp(1.8rem, 5vw + 1.5rem, 3rem)', // Scales fluidly between 1.8rem and 3rem
//     fontWeight: 600,
//     lineHeight: 1.3,
//     letterSpacing: -0.5,
//   },

//   // Heading 3 - Slightly adjusted for better scaling
//   h3: {
//     fontSize: 'clamp(1.5rem, 4vw + 1.2rem, 2.5rem)', // Scales fluidly between 1.5rem and 2.5rem
//     fontWeight: 600,
//     lineHeight: 1.4,
//     letterSpacing: -0.5,
//   },

//   // Heading 4 - Slightly refined scaling
//   h4: {
//     fontSize: 'clamp(1.25rem, 3vw + 1rem, 2.25rem)', // Scales fluidly between 1.25rem and 2.25rem
//     fontWeight: 600,
//     lineHeight: 1.5,
//   },

//   // Heading 5 - Scaled down to maintain balance with the rest of the typography
//   h5: {
//     fontSize: 'clamp(1.125rem, 2.5vw + 0.75rem, 1.75rem)', // Scales fluidly between 1.125rem and 1.75rem
//     fontWeight: 600,
//   },

//   // Heading 6 - Keep smaller scaling for subheadings
//   h6: {
//     fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)', // Scales fluidly between 1rem and 1.25rem
//     fontWeight: 600,
//   },

//   // Subtitle 1 - Adjusted slightly to ensure readability
//   subtitle1: {
//     fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)', // Scales fluidly between 1rem and 1.25rem
//   },

//   // Subtitle 2 - Same as subtitle 1 but slightly smaller for distinction
//   subtitle2: {
//     fontSize: 'clamp(0.875rem, 2vw + 0.4rem, 1.125rem)', // Scales fluidly between 0.875rem and 1.125rem
//     fontWeight: 500,
//   },

//   // Body text - Scaled for optimal readability across devices
//   body1: {
//     fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)', // Scales fluidly between 1rem and 1.25rem
//     fontWeight: 400,
//     lineHeight: 1.5,
//   },

//   // Smaller body text - Adjusted for mobile readability
//   body2: {
//     fontSize: 'clamp(0.875rem, 1vw + 0.375rem, 1.125rem)', // Scales fluidly between 0.875rem and 1.125rem
//     fontWeight: 300,
//     lineHeight: 1.5,
//   },

//   // Caption - Refined scaling for small text
//   caption: {
//     fontSize: 'clamp(0.75rem, 1.5vw + 0.375rem, 1rem)', // Scales fluidly between 0.75rem and 1rem
//     fontWeight: 400,
//   },
// };

// const effect = {
//   hoverGlow: {
//     light: 'linear-gradient(180deg, #4aa6b2 0%, #0feda6 100%)',
//     dark: 'linear-gradient(180deg, #9b5de5 0%, #f15bb5 100%)',
//   },
// };

// export const theme = createTheme({
//   colorSchemes: {
//     light: { palette: lightPalette },
//     dark: { palette: darkPalette },
//   },
//   typography,
// });

import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    effect: {
      hoverGlow: {
        light: string;
        dark: string;
      };
    };
  }

  interface ThemeOptions {
    effect?: {
      hoverGlow?: {
        light?: string;
        dark?: string;
      };
    };
  }
}

const lightPalette = {
  primary: { main: '#9400ff' },
  secondary: { main: '#19cb98' },
  background: {
    default: 'hsl(0, 0%, 100%)', // light grayish-blue
    paper: 'hsl(240, 20%, 98%)', // white
  },
};

const darkPalette = {
  primary: { main: '#19cb98' }, // brighter blue for contrast
  secondary: { main: '#9400ff' },
  background: {
    default: blueGrey[700], // near black
    paper: blueGrey[900], // dark gray
  },
  hoverEffect: 'linear-gradient(180deg, #9b5de5 0%, #f15bb5 100%)',
};

const typography = {
  fontFamily: 'Roboto, Inter, sans-serif',

  // Headings
  h1: {
    fontSize: 'clamp(2rem, 5vw + 1rem, 3.5rem)',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 'clamp(1.75rem, 4.5vw + 1rem, 3rem)',
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: 'clamp(1.5rem, 4vw + 0.75rem, 2.5rem)',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: -0.5,
  },
  h4: {
    fontSize: 'clamp(1.25rem, 3.5vw + 0.75rem, 2.25rem)',
    fontWeight: 600,
    lineHeight: 1.35,
    letterSpacing: -0.5,
  },
  h5: {
    fontSize: 'clamp(1.125rem, 3vw + 0.5rem, 1.75rem)',
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: -0.5,
  },
  h6: {
    fontSize: 'clamp(1rem, 2.5vw + 0.5rem, 1.25rem)',
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: -0.5,
  },

  // Subtitles
  subtitle1: {
    fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  subtitle2: {
    fontSize: 'clamp(0.875rem, 1.8vw + 0.4rem, 1.125rem)',
    fontWeight: 500,
    lineHeight: 1.4,
  },

  // Body
  body1: {
    fontSize: 'clamp(1rem, 1.8vw + 0.5rem, 1.25rem)',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  body2: {
    fontSize: 'clamp(0.875rem, 1.5vw + 0.4rem, 1.125rem)',
    fontWeight: 400,
    lineHeight: 1.5,
  },

  // Caption / small text
  caption: {
    fontSize: 'clamp(0.75rem, 1.2vw + 0.35rem, 1rem)',
    fontWeight: 400,
    lineHeight: 1.4,
  },
};

// export const typography = {
// const typography = {
//   fontFamily: 'Roboto, Inter, sans-serif',

//   // Heading 1 - Adjusted max size to prevent excessive scaling on larger screens
//   h1: {
//     fontSize: 'clamp(2rem, 6vw + 2rem, 3.5rem)', // Scales fluidly between 2rem and 3.5rem
//     fontWeight: 600,
//     lineHeight: 1.2,
//     letterSpacing: -0.5,
//   },

//   // Heading 2 - Refined scaling for a good balance between mobile and desktop
//   h2: {
//     fontSize: 'clamp(1.8rem, 5vw + 1.5rem, 3rem)', // Scales fluidly between 1.8rem and 3rem
//     fontWeight: 600,
//     lineHeight: 1.3,
//     letterSpacing: -0.5,
//   },

//   // Heading 3 - Slightly adjusted for better scaling
//   h3: {
//     fontSize: 'clamp(1.5rem, 4vw + 1.2rem, 2.5rem)', // Scales fluidly between 1.5rem and 2.5rem
//     fontWeight: 600,
//     lineHeight: 1.4,
//     letterSpacing: -0.5,
//   },

//   // Heading 4 - Slightly refined scaling
//   h4: {
//     fontSize: 'clamp(1.25rem, 3vw + 1rem, 2.25rem)', // Scales fluidly between 1.25rem and 2.25rem
//     fontWeight: 600,
//     lineHeight: 1.5,
//   },

//   // Heading 5 - Scaled down to maintain balance with the rest of the typography
//   h5: {
//     fontSize: 'clamp(1.125rem, 2.5vw + 0.75rem, 1.75rem)', // Scales fluidly between 1.125rem and 1.75rem
//     fontWeight: 600,
//   },

//   // Heading 6 - Keep smaller scaling for subheadings
//   h6: {
//     fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)', // Scales fluidly between 1rem and 1.25rem
//     fontWeight: 600,
//   },

//   // Subtitle 1 - Adjusted slightly to ensure readability
//   subtitle1: {
//     fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)', // Scales fluidly between 1rem and 1.25rem
//   },

//   // Subtitle 2 - Same as subtitle 1 but slightly smaller for distinction
//   subtitle2: {
//     fontSize: 'clamp(0.875rem, 2vw + 0.4rem, 1.125rem)', // Scales fluidly between 0.875rem and 1.125rem
//     fontWeight: 500,
//   },

//   // Body text - Scaled for optimal readability across devices
//   body1: {
//     fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)', // Scales fluidly between 1rem and 1.25rem
//     fontWeight: 400,
//     lineHeight: 1.5,
//   },

//   // Smaller body text - Adjusted for mobile readability
//   body2: {
//     fontSize: 'clamp(0.800rem, 1vw + 0.375rem, 1.125rem)', // Scales fluidly between 0.875rem and 1.125rem
//     fontWeight: 300,
//     lineHeight: 1.5,
//   },

//   // Caption - Refined scaling for small text
//   caption: {
//     fontSize: 'clamp(0.75rem, 1.5vw + 0.375rem, 1rem)', // Scales fluidly between 0.75rem and 1rem
//     fontWeight: 400,
//   },
// };

export const theme = createTheme({
  colorSchemes: {
    light: { palette: lightPalette },
    dark: { palette: darkPalette },
  },
  typography,

  effect: {
    hoverGlow: {
      light: 'linear-gradient(180deg, #4aa6b2 0%, #0feda6 100%)',
      dark: 'linear-gradient(180deg, #9b5de5 0%, #f15bb5 100%)',
    },
  },
});
