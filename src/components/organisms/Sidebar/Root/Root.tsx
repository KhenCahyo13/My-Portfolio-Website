import { Children, cloneElement, FC, isValidElement, memo, useMemo } from 'react';
import { RootProps } from './Root.types';
import RootView from './Root.view';

const Root: FC<RootProps> = ({ children }) => {
	const childrenWithParentType = useMemo(() => {
		return Children.map(children, (child) =>
			isValidElement(child)
				? cloneElement(child, { parenttype: 'Root' } as {
						parenttype: string;
				  })
				: child
		);
	}, [children]);

	return <RootView children={childrenWithParentType} />;
};

export default memo(Root);
