import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useRoundtableStore = create(
    persist(
        (set) => ({
            selectedRoundtable: null,

            setSelectedRoundtable: (data) => set({ selectedRoundtable: data }),

            clearSelectedRoundtable: () => set({ selectedRoundtable: null }),
        }),
        {
            name: "roundtable-storage", // key in localStorage
        }
    )
);
