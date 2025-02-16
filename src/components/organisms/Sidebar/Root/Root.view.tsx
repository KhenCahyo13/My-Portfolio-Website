import { FC, memo } from "react";
import { RootProps } from "./Root.types";
import { Flex } from "@radix-ui/themes";

const RootView: FC<RootProps> = ({ children }) => (
    <Flex
        px='4' py='6' height='100%' direction='column' align='center' className="bg-gray-900 md:bg-gray-900/10"
        position='relative'
    >
        {children}
    </Flex> 
);

export default memo(RootView);