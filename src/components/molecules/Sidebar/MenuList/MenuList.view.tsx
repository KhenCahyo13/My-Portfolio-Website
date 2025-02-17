import { Flex } from "@radix-ui/themes";
import { FC, memo } from "react";
import { MenuListProps } from "./MenuList.types";

const MenuListView: FC<MenuListProps> = ({ children }) => (
    <Flex direction="column" gapY="3" justify="center" height="100%">
        {children}
    </Flex>
);

export default memo(MenuListView);
