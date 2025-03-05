'use client';

import { BasePage } from 'components';
import { useTabStore } from 'stores';
import { Drawer } from './components'; import { AboutMe, Hero, Projects, TechStack } from 'app/components';

const HomePage = () => {
  const { tab = 0 } = useTabStore();

  const content = [
    <Hero key="hero" />,
    <AboutMe key="about" />,
    <Projects key="project" />,
    <TechStack key="techStack" />
  ];

  return (
    <BasePage>
      {content[tab]}
      <Drawer />
    </BasePage>
  );
};

export default HomePage;
