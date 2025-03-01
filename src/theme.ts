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
  },
});
