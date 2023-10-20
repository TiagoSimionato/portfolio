import styled from "styled-components";
import socials from 'data/socials';
import variables from "common/variables.json";

const StyledSocials = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 6.25rem;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    a {
      font-size: 30px;
      transition: 0.1s ease-out;
    }

    a:hover {
      transform: scale(1.2);
    }
  }

  .line {
    height: 80px;
    background-color: white;
    width: 1px;
  }

  @media screen and (max-width: ${variables.breakpoints.tablet}) {
    position: static;
    width: auto;
    padding-top: 1.5rem;

    ul {
      flex-direction: row;
      justify-content: center;
    }

    .line {
      height: 1px;
      width: 80px;
      display: block;
    }
  }
`

export interface ISocials {
  externalLink : string,
  className    : string
}

export function Socials() {
  return (
    <StyledSocials>
      <ul>
        <div className="line"></div>
        {socials.map((item, index) => //TODO FIX INDEX
          <li key={index}>
            <a
              href={item.externalLink}
              className={item.className}
              target="_blank"
              rel="noreferrer"
            >{ }</a>
          </li>
        )}
        <div className="line"> </div>
      </ul>
    </StyledSocials>
  );
}
