import styled from "styled-components";
import INavItem from "common/interfaces/INavItem";
import variables from "common/variables.json";

const StyledNavigation = styled.nav`
  ul {
    display: flex;
    gap: 15px;

    li {
      a {
        font-size: 1.5rem;
      }
    }
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
`
interface Props {
  items : INavItem[]
}

export function Navigation({items} : Props) {
  return (
    <StyledNavigation>
      <ul>
        {items.map((item, index) => //TODO FIX INDEX
          <li key={index}><a href={item.link}>{item.name}</a></li>
        )}
      </ul>
    </StyledNavigation>
  );
}
