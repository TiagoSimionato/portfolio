import { Stack, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import projectsData from 'data/projects';
import { tokens } from 'tokens';
import { Card, CARD_MAX_WIDTH } from './Card';

export const Projects = () => (
  <Stack py="2rem" sx={{
    '.splide': {
      p: { md: '0 3rem 2rem 3rem', xs: '0 0 2rem 0' },
    },
    '.splide__arrow': {
      backgroundColor: tokens.colors.contrast,
      opacity: 1,
      top: { md: '50%', xs: `min(21vw, ${CARD_MAX_WIDTH * 0.242}px)` },
    },
    '.splide__arrow:hover': {
      backgroundColor: tokens.colors.contrastSaturated,
    },
    '.splide__pagination': {
      bottom: 0,
    },
  }}
  >
    <Typography variant="h2" textAlign="center" pb={{ md: '3.75rem', xs: '1.5rem' }}>
      Projetos realizados
    </Typography>
    <Splide
      options={{
        autoHeight: true,
        autoWidth: true,
        snap: true,
      }}
      tag="div"
    >
      {projectsData.map(item => (
        <SplideSlide key={item.name}>
          <Card
            name={item.name}
            description={item.description}
            img={item.img}
            imgAlt={item.imgAlt}
            externalLink={item.externalLink}
          />
        </SplideSlide>
      ))}
    </Splide>
  </Stack>
);
