import { ReactNode } from "react";

export interface Menu {
    label: string;
    icon: ReactNode;
    href?: string;
}

export interface MainLayoutViewProps {
    isOpenSidebar: boolean;
    handleToggleSidebar: () => void;
}