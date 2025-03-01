import { create } from 'zustand';

type TabStore = {
  setTabStore: (newTab: number) => void;
  tab: number;
};

export const useTabStore = create<TabStore>(set => ({
  setTabStore: newTab => set({ tab: newTab }),
  tab: 0,
}));
