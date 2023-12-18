import { create } from "zustand";
import { devtools, persist} from "zustand/middleware";
import {
  createConfirmationWeddingSlice,
  ConfirmationWeddingSlice,
} from "./confirm.slice";
import { DateSlice, createDateSlice } from "./date_wedding.slice";
import {
  createGuestCounterSlice,
  GuestCounterSlice,
} from "./guest_counter.slice";
import { PersonSlice, createPersonSlice } from "./person.slice";
type shareState = ConfirmationWeddingSlice &
  DateSlice &
  GuestCounterSlice &
  PersonSlice;

export const useWeddingBoundStore = create<shareState>()(
 devtools( 
    persist(
      (...a) => ({
        ...createPersonSlice(...a),
        ...createGuestCounterSlice(...a),
        ...createDateSlice(...a),
        ...createConfirmationWeddingSlice(...a),
      }),
      {name: 'wedding-store'}
    )
  )
);
