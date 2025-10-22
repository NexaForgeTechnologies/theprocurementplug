import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLegalStore = create(
  persist(
    (set) => ({
      legal: null,
      setLegal: (legal) => set({ legal }),
      clearLegal: () => set({ legal: null }),
    }),
    {
      name: "legal-storage", // key in localStorage
      getStorage: () => localStorage, // default is localStorage, you can change to sessionStorage
    }
  )
);
