import styled from "styled-components";
import INavItem from "common/interfaces/INavItem";
import variables from "common/variables.json";

interface ISNavigation {
  active : boolean
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
    transform: translateX(500px);
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
    right: calc(1rem + 5px);
    top: 4rem;
    border: 2px solid black;
    background-color: ${variables.colors.secondary};
    box-shadow: 1px 1px 20px -5px rgba(0, 0, 0, 0.7);
    transition: 0.5s ease-out;

    ul {
      flex-direction: column;
      gap: 0;

      li {
        padding: 2rem 6rem;
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
`
interface Props {
  items  : INavItem[],
  active : boolean,
}

export function Navigation({items, active} : Props) {
  return (
    <StyledNavigation active={active} className={active ? '' : 'inactive'}>
      <ul>
        {items.map((item, index) => //TODO FIX INDEX
          <li key={index}><a href={item.link}>{item.name}</a></li>
        )}
      </ul>
    </StyledNavigation>
  );
}
