import { List, ListItem, Stack as MUISTack, Typography } from '@mui/material';
import variables from 'common/variables.json';
import stacks from 'data/stacks';
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
    <Typography variant="h2" textAlign="center" pb={{ md: '3.75rem', xs: '1.5rem' }}>
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
          key={`wrapper_${_}`}
          className={`wrapper_${index}`}
          sx={{
            animation: { md: 'stackSlide infinite 35s linear', xs: 'none' },
            display: index === 1 ? { md: 'inline-block', xs: 'none' } : 'inline-block',
            minWidth: { md: 'auto', xs: '100%' },
            width: 'fit-content',
          }}
        >
          <List sx={{
            '::after': {
              animation: 'borderAnimation 5s linear infinite',
              bgcolor: tokens.colors.contrast,
              content: { md: 'none', xs: '""' },
              height: 1,
              left: '50%',
              position: 'absolute',
              transform: 'scaleY(3)',
              translate: '-50%',
              width: 0.3,
              zIndex: -1,
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
            {stacks.map(stack => (
              <ListItem key={stack.name} sx={{ justifyContent: 'center', zIndex: 1 }}>
                <Card {...stack} />
              </ListItem>
            ))}
            <MUISTack
              aria-hidden
              sx={{
                backgroundColor: `${variables.colors.primary}`,
                borderRadius: '16px',
                display: { md: 'none', xs: 'static' },
                inset: '5px',
                position: 'absolute',
                zIndex: 0,
              }}
            />
          </List>
        </MUISTack>
      ))}
    </MUISTack>
  </MUISTack>
);
