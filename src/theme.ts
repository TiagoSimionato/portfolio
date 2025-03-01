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
    fontFamily: poppins.style.fontFamily,
  },
});
