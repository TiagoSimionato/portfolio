'use client';

import { tabs } from 'components/Header/constants';
import BasePage from 'pages/BasePage';
import { useTabStore } from 'stores/tab';

const HomePage = () => {
  const { tab } = useTabStore();
  return (
    <BasePage>
      {tabs[tab].content}
    </BasePage>
  );
};

export default HomePage;
