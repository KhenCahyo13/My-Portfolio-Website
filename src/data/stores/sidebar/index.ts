import { create } from "zustand";
import { MenuType, SidebarStore } from "./types";

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpenSidebar: false,
  activeMenu: "Skills",
  changeActiveMenu: (menu: MenuType) => set(() => ({ activeMenu: menu })),
  toggleSidebar: () =>
    set((state) => ({ isOpenSidebar: !state.isOpenSidebar })),
}));
