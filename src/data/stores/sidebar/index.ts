import { create } from 'zustand';
import { Menu, SidebarStore } from './types';

export const useSidebarStore = create<SidebarStore>((set) => ({
	isOpenSidebar: false,
    activeMenu: 'About',
    changeActiveMenu: (menu: Menu) => set(() => ({ activeMenu: menu })),
    toggleSidebar: () => set((state) => ({ isOpenSidebar: !state.isOpenSidebar }))
}));
