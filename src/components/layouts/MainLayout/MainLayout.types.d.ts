import { MenuType } from "@data/stores/sidebar/types";
import { ReactNode } from "react";

export interface Menu {
    label: MenuType;
    icon: ReactNode;
    href?: string;
}

export interface MainLayoutViewProps {
    isOpenSidebar: boolean;
    activeMenu: MenuType;
    handleChangeUIMenu: (menu: MenuType) => void;
    handleToggleSidebar: () => void;
}
