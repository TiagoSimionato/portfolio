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
      '@keyframes stackSlide': {
        from: {
          transform: 'translateX(0)',
        },
        to: {
          transform: 'translateX(-100%)',
        },
      },
      'flexGrow': 1,
    }}
  >
    <Typography pb={{ md: '3.75rem', xs: '1.5rem' }} textAlign="center" variant="h2">
      Tecnologias conhecidas
    </Typography>
    <MUISTack
      direction="row"
      my="auto"
      sx={{
        ':hover .wrapper': {
          animationPlayState: 'paused',
        },
        'borderRadius': '16px',
        'overflow': 'hidden',
      }}
    >
      {[1, 2].map((_, index) => (
        <MUISTack
          aria-hidden={index > 0}
          className={`wrapper wrapper_${index}`}
          key={`wrapper_${_}`}
          sx={{
            animation: { md: 'stackSlide infinite 35s linear', xs: 'none' },
            display: index === 1 ? { md: 'inline-block', xs: 'none' } : 'inline-block',
            minWidth: { md: 'auto', xs: '100%' },
            width: 'fit-content',
          }}
        >
          <List sx={{
            '::before': {
              animation: 'borderAnimation 5s linear infinite',
              bgcolor: tokens.colors.contrast,
              content: { md: 'none', xs: '""' },
              height: 1,
              left: '50%',
              position: 'absolute',
              transform: 'scaleY(3)',
              translate: '-50%',
              width: 0.3,
            },
            'alignItems': 'center',
            'display': { md: 'flex', xs: 'grid' },
            'gridTemplateColumns': 'repeat(auto-fill, minmax(115px, 1fr))',
            'justifyContent': 'space-around',
            'padding': '1rem 0',
            'position': 'relative',
            'rowGap': '1rem',
          }}
          >
            <MUISTack
              aria-hidden
              sx={{
                backgroundColor: `${tokens.colors.primary}`,
                borderRadius: '16px',
                display: { md: 'none', xs: 'static' },
                inset: '5px',
                position: 'absolute',
              }}
            />
            {stacks.map(stack => (
              <ListItem key={stack.name} sx={{ justifyContent: 'center' }}>
                <Card {...stack} tabIndex={-index} />
              </ListItem>
            ))}
          </List>
        </MUISTack>
      ))}
    </MUISTack>
  </MUISTack>
);
