import { create } from "zustand";

export const useRoundtableStore = create((set) => ({
    selectedRoundtable: null,

    setSelectedRoundtable: (data) => set({ selectedRoundtable: data }),

    clearSelectedRoundtable: () => set({ selectedRoundtable: null }),
}));
