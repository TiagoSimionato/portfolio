import { Stack } from '@mui/material';
import { Avatar, TypedTypography } from 'components';

export const Hero = () => (
  <Stack sx={{ alignItems: 'center', flexGrow: 1, gap: '2rem', justifyContent: 'center' }}>
    <Avatar />
    <Stack alignItems="center" gap="1rem">
      <TypedTypography sx={{ animationDelay: '0.5s' }} variant="h3">
        Tiago Simionato
      </TypedTypography>
      <TypedTypography sx={{ animationDelay: '1s' }} variant="h3">
        Full Stack Developer
      </TypedTypography>
    </Stack>
  </Stack>
);
