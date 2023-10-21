import styled from "styled-components";
import stacks from 'data/stacks';
import Stack from "./Stack";
import variables from "common/variables.json";

const StyledTechStack = styled.section`
  white-space: nowrap;
  overflow: hidden;
  padding: 3.75rem 6.25rem;
  position: relative;

  h2 {
    padding: 0 3rem 4rem 3rem;
    white-space: normal;
  }

  .preWrapper {
    overflow: hidden;
  }

  .wrapper {
    animation: stackSlide infinite 35s linear;
    display: inline-block;
    min-width: 100%;
    width: fit-content;
  }

  .preWrapper:hover .wrapper {
    animation-play-state: paused;
  }

  ul {
    display: flex;
    justify-content: space-around;
  }

  @keyframes stackSlide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media screen and (max-width: ${variables.breakpoints.tablet}) {
    padding: 3.75rem 0;

    .wrapper {
      animation: stackSlide infinite 15s linear;
    }
  }
`

export function TechStack() {
  return (
    <StyledTechStack id="techs">
      <h2 className="secTitle">Tecnologias conhecidas</h2>
      <div className="preWrapper">
        <div className="wrapper">
          <ul>
            {stacks.map((stack, index) =>
              <li key={index}>
                <Stack {...stack} />
              </li>
            )}
          </ul>
        </div>
        <div className="wrapper">
          <ul>
            {stacks.map((stack, index) =>
              <li key={index}>
                <Stack {...stack} />
              </li>
            )}
          </ul>
        </div>
      </div>
    </StyledTechStack>
  );
}
