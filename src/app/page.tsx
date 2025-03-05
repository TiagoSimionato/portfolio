'use client';

import { AboutMe, Hero, Projects, TechStack } from 'app/components';
import { BasePage } from 'components';
import { useTabStore } from 'stores';
import { Drawer } from './components';

const HomePage = () => {
  const { tab = 0 } = useTabStore();

  const content = [
    <Hero key="hero" />,
    <AboutMe key="about" />,
    <Projects key="project" />,
    <TechStack key="techStack" />,
  ];

  return (
    <BasePage>
      {content[tab]}
      <Drawer />
    </BasePage>
  );
};

export default HomePage;
