'use client';

import { tabs } from 'components/Header/constants';
import BasePage from 'pages/BasePage';
import { useTabStore } from 'stores/tab';

export default function HomePage() {
  const { tab } = useTabStore();
  return (
    <BasePage>
      {tabs[tab].content}
    </BasePage>
  );
}
