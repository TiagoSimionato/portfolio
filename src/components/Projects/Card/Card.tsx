import IProjectItem from "common/interfaces/IProjectItem";
import styled from "styled-components";
import variables from 'common/variables.json';

const cardWidth : number = 500;

interface ISCard {
  active? : boolean
}

const StyledCard = styled.div<ISCard>`
  width: ${cardWidth}px;
  background-color: ${variables.colors.primaryTransparent};
  box-shadow: 1px 1px 20px -5px rgba(0, 0, 0, 0.7);
  margin: 0.5rem;
  border-radius: 1%;
  
  a {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    min-height: 404px;
  }

  img {
    width: ${cardWidth}px;
    height: 242px;
    border-radius: 1%;
    //${props => props.active ? `width: 500px; height: 400px;` : ''} TODO IMPROVE CAROUSEL STYLE
  }

  .projectName {
    font-weight: 600;
    font-size: 2rem;
  }

  .description {
    line-height: 1.25rem;
    padding: 0 1rem 1rem 1rem;
  }

  //${props => props.active ? `transform: scale(1.1);` : ''}
`

interface Props extends IProjectItem {
  active? : boolean
}

export function Card({ name, description, imagePath, imgAlt, externalLink } : Props) {
  return (
    <StyledCard>
      <a href={externalLink} target="_blank">
        <img src={imagePath} alt={imgAlt} />
        <h2 className="projectName">{name}</h2>
        <p className="description">{description}</p>
      </a>
    </StyledCard>
  );
}
