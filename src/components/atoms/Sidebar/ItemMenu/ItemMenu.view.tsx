import { IconButton } from '@radix-ui/themes';
import { FC, memo } from 'react';
import { ItemMenuProps } from './ItemMenu.types';

const ItemMenuView: FC<ItemMenuProps> = ({ children, onClick, isActive }) => (
	<IconButton onClick={onClick} color='gray' variant={isActive ? 'surface' : 'soft'} size='3'>
		{children}
	</IconButton>
);

export default memo(ItemMenuView);
