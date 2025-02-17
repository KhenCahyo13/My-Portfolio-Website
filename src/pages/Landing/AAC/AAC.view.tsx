import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import { FC, Fragment, memo } from "react";
import { aac } from "./AAC.data";
import CardImagePreview from "@components/organisms/Card/CardImagePreview";

const AACView: FC = () => (
    <Fragment>
        <Box
            position="fixed"
            className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
        >
            <div className="size-[44rem] md:size-[64rem] lg:size-[80rem] rounded-full bg-radial from-blue-700/30 via-transparent to-transparent"></div>
        </Box>
        <Flex
            direction="column"
            justify="center"
            gapY="4"
            py="6"
            px={{ initial: "6", lg: "9" }}
        >
            <Heading as="h1" size={{ initial: "6", md: "7" }}>
                LICENSE AND CERTIFICATION
            </Heading>
            <Grid columns={{ initial: "2", md: "4", lg: "6" }} gap="4">
                {aac.map((aac, index) => (
                    <CardImagePreview
                        key={aac.label}
                        label={aac.label}
                        image={aac.image}
                        index={index}
                    />
                ))}
            </Grid>
        </Flex>
    </Fragment>
);

export default memo(AACView);
