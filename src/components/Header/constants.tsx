import { AboutMe, Projects, TechStack } from 'app/components';

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
