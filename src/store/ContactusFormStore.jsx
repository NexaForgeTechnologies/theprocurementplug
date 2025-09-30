"use client";

import { create } from "zustand";

// Create a zustand store for global form popup state
export const useContactUsFormStore = create((set) => ({
    isOpen: false,
    setIsOpen: (value) => set({ isOpen: value }),
}));
