import { Link, List, ListItem, Stack } from '@mui/material';
import { PAGE_PADDING } from 'components';
import { tokens } from 'tokens';
import { socials } from './constants';

const Line = (
  <Stack
    aria-hidden
    sx={{
      bgcolor: tokens.colors.white,
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
      {socials.map(({ externalLink, Icon, label }) => (
        <ListItem disablePadding key={externalLink} sx={{ justifyContent: 'center', width: 'fit-content' }}>
          <Link
            href={externalLink}
            rel="noreferrer"
            sx={{
              ':hover': {
                scale: 1.2,
              },
              'display': 'flex',
              'transition': '0.1s ease-out',
            }}
            target="_blank"
          >
            <Icon aria-label={label} sx={{ fontSize: 30 }} />
          </Link>
        </ListItem>
      ))}
      {Line}
    </List>
  </Stack>
);
