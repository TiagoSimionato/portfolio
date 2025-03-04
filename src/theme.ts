import { createTheme } from '@mui/material';
import { poppins } from 'app/layout';
import { tokens } from 'tokens';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          width: '0.5rem',
        },
        '::-webkit-scrollbar-track': {
          background: tokens.colors.secondary,
        },
        '::-webkit-scrollbar-thumb': {
          borderRadius: '100vw',
          background: tokens.colors.tertiary,
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: tokens.colors.tertiaryLighter,
        },
        '@supports (scrollbar-color: red blue)': {
          '*': {
            scrollbarColor: `${tokens.colors.tertiary} ${tokens.colors.secondary}`,
            scrollbarWidth: 'thin',
          }
        },
        'body': {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        },
        'a:hover': {
          color: tokens.colors.contrast
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
        color: 'textPrimary',
      }
    }
  },
  palette: {
    primary: { main: tokens.colors.contrast },
    text: {
      secondary: tokens.colors.white,
      primary: tokens.colors.white,
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
  breakpoints: {
    values: tokens.breakpoints
  }
});
