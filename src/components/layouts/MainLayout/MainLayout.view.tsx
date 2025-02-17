import { Box, Flex, IconButton } from "@radix-ui/themes";
import { Hash, Menu, X } from "lucide-react";
import { FC, memo } from "react";
import {
    menus,
    openSidebarVariants,
    sidebarIconVariants,
} from "./MainLayout.data";
import { Outlet } from "react-router";
import Sidebar from "@components/organisms/Sidebar";
import { MainLayoutViewProps } from "./MainLayout.types";
import { motion } from "motion/react";
import NavigatorFallback from "@viewports/Navigator/Navigator.fallback";

export const MotionIconButton = motion.create(IconButton);

const MainLayoutView: FC<MainLayoutViewProps> = ({
    isPending,
    isOpenSidebar,
    activeMenu,
    handleChangeUIMenu,
    handleToggleSidebar,
}) => (
    <Flex
        height="100vh"
        direction="row"
        position="relative"
        overflowY="hidden"
        overflowX="hidden"
    >
        {/* Sidebar */}
        <Box display={{ md: "none" }}>
            <motion.div
                initial="closed"
                animate={isOpenSidebar ? "open" : "closed"}
                variants={openSidebarVariants}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute left-0 top-0 h-full z-10"
            >
                <Sidebar.Root>
                    <Sidebar.Logo>
                        <Hash size={32} />
                    </Sidebar.Logo>
                    <Sidebar.MenuList>
                        {menus.map((menu) => (
                            <Sidebar.ItemMenu
                                onClick={() => handleChangeUIMenu(menu.label)}
                                isActive={menu.label === activeMenu}
                                key={menu.label}
                            >
                                {menu.icon}
                            </Sidebar.ItemMenu>
                        ))}
                    </Sidebar.MenuList>
                </Sidebar.Root>
            </motion.div>
        </Box>
        <Box display={{ initial: "none", md: "block" }}>
            <Sidebar.Root>
                <Sidebar.Logo>
                    <Hash size={24} />
                </Sidebar.Logo>
                <Sidebar.MenuList>
                    {menus.map((menu) => (
                        <Sidebar.ItemMenu
                            onClick={() => handleChangeUIMenu(menu.label)}
                            isActive={menu.label === activeMenu}
                            key={menu.label}
                        >
                            {menu.icon}
                        </Sidebar.ItemMenu>
                    ))}
                </Sidebar.MenuList>
            </Sidebar.Root>
        </Box>
        {/* End of Sidebar */}

        {/* Content */}
        <Flex
            direction="column"
            flexGrow="1"
            height="100%"
            overflowX="hidden"
            overflowY="scroll"
        >
            {/* Render Sidebar Button */}
            <motion.div
                animate={{ justifyContent: isOpenSidebar ? "end" : "start" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`px-12 py-6 flex md:hidden ${isOpenSidebar ? "justify-end" : "justify-start"}`}
            >
                <MotionIconButton
                    variant="ghost"
                    onClick={handleToggleSidebar}
                    initial="closed"
                    animate={isOpenSidebar ? "open" : "closed"}
                    variants={{
                        open: { x: 20 },
                        closed: { x: -20 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <motion.div
                        variants={sidebarIconVariants}
                        initial="closed"
                        animate={isOpenSidebar ? "open" : "closed"}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpenSidebar ? (
                            <X size={24} className="text-gray-100" />
                        ) : (
                            <Menu size={24} className="text-gray-100" />
                        )}
                    </motion.div>
                </MotionIconButton>
            </motion.div>
            {/* End of Render Sidebar Button */}
            {/* Render UI Menu */}
            {isPending ? (
                <NavigatorFallback />
            ) : (
                <Outlet />
            )}
            {/* End of Render UI Menu */}
        </Flex>
        {/* End of Content */}
    </Flex>
);

export default memo(MainLayoutView);
