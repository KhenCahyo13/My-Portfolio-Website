import { create } from 'zustand';
import { SidebarStore } from './types';

export const useSidebarStore = create<SidebarStore>((set) => ({
	isOpenSidebar: false,
    toggleSidebar: () => set((state) => ({ isOpenSidebar: !state.isOpenSidebar }))
}));
