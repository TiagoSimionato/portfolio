import variables from 'common/variables.json';
import Footer from 'components/Footer';
import GlobalStyles from 'components/GlobalStyles';
import Header from 'components/Header';
import Socials from 'components/Socials';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
    ${variables.colors.primary},
    ${variables.colors.secondary}
  );
  position: relative;
  overflow-x: clip;
  z-index: 0;

  display: flex;
  flex-direction: column;
`;

export function BasePage({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      <Background>
        <Header />
        {children}
        <Socials />
        <Footer />
      </Background>
    </>
  );
}
