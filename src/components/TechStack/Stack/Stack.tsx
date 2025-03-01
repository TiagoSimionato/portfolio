import type { IStack } from 'common/interfaces/IStack';
import variables from 'common/variables.json';
import Image from 'components/Image';
import styled from 'styled-components';

const StyledStack = styled.div`
  width: fit-content;
  margin: 0 1rem;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

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
`;

export const Stack = ({ externalLink, imgAlt, imgPath, name }: IStack) => (
  <StyledStack>
    <a
      href={externalLink || '#'}
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
