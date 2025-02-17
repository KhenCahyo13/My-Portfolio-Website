import { Award, Book, Briefcase, Code, Home, Newspaper } from "lucide-react";
import { Menu } from "./MainLayout.types";

export const menus: Menu[] = [
    {
        label: "Home",
        icon: <Home size={20} />,
    },
    {
        label: "About",
        icon: <Book size={20} />,
    },
    {
        label: "Skills",
        icon: <Code size={20} />,
    },
    {
        label: "License and Certification",
        icon: <Award size={20} />,
    },
    {
        label: "Experiences",
        icon: <Briefcase size={20} />,
    },
    {
        label: "Articles",
        icon: <Newspaper size={20} />,
    },
];

export const sidebarIconVariants = {
    open: { rotate: 180, opacity: 1, scale: 1 },
    closed: { rotate: 0, opacity: 1, scale: 1 },
};

export const openSidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
};
