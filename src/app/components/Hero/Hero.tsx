import { Stack } from '@mui/material';
import { Avatar, TypedTypography } from 'components';

export const Hero = () => (
  <Stack sx={{ alignItems: 'center', flexGrow: 1, gap: '2rem', justifyContent: 'center' }}>
    <Avatar />
    <Stack gap="1rem" alignItems="center">
      <TypedTypography variant="h3" sx={{ animationDelay: '0.5s' }}>
        Tiago Simionato
      </TypedTypography>
      <TypedTypography variant="h3" sx={{ animationDelay: '1s' }}>
        Full Stack Developer
      </TypedTypography>
    </Stack>
  </Stack>
);
