import { ReactNode } from "react";

export interface ItemMenuProps {
    children: ReactNode;
    isActive: boolean;
    parenttype?: string;
}