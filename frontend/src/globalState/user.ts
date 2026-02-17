import { create } from "zustand";

interface UserState {
  userId: number | null;
  setUserId: (id: number) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  // Initial State
  userId: null,

  // Actions
  setUserId: (id: number) => set({ userId: id }),

  clearUser: () => set({ userId: null }),
}));
