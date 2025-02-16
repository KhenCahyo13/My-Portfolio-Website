import { Home, Info } from "lucide-react";
import { Menu } from "./MainLayout.types";

export const menus: Menu[] = [
    {
        label: "Home",
        icon: <Home size={18} />
    },
    {
        label: "About",
        icon: <Info size={18} />
    },
]