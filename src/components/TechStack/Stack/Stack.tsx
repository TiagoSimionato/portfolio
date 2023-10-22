import { IStack } from "common/interfaces/IStack";
import Image from "components/Image";
import styled from "styled-components";
import variables from "common/variables.json";

const StyledStack = styled.div`
  width: fit-content;
  margin: 0 1rem;

  img {
    width: 150px;
    height: 150px;
  }

  h3 {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: ${variables.breakpoints.tablet}) {
    margin: 0;

    img {
      width: 100px;
      height: 100px;
    }
  }

  @media screen and (max-width: ${variables.breakpoints.phone}) {
    img {
      width: 80px;
      height: 80px;
    }
  }
`

export function Stack({name, imgPath, imgAlt, externalLink} : IStack) {
  return (
    <StyledStack>
      <a
        href={externalLink ? externalLink : '#'}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={imgPath}
          alt={imgAlt}
        />
        <h3>{name}</h3>
      </a>
    </StyledStack>
  );
}
