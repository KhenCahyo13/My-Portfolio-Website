import { FC, useCallback } from "react";
import MainLayoutView from "./MainLayout.view";
import { useSidebarStore } from "@data/stores/sidebar";

const MainLayout: FC = () => {
    const { isOpenSidebar, activeMenu, toggleSidebar }  = useSidebarStore();

    const handleToggleSidebar = useCallback(() => {
        toggleSidebar();
    }, [toggleSidebar]);

    return <MainLayoutView
        isOpenSidebar={isOpenSidebar}
        activeMenu={activeMenu}
        handleToggleSidebar={handleToggleSidebar}
    />;
};

export default MainLayout;