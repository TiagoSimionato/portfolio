import { createTheme } from '@mui/material';
import { poppins } from 'app/layout';
import { tokens } from 'tokens';

export const theme = createTheme({
  breakpoints: {
    values: tokens.breakpoints,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          width: '0.5rem',
        },
        '::-webkit-scrollbar-thumb': {
          background: tokens.colors.tertiary,
          borderRadius: '100vw',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: tokens.colors.tertiaryLighter,
        },
        '::-webkit-scrollbar-track': {
          background: tokens.colors.secondary,
        },
        '@supports (scrollbar-color: red blue)': {
          '*': {
            scrollbarColor: `${tokens.colors.tertiary} ${tokens.colors.secondary}`,
            scrollbarWidth: 'thin',
          },
        },
        'a:hover': {
          color: tokens.colors.contrast,
        },
        'body': {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        color: 'textPrimary',
        underline: 'none',
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
  palette: {
    primary: { main: tokens.colors.contrast },
    text: {
      primary: tokens.colors.white,
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
