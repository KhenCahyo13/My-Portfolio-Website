import { MenuType } from "@data/stores/sidebar/types";
import { ReactNode } from "react";

export interface SocialMediaLink {
    href: string;
    icon: ReactNode;
    rotate: number;
}

export interface LandingViewProps {
    activeMenu: MenuType;
}