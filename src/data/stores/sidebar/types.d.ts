export type Menu = 'Home' | 'About';

export interface SidebarStore {
    isOpenSidebar: boolean;
    activeMenu: Menu;
    changeActiveMenu: (menu: Menu) => void;
    toggleSidebar: () => void;
}