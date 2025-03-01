'use client';

import { BasePage } from 'components';
import { tabs } from 'components/Header/constants';
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
