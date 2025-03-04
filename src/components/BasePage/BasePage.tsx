import type { PropsWithChildren } from 'react';
import { Stack } from '@mui/material';
import { Socials } from 'app/components';
import { Footer, Header } from 'components';
import { tokens } from 'tokens';

const Background = (
  <Stack sx={{
    backgroundImage: `linear-gradient(${tokens.colors.primary},${tokens.colors.secondary})`,
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: -1,
  }}
  />
);

export const PAGE_PADDING = { md: '4rem', xs: '1rem' };

export const BasePage = ({ children }: PropsWithChildren) => (
  <>
    {Background}
    <Header />
    <Stack paddingX={PAGE_PADDING} flex={1} justifyContent="center" height="100%">
      <Stack flex={1}>
        {children}
      </Stack>
      <Socials />
      <Footer />
    </Stack>
  </>
);
