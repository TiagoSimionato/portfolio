'use client';

import AboutMe from 'components/AboutMe';
import Projects from 'components/Projects';
import TechStack from 'components/TechStack';
import BasePage from 'pages/BasePage';

export default function HomePage() {
  return (
    <BasePage>
      <AboutMe />
      <Projects />
      <TechStack />
    </BasePage>
  );
}
