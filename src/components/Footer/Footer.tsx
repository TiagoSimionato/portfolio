import { Stack, Typography } from '@mui/material';

export const Footer = () => (
  <Stack component="footer" sx={{ alignItems: 'center', alignSelf: 'stretch', padding: '1.5rem' }}>
    <Typography>
      &copy;
      {' '}
      {new Date().getFullYear()}
      {' '}
      | Tiago Henrique Simionato Machado
    </Typography>
  </Stack>
);
