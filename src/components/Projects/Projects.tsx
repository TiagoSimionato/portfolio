import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import projectsData from 'data/projects';
import Card from "./Card";
import variables from 'common/variables.json';
import { useEffect, useState } from "react";

const StyledProjects = styled.section`
  padding: 3.75rem 6.25rem;

  .secTitle {
    margin-bottom: 3.75rem;
    padding-left: 3rem;
  }

  .splide {
    padding: 0 3rem;
  }

  .splide__arrow {
    background-color: ${variables.colors.contrast};
    opacity: 1;
  }

  .splide__arrow:hover {
    background-color: ${variables.colors.contrastSaturated};
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

  @media screen and (max-width: ${variables.breakpoints.tablet}) {
    padding: 3.75rem 0;

    .splide {
      padding: 0 3rem 2rem 3rem;
    }

    .splide__pagination {
      position: absolute;
      bottom: 0;
      visibility: visible;
    }
  }
`

export function Projects() {
  const [cardWidth, setCardWidth] = useState(500);

  useEffect(() => {
    function handleCardWidth() {
      const newWidth = document.documentElement.clientWidth;
      const Strbreakpoint = variables.breakpoints.tablet;
      const bp = Number(Strbreakpoint.substring(0, Strbreakpoint.length - 2));

      if (newWidth > bp) {
        setCardWidth(500);
      } else {
        setCardWidth(newWidth - 16*3*2 - 20);
      }
    }

    window.addEventListener('resize', handleCardWidth);
    handleCardWidth();
  }, []);

  return (
    <StyledProjects id="projects">
      <h2 className="secTitle">Projetos realizados</h2>
        <div className="wrapper">
          <Splide options={ {
            autoWidth: true,
            autoHeight: true,
            snap: true
          }}
            tag="div"
          >
            {projectsData.map((item, index) => //TODO FIX INDEX
              <SplideSlide key={index}>
                <Card
                  name={item.name}
                  description={item.description}
                  imgPath={item.imgPath}
                  imgAlt={item.imgAlt}
                  externalLink={item.externalLink}
                  cardWidth={cardWidth}
                />
              </SplideSlide>
            )}
          </Splide>
        </div>
          {/*active={index === active ? true : false}*/}
    </StyledProjects>
  );
}
