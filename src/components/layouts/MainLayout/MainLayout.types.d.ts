import { ReactNode } from "react";
import { Menu } from '@data/stores/sidebar/types';

export interface Menu {
    label: Menu;
    icon: ReactNode;
    href?: string;
}

export interface MainLayoutViewProps {
    isOpenSidebar: boolean;
    activeMenu: Menu;
    handleChangeUIMenu: (menu: MenuType) => void;
    handleToggleSidebar: () => void;
}