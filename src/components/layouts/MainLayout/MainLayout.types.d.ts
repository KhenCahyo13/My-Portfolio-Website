import { ReactNode } from "react";
import { Menu } from '@data/stores/sidebar/types';

export interface Menu {
    label: string;
    icon: ReactNode;
    href?: string;
}

export interface MainLayoutViewProps {
    isOpenSidebar: boolean;
    activeMenu: Menu;
    handleToggleSidebar: () => void;
}