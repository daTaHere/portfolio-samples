import { blueGrey } from '@mui/material/colors';

export const lightPalette = {
  primary: { main: '#9400ff' },
  secondary: { main: '#19cb98' },
  background: {
    default: 'hsl(240, 20%, 98%)', // light grayish-blue
    paper: 'hsl(0, 0%, 100%)', // white
  },
};

export const darkPalette = {
  primary: { main: '#19cb98' }, // brighter blue for contrast
  secondary: { main: '#9400ff' },
  background: {
    default: blueGrey[700], // near black
    paper: blueGrey[900], // dark gray
  },
  hoverEffect: 'linear-gradient(180deg, #9b5de5 0%, #f15bb5 100%)',
};
