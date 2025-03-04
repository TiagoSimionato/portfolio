import { Stack, Typography, useMediaQuery } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import projectsData from 'data/projects';
import { tokens } from 'tokens';
import { Card, CARD_MAX_WIDTH } from './Card';
import '@splidejs/react-splide/css';

export const Projects = () => {
  const smallScreen = useMediaQuery(`(max-width:${tokens.breakpoints.md}px)`);

  return (
    <Stack sx={{
      '.splide__arrow': {
        backgroundColor: tokens.colors.contrast,
        opacity: 1,
        top: { xs: `min(21vw, ${CARD_MAX_WIDTH * 0.242}px)`, md: '50%' }
      },
      '.splide__arrow:hover': {
        backgroundColor: tokens.colors.contrastSaturated
      },
      '.splide__pagination': {
        bottom: 0,
      },
    }}>
      <Typography variant="h2" textAlign="center" pb={{ md: '3.75rem', xs: '1.5rem' }}>
        Projetos realizados
      </Typography>
      <Splide
        color="blue"
        options={{
          autoHeight: true,
          autoWidth: true,
          snap: true,
        }}
        tag="div"
        style={{
          padding: smallScreen ? '0 0 2rem 0' : '0 3rem 2rem 3rem',
        }}
      >
        {projectsData.map(item => (
          <SplideSlide key={item.name}>
            <Card
              name={item.name}
              description={item.description}
              imgPath={item.imgPath}
              imgAlt={item.imgAlt}
              externalLink={item.externalLink}
            />
          </SplideSlide>
        ))}
      </Splide>
    </Stack>
  );
};
