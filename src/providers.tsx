'use client';

import { ThemeProvider } from '@mui/material';
import React from 'react';
import { theme } from 'theme';

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
