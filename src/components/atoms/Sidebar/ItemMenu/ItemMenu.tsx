import { FC, memo } from "react";
import { ItemMenuProps } from "./ItemMenu.types";
import ItemMenuView from "./ItemMenu.view";

const ItemMenu: FC<ItemMenuProps> = ({ children, parenttype }) => {
    if (parenttype !== "MenuList") {
        throw new Error("ItemMenu must be used within Sidebar.MenuList");
    }

    return <ItemMenuView children={children} />;
};

export default memo(ItemMenu);