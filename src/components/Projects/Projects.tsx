import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import projectsData from 'data/projects';
import Card from "./Card";
import variables from 'common/variables.json';

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

  .splide__arrow--prev {
    left: 0;
  }

  .splide__arrow--next {
    right: 0;
  }

  .splide__pagination {
    visibility: hidden;
  }
`

export function Projects() {
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
                />
              </SplideSlide>
            )}
          </Splide>
        </div>
          {/*active={index === active ? true : false}*/}
    </StyledProjects>
  );
}
