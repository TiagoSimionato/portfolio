import styled from "styled-components";
import variables from "common/variables.json";
import Image from "components/Image";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: auto;
  padding: 3.75rem 6.25rem;
  max-width: 1440px;

  img {
    height: 220px;
    width: 220px;
    border-radius: 100%;
    box-shadow: 1px 1px 20px -5px rgba(0, 0, 0, 0.7);
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  p {
    font-weight: 500;
    line-height: 1.5rem;
    text-align: justify;
  }

  @media screen and (max-width: ${variables.breakpoints.tablet}) {
    flex-direction: column;
    padding: 3.75rem 3rem;

    .container {
      order: 1;
    }
  }

  @media screen and (max-width: ${variables.breakpoints.tablet}) {
    padding: 3.75rem 1.5rem;
  }
`

export function AboutMe() {
  return (
    <StyledSection id="aboutme">
      <Image
        src="assets/images/tiago.jpg"
        alt="Autor da Página"
      />
      <div className="container">
        <h2 className="secTitle">Sobre mim</h2>
        <p>Sou desenvolvedor apaixonado por tecnologia, lógica e desafios! Por causa da minha vontade de dar mais vida aos códigos que desenvolvia durante a graduação decidi me especializar em Front End, assim poderia desenvolver aplicações com um grau de contato mais direto com o usuário final. Desde então aprendi a utilizar diversas tecnlogias usadas no Front, sendo meu framework principal o React.js</p>
        <p>Gosto de estar sempre aprendendo coisas novas e minha principal realização é ver as aplicações que desenvolvo sendo úteis para as pessoas em seu dia a dia.</p>
      </div>
    </StyledSection>
  );
}
