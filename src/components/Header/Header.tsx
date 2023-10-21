import styled from "styled-components";
import variables from 'common/variables.json';
import navHeaderData from "data/navigationHeader";
import Navigation from "components/Navigation";
import { useEffect, useState } from 'react';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 6.25rem;
  position: sticky;
  top: 0;
  background: ${variables.colors.primaryTransparent};
  backdrop-filter: blur(5px);
  z-index: 2;

  button {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;

    display: none;
  }

  h1 {
    color: white;
    font-size: 1.75rem;
  }

  @media screen and (max-width: ${variables.breakpoints.tablet}) {
    align-items: center;
    padding: 1.5rem 3rem;

    h1 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: ${variables.breakpoints.phone}) {
    padding: 10px 1rem;

    button {
      display: block;
    }
  }
`

export function Header() {
  const phoneLayoutWidth =  Number(variables.breakpoints.phone.substring(0, variables.breakpoints.phone.length - 2));
  const [isPhoneLayout, setIsPhoneLayout] = useState(document.documentElement.clientWidth <= phoneLayoutWidth);

  const [isNavActive, setNavActive] = useState(isPhoneLayout ? false : true);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsPhoneLayout(document.documentElement.clientWidth <= phoneLayoutWidth);
    });
  }, [document.documentElement.clientWidth]);

  useEffect(() => {
    setNavActive(isPhoneLayout ? false : true);
  }, [isPhoneLayout]);

  return (
    <StyledHeader>
      <h1>
        <a
          href="https://github.com/tiago-simionato"
          target="_blank"
          rel="noreferrer"
        >
          Tiago Henrique
        </a>
      </h1>
      <button
        className="bx bxs-grid"
        onClick={() => isNavActive ? setNavActive(false) : setNavActive(true) }
      ></button>
      <Navigation
        items={navHeaderData}
        active={isNavActive}
      />
    </StyledHeader>
  );
}
