import { Home, Info } from 'lucide-react';
import { Menu } from './MainLayout.types';
import { motion } from 'motion/react';
import { IconButton } from '@radix-ui/themes';

export const menus: Menu[] = [
	{
		label: 'Home',
		icon: <Home size={18} />,
	},
	{
		label: 'About',
		icon: <Info size={18} />,
	},
];

export const MotionIconButton = motion.create(IconButton);

export const sidebarIconVariants = {
	open: { rotate: 180, opacity: 1, scale: 1 },
	closed: { rotate: 0, opacity: 1, scale: 1 },
};

export const openSidebarVariants = {
	open: { x: 0, opacity: 1 },
	closed: { x: '-100%', opacity: 0 },
};
