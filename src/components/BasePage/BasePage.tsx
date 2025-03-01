import type { PropsWithChildren } from 'react';
import { Stack } from '@mui/material';
import { Socials } from 'app/components';
import variables from 'common/variables.json';
import { Footer, Header } from 'components';
import GlobalStyles from 'components/GlobalStyles';

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

export const BasePage = ({ children }: PropsWithChildren) => (
  <>
    <GlobalStyles />
    {Background}
    <Header />
    <Stack paddingX={{ md: '4rem', xs: '1.5rem' }} flexGrow={1} justifyContent="end" height="100%">
      {children}
      <Socials />
      <Footer />
    </Stack>
  </>
);
