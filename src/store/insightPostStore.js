import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePostStore = create(
    persist(
        (set) => ({
            selectedPost: null,

            setSelectedPost: (data) => set({ selectedPost: data }),

            clearSelectedPost: () => set({ selectedPost: null }),
        }),
        {
            name: "post-storage", // key in localStorage
        }
    )
);
