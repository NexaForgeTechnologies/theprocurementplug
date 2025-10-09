import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useEventStore = create(
  persist(
    (set) => ({
      event: null,
      setEvent: (event) => set({ event }),
      clearEvent: () => set({ event: null }),
    }),
    {
      name: "event-storage", // key in localStorage
      getStorage: () => localStorage, // default is localStorage, you can change to sessionStorage
    }
  )
);
