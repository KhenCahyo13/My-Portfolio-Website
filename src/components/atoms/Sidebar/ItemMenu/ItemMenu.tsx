import { FC, memo } from "react";
import { ItemMenuProps } from "./ItemMenu.types";
import ItemMenuView from "./ItemMenu.view";

const ItemMenu: FC<ItemMenuProps> = ({ children, parenttype, isActive }) => {
    if (parenttype !== "MenuList") {
        throw new Error("ItemMenu must be used within Sidebar.MenuList");
    }

    return <ItemMenuView children={children} isActive={isActive} />;
};

export default memo(ItemMenu);