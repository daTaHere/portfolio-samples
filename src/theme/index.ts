import { createTheme } from '@mui/material/styles';
import { lightPalette, darkPalette } from './palette';
import { typography } from './typography';
import { components } from './components';

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

// const lightPalette = {
//   primary: { main: '#9400ff' },
//   secondary: { main: '#19cb98' },
//   background: {
//     default: 'hsl(240, 20%, 98%)', // light grayish-blue
//     paper: 'hsl(0, 0%, 100%)', // white
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

// const typography = {
//   fontFamily: 'Roboto, Inter, sans-serif',

//   // Headings
//   h1: {
//     fontSize: 'clamp(2rem, 5vw + 1rem, 3.5rem)',
//     fontWeight: 600,
//     lineHeight: 1.2,
//     letterSpacing: -0.5,
//   },
//   h2: {
//     fontSize: 'clamp(1.75rem, 4.5vw + 1rem, 3rem)',
//     fontWeight: 600,
//     lineHeight: 1.25,
//     letterSpacing: -0.5,
//   },
//   h3: {
//     fontSize: 'clamp(1.5rem, 4vw + 0.75rem, 2.5rem)',
//     fontWeight: 600,
//     lineHeight: 1.3,
//     letterSpacing: -0.5,
//   },
//   h4: {
//     fontSize: 'clamp(1.25rem, 3.5vw + 0.75rem, 2.25rem)',
//     fontWeight: 600,
//     lineHeight: 1.35,
//     letterSpacing: -0.5,
//   },
//   h5: {
//     fontSize: 'clamp(1.125rem, 3vw + 0.5rem, 1.75rem)',
//     fontWeight: 600,
//     lineHeight: 1.4,
//     letterSpacing: -0.5,
//   },
//   h6: {
//     fontSize: 'clamp(1rem, 2.5vw + 0.5rem, 1.25rem)',
//     fontWeight: 600,
//     lineHeight: 1.4,
//     letterSpacing: -0.5,
//   },

//   // Subtitles
//   subtitle1: {
//     fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)',
//     fontWeight: 500,
//     lineHeight: 1.4,
//   },
//   subtitle2: {
//     fontSize: 'clamp(0.875rem, 1.8vw + 0.4rem, 1.125rem)',
//     fontWeight: 500,
//     lineHeight: 1.4,
//   },

//   // Body
//   body1: {
//     fontSize: 'clamp(1rem, 1.8vw + 0.5rem, 1.25rem)',
//     fontWeight: 400,
//     lineHeight: 1.5,
//   },
//   body2: {
//     fontSize: 'clamp(0.875rem, 1.5vw + 0.4rem, 1.125rem)',
//     fontWeight: 400,
//     lineHeight: 1.5,
//   },

//   // Caption / small text
//   caption: {
//     fontSize: 'clamp(0.75rem, 1.2vw + 0.35rem, 1rem)',
//     fontWeight: 400,
//     lineHeight: 1.4,
//   },
// };

// const components = {
//   MuiTextField: {
//     defaultProps: {
//       variant: 'outlined' as const, // default variant
//     },
//     styleOverrides: {
//       root: {
//         backgroundColor: '#fff',
//         borderRadius: 4,
//         '& .MuiInputBase-input': {
//           color: '#000', // input text
//         },
//         '& .MuiInputLabel-root': {
//           color: '#555', // label text
//         },
//         '& .MuiInputBase-input::placeholder': {
//           color: '#555', // placeholder text
//           opacity: 1,
//         },
//       },
//     },
//   },
//   MuiOutlinedInput: {
//     styleOverrides: {
//       root: {
//         backgroundColor: '#fff',
//         '& .MuiInputBase-input': {
//           color: '#000',
//         },
//         '& .MuiInputBase-input::placeholder': {
//           color: '#555',
//           opacity: 1,
//         },
//       },
//     },
//   },
//   MuiSelect: {
//     styleOverrides: {
//       select: {
//         backgroundColor: '#fff',
//         color: '#000',
//         '&:empty': {
//           color: '#555', // placeholder color for empty select
//         },
//       },
//     },
//   },
// };

export const theme = createTheme({
  colorSchemes: {
    light: { palette: lightPalette },
    dark: { palette: darkPalette },
  },
  typography,
  components,
  effect: {
    hoverGlow: {
      light: 'linear-gradient(180deg, #4aa6b2 0%, #0feda6 100%)',
      dark: 'linear-gradient(180deg, #9b5de5 0%, #f15bb5 100%)',
    },
  },
});
