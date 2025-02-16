import { ReactNode } from "react";

export interface Menu {
    label: string;
    icon: ReactNode;
    href?: string;
}