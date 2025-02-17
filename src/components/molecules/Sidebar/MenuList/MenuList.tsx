import {
    Children,
    cloneElement,
    FC,
    isValidElement,
    memo,
    useMemo,
} from "react";
import MenuListView from "./MenuList.view";
import { MenuListProps } from "./MenuList.types";

const MenuList: FC<MenuListProps> = ({ children, parenttype }) => {
    if (parenttype !== "Root") {
        throw new Error("MenuList must be used within Sidebar.Root");
    }

    const childrenWithParentType = useMemo(() => {
        return Children.map(children, (child) =>
            isValidElement(child)
                ? cloneElement(child, { parenttype: "MenuList" } as {
                      parenttype: string;
                  })
                : child,
        );
    }, [children]);

    return <MenuListView children={childrenWithParentType} />;
};

export default memo(MenuList);
