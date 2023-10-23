import { create } from "zustand";
import { Store } from "./types/global";
import { createJSONStorage, persist } from "zustand/middleware";

const useStore = create(
  persist((set, get) => ({}), {
    name: "client-store", // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    partialize: (state) => {},
  })
);
