import { IconButton } from '@radix-ui/themes';
import { FC, memo } from 'react';
import { ItemMenuProps } from './ItemMenu.types';

const ItemMenuView: FC<ItemMenuProps> = ({ children }) => (
	<IconButton color="gray">
		{children}
	</IconButton>
);

export default memo(ItemMenuView);
