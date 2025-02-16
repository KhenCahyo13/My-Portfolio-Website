import { IconButton } from '@radix-ui/themes';
import { FC, memo } from 'react';
import { ItemMenuProps } from './ItemMenu.types';

const ItemMenuView: FC<ItemMenuProps> = ({ children, isActive }) => (
	<IconButton color='gray' variant={isActive ? 'surface' : 'soft'}>
		{children}
	</IconButton>
);

export default memo(ItemMenuView);
