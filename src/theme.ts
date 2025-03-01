import { createTheme } from '@mui/material';
import { poppins } from 'app/layout';
import { tokens } from 'tokens';

export const theme = createTheme({
  palette: {
    primary: { main: tokens.colors.contrast },
    text: {
      secondary: tokens.colors.white,
    },
  },
  typography: {
    allVariants: {
      color: tokens.colors.white,
    },
    body1: {
      textAlign: 'justify',
    },
    fontFamily: poppins.style.fontFamily,
    h2: {
      '@media (min-width:800px)': {
        fontSize: '3rem',
      },
      'color': tokens.colors.contrast,
      'fontSize': '2.275rem',
      'fontWeight': 600,
      'lineHeight': '2.75rem',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: '3rem',
      textAlign: 'center',
    },
  },
});
