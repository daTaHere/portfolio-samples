export const components = {
  MuiTextField: {
    defaultProps: {
      variant: 'outlined' as const, // default variant
    },
    styleOverrides: {
      root: {
        backgroundColor: '#fff',
        borderRadius: 4,
        '& .MuiInputBase-input': {
          color: '#000', // input text
        },
        '& .MuiInputLabel-root': {
          color: '#555', // label text
        },
        '& .MuiInputBase-input::placeholder': {
          color: '#555', // placeholder text
          opacity: 1,
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        backgroundColor: '#fff',
        '& .MuiInputBase-input': {
          color: '#000',
        },
        '& .MuiInputBase-input::placeholder': {
          color: '#555',
          opacity: 1,
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        backgroundColor: '#fff',
        color: '#000',
        '&:empty': {
          color: '#555', // placeholder color for empty select
        },
      },
    },
  },
};
