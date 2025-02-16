import { FC } from "react";
import LandingView from "./Landing.view";
import { useSidebarStore } from "@data/stores/sidebar";

const Landing: FC = () => {
    const { activeMenu }  = useSidebarStore();

    return <LandingView
        activeMenu={activeMenu}
    />;
};

export default Landing;