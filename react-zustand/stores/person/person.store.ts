import { type StateCreator, create } from 'zustand';
import { persist } from 'zustand/middleware';
import { customSessionStorage } from '../storages/session-storage';

interface PersonState {
    firstName: string;
    lastName: string;
}

interface Actions {
    setFirstName: (value: string) => void;
    setLastName: (value: string) => void;
}

const storeApi: StateCreator<PersonState & Actions> = (set) => ({
    firstName: '',
    lastName: '',
    setFirstName: (value: string) => set((state) => ({firstName: state.firstName = value})),
    setLastName: (value: string) => set((state) =>({lastName: state.lastName = value})),
});




export const usePersonStore = create<PersonState & Actions>()(
    persist(
        storeApi, 
        {
            name: 'peson-storage',
            storage: customSessionStorage,
        }
    )
);