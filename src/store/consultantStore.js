import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useConsultantStore = create(
  persist(
    (set) => ({
      consultant: null,
      setConsultant: (consultant) => set({ consultant }),
      clearConsultant: () => set({ consultant: null }),
    }),
    {
      name: "consultant-storage", // key in localStorage
      getStorage: () => localStorage, // default is localStorage, you can change to sessionStorage
    }
  )
);
