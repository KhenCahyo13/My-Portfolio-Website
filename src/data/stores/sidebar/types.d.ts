export type Menu = 'Home' | 'About';

export interface SidebarStore {
    isOpenSidebar: boolean;
    activeMenu: Menu;
    toggleSidebar: () => void;
}