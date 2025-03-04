import { Link, List, ListItem, Stack } from '@mui/material';
import { PAGE_PADDING } from 'components';
import { socials } from './constants';

const Line = (
  <Stack
    aria-hidden
    sx={{
      bgcolor: 'white',
      height: { md: 80, xs: '1px' },
      width: { md: '1px', xs: 80 },
    }}
  />
);

export const Socials = () => (
  <Stack
    pt={{ md: 0, xs: '1rem' }}
    sx={{
      bottom: 0,
      left: 0,
      position: { md: 'fixed', xs: 'static' },
      width: { md: PAGE_PADDING.md, xs: 'auto' },
    }}
  >
    <List sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: { md: 'column', xs: 'row' },
      gap: '1rem',
      justifyContent: 'center',
    }}
    >
      {Line}
      {socials.map(({ className, externalLink }) => (
        <ListItem key={className} sx={{ justifyContent: 'center', width: 'fit-content' }} disablePadding>
          <Link
            href={externalLink}
            className={className}
            target="_blank"
            rel="noreferrer"
            underline="none"
            sx={{
              ':hover': {
                scale: 1.2,
              },
              'color': 'white', // TODO REMOVE
              'fontSize': 30,
              'transition': '0.1s ease-out',
            }}
          />
        </ListItem>
      ))}
      {Line}
    </List>
  </Stack>
);
