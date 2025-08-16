import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useVenueStore = create(
  persist(
    (set) => ({
      venue: null,
      setVenue: (venue) => set({ venue }),
      clearVenue: () => set({ venue: null }),
    }),
    {
      name: "venue-storage",
      getStorage: () => localStorage,
    }
  )
);
