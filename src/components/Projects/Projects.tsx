import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import projectsData from 'data/projects.json';
import Card from "./Card";
import { useState } from 'react';

const StyledProjects = styled.section`
  padding: 3.75rem 6.25rem;

  h2 {
    margin-bottom: 3.75rem;
  }

  .wrapper {
    max-width: 100%;
    overflow: hidden;
  }
`

export function Projects() {
  const [active, setActive] = useState<number>(0);

  return (
    <StyledProjects id="projects">
      <h2 className="secTitle">Projetos realizados</h2>
      <div className="wrapper">
        <Splide options={ {
          perPage: 3,
          gap: '1rem',
          autoWidth: true,
          autoHeight: true,
        }}
          tag="section"
        >
          {projectsData.map((item, index) => //TODO FIX INDEX
            <SplideSlide key={index}>
              <Card
                name={item.name}
                description={item.description}
                imagePath={item.imgPath}
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
