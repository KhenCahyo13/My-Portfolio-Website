export type MenuType = 'Home' | 'About' | 'Skills';

export interface SidebarStore {
    isOpenSidebar: boolean;
    activeMenu: MenuType;
    changeActiveMenu: (menu: Menu) => void;
    toggleSidebar: () => void;
}