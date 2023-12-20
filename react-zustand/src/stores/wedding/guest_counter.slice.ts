import { StateCreator } from "zustand";

export interface GuestCounterSlice {
    guestCount: number;
    setGuestCount: (gestCount: number) =>  void;
}

export const createGuestCounterSlice: StateCreator<GuestCounterSlice> = (set) => ({
    guestCount: 0,
    setGuestCount: (guestCounte: number) => set({
        guestCount: guestCounte > 0 ? guestCounte : 0,
    }),
});