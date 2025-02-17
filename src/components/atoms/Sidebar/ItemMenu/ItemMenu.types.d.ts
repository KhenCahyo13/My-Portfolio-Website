import { ReactNode } from "react";

export interface ItemMenuProps {
    children: ReactNode;
    onClick: () => void;
    isActive: boolean;
    parenttype?: string;
}
