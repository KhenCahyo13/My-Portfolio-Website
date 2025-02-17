export type MenuType = 'Home' | 'About';

export interface SidebarStore {
    isOpenSidebar: boolean;
    activeMenu: Menu;
    changeActiveMenu: (menu: Menu) => void;
    toggleSidebar: () => void;
}