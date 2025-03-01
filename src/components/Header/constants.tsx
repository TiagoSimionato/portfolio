import AboutMe from 'components/AboutMe';
import Projects from 'components/Projects';
import TechStack from 'components/TechStack';

export const tabs = [
  {
    content: <AboutMe key="about" />,
    label: 'Sobre mim',
  },
  {
    content: <Projects key="project" />,
    label: 'Projetos',
  },
  {
    content: <TechStack key="techStack" />,
    label: 'Tecnologias',
  },
] as const;
