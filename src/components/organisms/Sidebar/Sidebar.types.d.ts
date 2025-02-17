import Logo from "@components/atoms/Sidebar/Logo";
import Root from "./Root";
import MenuList from "@components/molecules/Sidebar/MenuList";
import ItemMenu from "@components/atoms/Sidebar/ItemMenu";

export type SidebarCompoundComponents = {
  Root: typeof Root;
  Logo: typeof Logo;
  MenuList: typeof MenuList;
  ItemMenu: typeof ItemMenu;
};
