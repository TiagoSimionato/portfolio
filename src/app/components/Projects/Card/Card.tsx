import type IProjectItem from 'types/IProjectItem';
import { Typography } from '@mui/material';
import variables from 'common/variables.json';
import Image from 'components/Image';
import styled from 'styled-components';

type ISCard = {
  active?: boolean;
  cardWidth: number;
};

const StyledCard = styled.div<ISCard>`
  width: ${props => props.cardWidth}px;
  background-color: ${variables.colors.primaryTransparent};
  box-shadow: 1px 1px 20px -5px rgba(0, 0, 0, 0.7);
  margin: 0.5rem;
  border-radius: 1%;
  height: 100%;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  img {
    width: ${props => props.cardWidth}px;
    border-radius: 1%;
    /*${props =>
    props.active
      ? `width: 500px; height: 400px;`
      : ''} TODO IMPROVE CAROUSEL STYLE*/
  }

  .description {
    line-height: 1.5rem;
    padding: 0 1.5rem 1.5rem 1.5rem;
    text-align: justify;
    margin: auto 0;
  }

  @media screen and (max-width: ${variables.breakpoints.phone}) {
    .projectName {
      padding: 0 0 0.5rem 0;
      margin: 1rem 1rem 0.5rem 1rem;
    }

    .description {
      line-height: 1.25rem;
      padding: 0 1rem 1rem 1rem;
    }
  }

  //${props => (props.active ? `transform: scale(1.1);` : '')}
`;

type Props = {
  active?: boolean;
  cardWidth?: number;
} & IProjectItem;

export const Card = ({
  cardWidth = 500,
  description,
  externalLink,
  imgAlt,
  imgPath,
  name,
}: Props) => (
  <StyledCard cardWidth={cardWidth}>
    <a href={externalLink} target="_blank" rel="noreferrer">
      <Image src={imgPath} alt={imgAlt} />
      <Typography
        variant="h3"
        className="projectName"
        sx={{
          marginBottom: '0.5rem',
          padding: '1rem 1.5rem 0.5rem 1.5rem',
          textDecorationColor: variables.colors.contrast,
          textDecorationLine: 'underline',
          textDecorationThickness: 1,
          textUnderlineOffset: 13,
        }}
      >
        {name}
      </Typography>
      <p className="description">{description}</p>
    </a>
  </StyledCard>
);
