import { FC, memo } from "react";
import { motion } from "motion/react";
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import { CardImagePreviewViewProps } from "./CardImagePreview.types";

const CardImagePreview: FC<CardImagePreviewViewProps> = ({
    label,
    image,
    index,
    ref,
    inView,
}) => (
    <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={{
            x: inView ? 0 : -100,
            opacity: inView ? 1 : 0,
        }}
        transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: index * 0.3,
        }}
    >
        <Card>
            <Flex
                direction="column"
                gapY="3"
                align="center"
                justify="center"
                height={{ initial: "8rem", md: "10rem" }}
            >
                <Box
                    width={{ initial: "5rem", md: "6rem" }}
                    height={{ initial: "5rem", md: "6rem" }}
                >
                    <img
                        src={image}
                        alt={label}
                        className="object-cover h-full w-full rounded-md"
                    />
                </Box>
                <Text align="center" className="font-medium flex-1">
                    {label}
                </Text>
            </Flex>
        </Card>
    </motion.div>
);

export default memo(CardImagePreview);
