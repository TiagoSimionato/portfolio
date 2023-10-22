import styled from 'styled-components';
import variables from 'common/variables.json';
import GlobalStyles from 'components/GlobalStyles';
import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from 'react-router-dom';
import Socials from 'components/Socials';

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(${variables.colors.primary}, ${variables.colors.secondary});
  position: relative;
  overflow-x: clip;

  display: flex;
  flex-direction: column;
`

export function BasePage() {
  return (
    <>
      <GlobalStyles />
      <Background>
        <Header />
        <Outlet />
        <Socials />
        <Footer />
      </Background>
    </>
  );
}
