import { FC, useCallback, useTransition } from "react";
import MainLayoutView from "./MainLayout.view";
import { useSidebarStore } from "@data/stores/sidebar";
import { MenuType } from "@data/stores/sidebar/types";

const MainLayout: FC = () => {
    const { isOpenSidebar, activeMenu, changeActiveMenu, toggleSidebar } =
        useSidebarStore();

    const [isPending, startTransition] = useTransition();

    const handleChangeUIMenu = (menu: MenuType) => {
        startTransition(() => {
            changeActiveMenu(menu);
        });
    };

    const handleToggleSidebar = useCallback(() => {
        toggleSidebar();
    }, [toggleSidebar]);

    return (
        <MainLayoutView
            isOpenSidebar={isOpenSidebar}
            activeMenu={activeMenu}
            handleChangeUIMenu={handleChangeUIMenu}
            handleToggleSidebar={handleToggleSidebar}
        />
    );
};

export default MainLayout;
