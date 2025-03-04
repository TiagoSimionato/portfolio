'use client';

import { BasePage } from 'components';
import { useTabStore } from 'stores/tab';
import { tabs } from './constants';

const HomePage = () => {
  const { tab } = useTabStore();
  return (
    <BasePage>
      {tabs[tab].content}
    </BasePage>
  );
};

export default HomePage;
