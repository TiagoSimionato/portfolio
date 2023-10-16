import styled from "styled-components";
import variables from 'common/variables.json';
import navigationHeader from "data/navigationHeader.json";
import Navigation from "components/Navigation";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 6.25rem;
  position: sticky;
  top: 0;
  background: ${variables.colors.primaryTransparent};
  backdrop-filter: blur(5px);
  z-index: 1;

  h1 {
    color: white;
    font-size: 2rem;
  }
`

export function Header() {
  return (
    <StyledHeader>
      <h1><a href="https://github.com/tiago-simionato" target="_blank">Tiago Henrique</a></h1>
      <Navigation
        items={navigationHeader}
      />
    </StyledHeader>
  );
}
