import { create } from 'zustand';

interface TabStore {
  tab: number;
  setTabStore: (newTab: number) => void;
}

export const useTabStore = create<TabStore>(set => ({
  setTabStore: newTab => set({ tab: newTab }),
  tab: 0,
}));
