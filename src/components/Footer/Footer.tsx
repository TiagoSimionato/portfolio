import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  color: white;
  padding: 1.5rem;
  box-sizing: border-box;
`;

export const Footer = () => (
  <StyledFooter>
    &copy;
    {' '}
    {new Date().getFullYear()}
    {' '}
    | Tiago Henrique Simionato Machado
  </StyledFooter>
);
