import { create } from "zustand";

export enum BearFamily  {
    'polar',
    'panda',
    'black'
}

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  increaseBearsPopulation: (by: number, bear: BearFamily) => void;
  computed: {
    totalBears: number;
  }
}

export const useBearStore = create<BearState>()((set, get) => ({
  blackBears: 0,
  polarBears: 0,
  pandaBears: 0,
  increaseBearsPopulation: (by, bear) => {
    switch (BearFamily[bear]) {
        case 'black':
        return set((state) => ({ blackBears: state.blackBears + by }));
        case 'polar':
        return set((state) => ({ polarBears: state.polarBears + by }));
        case 'panda': 
        return set((state) => ({ pandaBears: state.pandaBears + by }));
    }
  },
  computed: {
    get totalBears(): number { 
      return get().blackBears + get().polarBears + get().pandaBears;
    }
  }
}));
