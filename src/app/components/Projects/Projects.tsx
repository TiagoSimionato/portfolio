import { Stack, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import variables from 'common/variables.json';
import projectsData from 'data/projects';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { tokens } from 'tokens';
import { Card } from './Card';
import '@splidejs/react-splide/css';

const StyledProjects = styled.section`
  padding: 2rem 0;
  margin: -1rem;

  .splide {
    padding: 0 3rem;
  }

  .splide__arrow:hover {
    background-color: ${variables.colors.contrastSaturated};
  }

  .splide__arrow,
  .splide__arrow:focus,
  .splide__arrow:active {
    background-color: ${variables.colors.contrast};
    opacity: 1;
  }

  .splide__arrow--prev {
    left: 11px;
  }

  .splide__arrow--next {
    right: 11px;
  }

  .splide__pagination {
    visibility: hidden;
  }

  @media screen and (max-width: ${tokens.breakpoints.md}) {
    padding: 1rem 0;

    .splide {
      padding: 0 3rem 2rem 3rem;
    }

    .splide__pagination {
      position: absolute;
      bottom: 0;
      visibility: visible;
    }
  }

  @media screen and (max-width: ${variables.breakpoints.phone}) {
    .splide {
      padding: 3.5rem 0rem 2rem 0rem;
    }

    .splide__arrow--prev {
      top: 0;
      left: 35%;
      transform: scale(1.5);
    }

    .splide__arrow--next {
      top: 0;
      right: 35%;
      transform: scale(1.5);
    }
  }
`;

export const Projects = () => {
  const [cardWidth, setCardWidth] = useState(500);

  useEffect(() => {
    const handleCardWidth = () => {
      const newWidth = document.documentElement.clientWidth;
      const tabletStrbreakpoint = variables.breakpoints.tablet;
      const tabletBP = Number(
        tabletStrbreakpoint.substring(0, tabletStrbreakpoint.length - 2),
      );
      const phoneStrbreakpoint = variables.breakpoints.phone;
      const phoneBP = Number(
        phoneStrbreakpoint.substring(0, phoneStrbreakpoint.length - 2),
      );

      if (newWidth > tabletBP) {
        setCardWidth(500);
      }
      else if (newWidth > phoneBP) {
        setCardWidth(newWidth - 16 * 3 * 2 - 20);
      }
      else {
        setCardWidth(newWidth - 16 * 0.5 * 2 - 20);
      }
    };

    window.addEventListener('resize', handleCardWidth);
    handleCardWidth();

    return () => window.removeEventListener('resize', handleCardWidth);
  }, []);

  return (
    <StyledProjects id="projects">
      <Typography variant="h2" textAlign="center" pb={{ md: '3.75rem', xs: '1.5rem' }}>Projetos realizados</Typography>
      <Stack>
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
                imgPath={item.imgPath}
                imgAlt={item.imgAlt}
                externalLink={item.externalLink}
                cardWidth={cardWidth}
              />
            </SplideSlide>
          ))}
        </Splide>
      </Stack>
    </StyledProjects>
  );
};
