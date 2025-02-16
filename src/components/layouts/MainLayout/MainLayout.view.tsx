import { Box, Flex } from "@radix-ui/themes";
import { Code2 } from "lucide-react";
import { FC, memo } from "react";
import { menus } from "./MainLayout.data";
import { Outlet } from "react-router";
import Sidebar from "@components/organisms/Sidebar";

const MainLayoutView: FC = () => (
    <Flex height='100vh' direction='row'>
        {/* Sidebar */}
        <Sidebar.Root>
            <Sidebar.Logo>
                <Code2 size={24} />
            </Sidebar.Logo>
            <Sidebar.MenuList>
                {menus.map((menu) => (
                    <Sidebar.ItemMenu key={menu.label}>
                        {menu.icon}
                    </Sidebar.ItemMenu>
                ))}
            </Sidebar.MenuList>
        </Sidebar.Root>
        {/* End of Sidebar */}

        {/* Content */}
        <Box px='4' py='6' height='100%' flexGrow='1' overflow='hidden' position='relative'>
            <Outlet />
        </Box>
        {/* End of Content */}
    </Flex>
);

export default memo(MainLayoutView);