import { create } from 'zustand';

type Drawertore = {
  open: boolean;
  setDrawerStore: (open: boolean) => void;
};

export const useDrawerStore = create<Drawertore>(set => ({
  open: false,
  setDrawerStore: open => set({ open }),
}));
