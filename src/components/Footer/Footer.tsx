import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  color: white;
  padding: 1.5rem;
  box-sizing: border-box;
`

export function Footer() {
  return (
    <StyledFooter>
      &copy; | Tiago Henrique Simionato Machado
    </StyledFooter>
  );
}
