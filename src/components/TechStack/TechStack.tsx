import variables from 'common/variables.json';
import stacks from 'data/stacks';
import styled from 'styled-components';
import Stack from './Stack';

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
    padding: 3.75rem 1.5rem;

    .secTitle {
      padding: 0 0 4rem 0;
    }

    .preWrapper {
      border-radius: 16px;
    }

    .wrapper_0 {
      animation: none;
      box-sizing: border-box;

      ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
        row-gap: 1rem;
        padding: 1rem 0;
        position: relative;
        justify-content: center;
        align-items: center;
        border-radius: 16px;

        li {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        span {
          position: absolute;
          inset: 5px;
          border-radius: 16px;
          background-color: ${variables.colors.primary};
          z-index: 0;
        }
      }

      ul::after {
        content: '';
        position: absolute;
        width: 300vw;
        left: -100vw;
        height: 50%;
        background: linear-gradient(
          50deg,
          ${variables.colors.contrast},
          ${variables.colors.contrast}
        );
        animation: borderAnimation 4s ease-in-out infinite alternate;
        animation-delay: -2s;
        z-index: -1;
      }
    }

    .wrapper_1 {
      display: none;
    }
  }

  @keyframes borderAnimation {
    0% {
      transform: rotate(120deg);
    }

    100% {
      transform: rotate(420deg);
    }
  }
`;

export function TechStack() {
  return (
    <StyledTechStack id="techs">
      <h2 className="secTitle">Tecnologias conhecidas</h2>
      <div className="preWrapper">
        {[1, 2].map((_, index) => {
          return (
            <div key={_} className={`wrapper wrapper_${index}`}>
              <ul>
                {stacks.map(stack => (
                  <li key={stack.name}>
                    <Stack {...stack} />
                  </li>
                ))}
                <span></span>
              </ul>
            </div>
          );
        })}
      </div>
    </StyledTechStack>
  );
}
