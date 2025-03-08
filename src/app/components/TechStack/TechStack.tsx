import { List, ListItem, Stack as MUISTack, Typography } from '@mui/material';
import { stacks } from 'data';
import { tokens } from 'tokens';
import { Card } from './Card';

export const TechStack = () => (
  <MUISTack
    py="3.75rem"
    sx={{
      ' @keyframes borderAnimation': {
        from: {
          rotate: '0deg',
        },
        to: {
          rotate: '360deg',
        },
      },
      'flexGrow': 1,
    }}
  >
    <Typography pb={{ md: '3.75rem', xs: '1.5rem' }} textAlign="center" variant="h2">
      Tecnologias conhecidas
    </Typography>
    <MUISTack sx={{ flexGrow: { md: 1, xs: 0 }, my: { md: 0, xs: 'auto' } }}>
      <List sx={{
        '::before': {
          animation: 'borderAnimation 5s linear infinite',
          bgcolor: tokens.colors.contrast,
          content: '""',
          height: 1,
          left: '50%',
          position: 'absolute',
          transform: 'scaleY(7)',
          translate: '-50%',
          width: { xl: 0.1, xs: 0.3 },
        },
        'alignItems': 'center',
        'borderRadius': '16px',
        'display': 'grid',
        'flexGrow': { md: 1, xs: 0 },
        'gap': { md: '1rem', xs: 0 },
        'gridTemplateColumns': { md: 'repeat(auto-fit, minmax(160px, 1fr))', xs: 'repeat(auto-fit, minmax(115px, 1fr))' },
        'justifyContent': 'space-around',
        'overflow': 'hidden',
        'padding': { md: '1rem', xs: '1rem 0' },
        'position': 'relative',
        'rowGap': '1rem',
      }}
      >
        <MUISTack
          aria-hidden
          sx={{
            backgroundColor: `${tokens.colors.primary}`,
            borderRadius: '16px',
            inset: '5px',
            position: 'absolute',
          }}
        />
        {stacks.map(stack => (
          <ListItem key={stack.name} sx={{ justifyContent: 'center' }}>
            <Card {...stack} />
          </ListItem>
        ))}
      </List>
    </MUISTack>
  </MUISTack>
);
