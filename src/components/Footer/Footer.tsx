import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  color: white;
  padding: 1.5rem;
  box-sizing: border-box;
`

export function Footer() {
  const minute = 1000 * 60;
  const hour   = minute * 60;
  const day    = hour * 24;
  const year   = day * 365;
  
  const years = Math.round(Date.now() / year) + 1969;

  return (
    <StyledFooter>
      &copy; {years} | Tiago Henrique Simionato Machado
    </StyledFooter>
  );
}
