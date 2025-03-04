import { Stack, Typography } from '@mui/material';

export const Footer = () => (
  <Stack component="footer" p="1.5rem" sx={{ alignSelf: 'stretch' }}>
    <Typography textAlign="center">
      &copy;
      {' '}
      {new Date().getFullYear()}
      {' '}
      | Tiago Henrique Simionato Machado
    </Typography>
  </Stack>
);
