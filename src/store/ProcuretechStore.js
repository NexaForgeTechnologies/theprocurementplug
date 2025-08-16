import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProcureTechStore = create(
    persist(
        (set) => ({
            procuretech: null,
            setProcuretech: (procuretech) => set({ procuretech }),
            clearProcuretech: () => set({ procuretech: null }),
        }),
        {
            name: "procuretech-storage", // key in localStorage
            getStorage: () => localStorage, // default is localStorage, you can change to sessionStorage
        }
    )
);
