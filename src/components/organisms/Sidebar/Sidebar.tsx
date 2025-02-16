import { SidebarCompoundComponents } from './Sidebar.types';
import Root from './Root';
import Logo from '@components/atoms/Sidebar/Logo';
import MenuList from '@components/molecules/Sidebar/MenuList';
import ItemMenu from '@components/atoms/Sidebar/ItemMenu';

const Sidebar: SidebarCompoundComponents = {
    Root: Root,
    Logo: Logo,
    MenuList: MenuList,
    ItemMenu: ItemMenu
};

Sidebar.Root = Root;
Sidebar.Logo = Logo;
Sidebar.MenuList = MenuList;
Sidebar.ItemMenu = ItemMenu;

export default Sidebar;
