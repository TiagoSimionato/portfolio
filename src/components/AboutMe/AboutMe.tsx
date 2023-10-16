import styled from "styled-components";
import variables from "common/variables.json";

const StyledSection = styled.section`
  display: flex;
  align-items: start;
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

  h2 {
    color: ${variables.colors.contrast};
    font-size: 3rem;
    font-weight: 600;
  }
  p {
    font-weight: 500;
    line-height: 1.1rem;
  }
`

export function AboutMe() {
  return (
    <StyledSection id="aboutme">
      <img src="https://github.com/tiago-simionato.png" alt="Autor da Página" />
      <div className="container">
        <h2 className="secTitle">Sobre mim</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus dignissimos ex et asperiores possimus facilis tempore natus, optio architecto velit ratione doloribus illum praesentium, quidem odio! Praesentium, pariatur veniam?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, autem. Officiis quae, doloremque dolorum modi odit ipsa tempore voluptatem repudiandae eveniet corporis rem animi voluptatibus deleniti veritatis et temporibus fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum omnis quidem cumque magnam blanditiis ab iusto amet animi, ad delectus doloribus, corrupti fuga explicabo praesentium iure debitis voluptatibus perferendis!</p>
      </div>
    </StyledSection>
  );
}
