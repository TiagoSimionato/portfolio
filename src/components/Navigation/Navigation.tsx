import styled from "styled-components";
import INavItem from "common/interfaces/INavItem";

const StyledNavigation = styled.nav`
  ul {
    display: flex;
    gap: 15px;

    li {
      font-size: 1.5rem;
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
