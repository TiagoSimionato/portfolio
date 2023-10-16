import styled from "styled-components";

const StyledNotFound = styled.section`
  flex-grow: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export function NotFound() {
  return (
    <StyledNotFound>
      <h1 className="secTitle">Desculpe, a página solicitada não foi encontrada</h1>
    </StyledNotFound>
  );
}
