export type MenuType = "Home" | "About" | "Skills" | "Experiences" | "License and Certification" | "Articles";

export interface SidebarStore {
    isOpenSidebar: boolean;
    activeMenu: MenuType;
    changeActiveMenu: (menu: Menu) => void;
    toggleSidebar: () => void;
}
