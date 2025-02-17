import {
    Box,
    Code,
    Flex,
    Heading,
    IconButton,
    Link,
    Text,
} from "@radix-ui/themes";
import { FC, Fragment, memo } from "react";
import { motion } from "motion/react";
import {
    letterVariants,
    name,
    socialMediaLinks,
    textVariants,
} from "./Home.data";

const HomeView: FC = () => (
    <Fragment>
        <Box
            position="absolute"
            className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
        >
            <div className="size-[44rem] md:size-[64rem] lg:size-[80rem] rounded-full bg-radial from-blue-700/30 via-transparent to-transparent"></div>
        </Box>
        <Flex
            direction="column"
            gapY="5"
            justify="center"
            align="center"
            height="100vh"
        >
            <Flex
                direction="column"
                gapY={{ initial: "1", md: "2" }}
                width="fit-content"
            >
                {/* Render Hello */}
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        duration: 0.8,
                        delay: 3.8,
                    }}
                >
                    <Code
                        size={{ initial: "2", md: "3" }}
                        className="w-fit -rotate-12 block"
                    >
                        HELLO, I'M
                    </Code>
                </motion.div>
                {/* End of Render Hello */}

                {/* Render Name */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <Heading as="h1" size={{ initial: "8", md: "9" }}>
                        {name.split("").map((char, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </Heading>
                </motion.div>
                {/* End of Render Name */}

                {/* Render Job */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        delay: 2.5,
                    }}
                    className="text-right"
                >
                    <Text
                        size={{ initial: "3", md: "4" }}
                        weight="medium"
                        className="font-oxanium"
                    >
                        FULLSTACK DEVELOPER
                    </Text>
                </motion.div>
                {/* End of Render Job */}
            </Flex>

            {/* Render Social Media links */}
            <Flex direction="row" gapX="6">
                {socialMediaLinks.map((link, index) => (
                    <Link key={index} href={link.href}>
                        <IconButton asChild>
                            <motion.div
                                initial={{ x: -100, rotate: 0, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    rotate: link.rotate,
                                    opacity: 1,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    duration: 0.8,
                                    delay: 4.5 + index * 0.4,
                                }}
                                className="block"
                            >
                                {link.icon}
                            </motion.div>
                        </IconButton>
                    </Link>
                ))}
            </Flex>
            {/* End of Render Social Media links */}
        </Flex>
    </Fragment>
);

export default memo(HomeView);
