import styled from "styled-components";
import INavItem from "common/interfaces/INavItem";
import variables from "common/variables.json";

interface ISNavigation {
  active: boolean;
}

const StyledNavigation = styled.nav<ISNavigation>`
  ul {
    display: flex;
    gap: 15px;

    li {
      a {
        font-size: 1.5rem;
      }
    }
  }

  &.inactive {
    transform: translateX(100vw);
  }

  @media screen and (max-width: ${variables.breakpoints.tablet}) {
    ul {
      li {
        a {
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: ${variables.breakpoints.phone}) {
    position: absolute;
    right: 2rem;
    top: 5rem;
    border: 2px solid black;
    background-color: ${variables.colors.secondary};
    box-shadow: 1px 1px 20px -5px rgba(0, 0, 0, 0.7);
    transition: 0.25s ease-out;
    border-radius: 5%;
    z-index: 4;
    width: calc(100vw - 4rem);

    ul {
      flex-direction: column;
      gap: 0;
      align-items: center;

      li {
        padding: 2rem 3rem;
      }

      li:hover {
        background-color: ${variables.colors.tertiary};
        cursor: pointer;
      }

      li:hover a {
        color: white;
      }
    }
  }
`;
interface Props {
  items: INavItem[];
  active: boolean;
}

export function Navigation({ items, active }: Props) {
  return (
    <StyledNavigation active={active} className={active ? "" : "inactive"}>
      <ul>
        {items.map(
          (
            item,
            index //TODO FIX INDEX
          ) => (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          )
        )}
      </ul>
    </StyledNavigation>
  );
}
