import { FormEvent } from 'react';
import { useWeddingStore } from '../stores/wedding';
export const useWedding = () => {
    const firstName = useWeddingStore((state) => state.firstName);
    const lastName = useWeddingStore((state) => state.lastName);

    const setFirstName = useWeddingStore((state) => state.setFirstName);
    const setLastName = useWeddingStore((state) => state.setLastName);

    const guestCount = useWeddingStore((state) => state.guestCount);
    const setGuestCount = useWeddingStore((state) => state.setGuestCount);

    const dateYYYYMMDD = useWeddingStore((state) =>
      state.eventYYYYMMDD(),
    );
    const dateHHMM = useWeddingStore((state) => state.eventHHMM());

    const setEventDate = useWeddingStore((state) => state.setEventDate);
    const setEventTime = useWeddingStore((state) => state.setEventTime);

    const isConfirmed = useWeddingStore((state) => state.isConfirmed);
    const setConfirmationWedding = useWeddingStore(
      (state) => state.setConfirmationWeeding
    );

    const eventDate = useWeddingStore((state) => state.eventDate);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log({ firstName, lastName, guestCount, eventDate, isConfirmed });
    };

    return {
        // ? properties
        guestCount,
        firstName,
        lastName,
        isConfirmed,

        // ! methods
        setGuestCount,
        setFirstName,
        setLastName,
        setConfirmationWedding,
        dateYYYYMMDD,
        dateHHMM,
        setEventDate,
        setEventTime,
        onSubmit
    }
} 