import { Box, Flex } from "@radix-ui/themes";
import { FC, Fragment } from "react";
import HashLoader from "react-spinners/HashLoader";

const NavigatorFallback: FC = () => (
    <Fragment>
        <Box
            position="fixed"
            className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
        >
            <div className="size-[44rem] md:size-[64rem] lg:size-[80rem] rounded-full bg-radial from-blue-700/30 via-transparent to-transparent"></div>
        </Box>
        <Flex height='100vh' width='100%' align='center' justify='center'>
            <HashLoader color="#ffffff" loading={true} size={44} />
        </Flex>
    </Fragment>
);

export default NavigatorFallback;