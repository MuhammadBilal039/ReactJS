import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const store = (set, get) => ({
  name: "bilal khan",
  count: 1,
  increment: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  capitalizeName: () => {
    const { name } = get();
    set({
      name: name.charAt(0).toUpperCase() + name.slice(1),
    });
  },
});

const useMyStore = create(
  devtools(
    persist(store, {
      name: "My Store",
      storage: createJSONStorage(() => sessionStorage),
    }),
  ),
);

export default useMyStore;
