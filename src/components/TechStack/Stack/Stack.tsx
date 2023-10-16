import { IStack } from "common/interfaces/IStack";
import styled from "styled-components";

const StyledStack = styled.div`
  width: fit-content;

  img {
    width: 150px;
    height: 150px;
  }

  h3 {
    text-align: center;
    margin-top: 1rem;
  }
`

interface Props extends IStack {}

export function Stack({name, imgPath, imgAlt, externalLink} : Props) {
  return (
    <StyledStack>
      <a href={externalLink ? externalLink : '#'} target="_blank">
        <img src={imgPath} alt={imgAlt} />
        <h3>{name}</h3>
      </a>
    </StyledStack>
  );
}
