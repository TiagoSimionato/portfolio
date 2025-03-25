import type { PropsWithChildren } from 'react';
import { Stack } from '@mui/material';
import { Socials } from 'app/components';
import { Footer, Header } from 'components';
import { tokens } from 'tokens';

export const PAGE_PADDING = { md: '4rem', xs: '1rem' };

export const BasePage = ({ children }: PropsWithChildren) => (
  <Stack sx={{ backgroundImage: `linear-gradient(${tokens.colors.primary},${tokens.colors.secondary})`, flexGrow: 1 }}>
    <Header />
    <Stack flex={1} justifyContent="center" paddingX={PAGE_PADDING}>
      <Stack flex={1}>
        {children}
      </Stack>
      <Socials />
      <Footer />
    </Stack>
  </Stack>
);
