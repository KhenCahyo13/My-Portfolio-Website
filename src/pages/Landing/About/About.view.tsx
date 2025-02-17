import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { FC, Fragment, memo } from "react";
import { motion } from "motion/react";

const AboutView: FC = () => (
    <Fragment>
        <Box
            position="absolute"
            className="top-0 -right-1/2 -translate-y-1/5 z-[-1] md:top-1/2 md:-translate-y-1/2 md:-right-40"
        >
            <div className="size-[44rem] md:size-[64rem] lg:size-[80rem] rounded-full bg-radial from-blue-700/30 via-transparent to-transparent"></div>
        </Box>
        <Flex
            direction={{ initial: "column", md: "row" }}
            gapY="6"
            gapX="8"
            justify="center"
            align="center"
        >
            <Box
                width={{ initial: "12rem", md: "48rem", lg: "60rem" }}
                height={{ initial: "16rem", md: "20rem", lg: "28rem" }}
            >
                <motion.img
                    src="https://i.pinimg.com/736x/31/80/20/3180209e6266787131f4b63126da4e1d.jpg"
                    alt="Profile Image"
                    className="object-cover h-full w-full rounded-md"
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                />
            </Box>

            {/* About Me */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 25 }}
            >
                <Flex
                    direction="column"
                    gapY="4"
                    height={{ initial: "100%", md: "100vh" }}
                    justify={{ initial: "start", md: "center" }}
                >
                    <Heading as="h1" size={{ initial: "6", md: "7" }}>
                        ABOUT ME
                    </Heading>
                    <Flex direction="column" gapY="2">
                        <Text as="p" className="font-oxanium">
                            Hello! I'm{" "}
                            <Text color="blue" className="font-medium">
                                Khen Muhammad Cahyo
                            </Text>
                            , a student at the{" "}
                            <Text color="blue" className="font-medium">
                                State Polytechnic of Malang
                            </Text>{" "}
                            with a deep passion for App Development, both Web
                            and Mobile. For over three years, I have been
                            continuously learning and honing my skills in
                            building intuitive and efficient applications.
                        </Text>
                        <Text as="p" className="font-oxanium">
                            Beyond coding, I have a strong curiosity for
                            emerging technologies and enjoy exploring new
                            fields. Currently, I am expanding my knowledge in{" "}
                            <Text color="blue" className="font-medium">
                                Machine Learning
                            </Text>
                            , driven by my enthusiasm for innovation and
                            problem-solving. I believe that technology has the
                            power to create meaningful solutions, and I’m always
                            eager to learn, experiment, and grow as a developer.
                        </Text>
                    </Flex>
                    <Flex direction="row" gapX="2">
                        <Button>Download CV</Button>
                    </Flex>
                </Flex>
            </motion.div>
        </Flex>
    </Fragment>
);

export default memo(AboutView);
