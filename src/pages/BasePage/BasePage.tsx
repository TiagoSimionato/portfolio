import type { PropsWithChildren } from 'react';
import { Stack } from '@mui/material';
import variables from 'common/variables.json';
import Footer from 'components/Footer';
import GlobalStyles from 'components/GlobalStyles';
import Header from 'components/Header';
import Socials from 'components/Socials';

const Background = (
  <Stack sx={{
    backgroundImage: `linear-gradient(${variables.colors.primary},${variables.colors.secondary})`,
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: -1,
  }}
  />
);

export function BasePage({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {Background}
      <Header />
      <Stack paddingX="4rem" flexGrow={1} justifyContent="end" height="100%">
        {children}
        <Socials />
        <Footer />
      </Stack>
    </>
  );
}
