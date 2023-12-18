import { StateStorage, createJSONStorage } from "zustand/middleware";
const firebaseBaseUrl = 'https://zustand-react-default-rtdb.firebaseio.com/accounts';
const firebaseDB: StateStorage = {
    getItem: async  function (name: string): Promise<string | null> {
        try {
            const data = await fetch(`${firebaseBaseUrl}/${name}.json`).then((res) => res.json());
            return data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    },

    setItem: async function (name: string, value: string):  Promise<void> {
        try {
            const data = await fetch(`${firebaseBaseUrl}/${name}.json`,
                { method: 'PUT', body: value }
            ).then((res) => res.json());
            return data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    },

    removeItem: async function (name: string): Promise<void> {
       try {
            const data = await fetch(`${firebaseBaseUrl}/${name}.json`,
                { method: 'DELETE'}
            ).then((res) => res.json());
            return data;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}

export const firebaseStorage = createJSONStorage(() => firebaseDB);