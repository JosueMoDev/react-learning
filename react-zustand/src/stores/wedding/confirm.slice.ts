import { StateCreator } from "zustand";

export interface ConfirmationWeddingSlice {
    isConfirmed: boolean;
    setConfirmationWeeding: (value: boolean) => void;
}

export const createConfirmationWeddingSlice: StateCreator<ConfirmationWeddingSlice> = (set) => ({
  isConfirmed: false,
  setConfirmationWeeding: (value: boolean) => set({isConfirmed: value}), 
});