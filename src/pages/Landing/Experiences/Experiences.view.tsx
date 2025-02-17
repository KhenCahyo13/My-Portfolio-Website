import {
    Box,
    Button,
    Card,
    Flex,
    Heading,
    Text,
} from "@radix-ui/themes";
import { Dot } from "lucide-react";
import { FC, memo } from "react";
import { ExperiencesViewProps } from "./Experiences.types";
import { experienceTabs } from "./Experiences.data";
import { motion } from "motion/react";
import { calculateDuration } from "@utils/datetime";

const ExperiencesView: FC<ExperiencesViewProps> = ({ activeTab, handleChangeActiveTab, dataExperienceByActiveTab }) => (
    <Flex direction={{ initial: 'column', md: 'row' }} gapX="8" gapY='4' height='100vh' py='6' px={{ initial: "6", lg: "9" }}>
        <Flex pr={{ initial: '0', md: '8' }} direction="column" gapY="4" className="border-r-0 md:border-r-2 md:border-gray-800">
            <Heading as="h1" size={{ initial: "6", md: "7" }}>
                EXPERIENCES
            </Heading>
            <Box width={{ initial: '100%', md: '236px' }} maxWidth={{ initial: '100%', md: '272px' }}>
                <Card>
                    <Flex direction={{ initial: 'row', md: 'column' }} gapY="2" gapX='2' overflowX={{ initial: 'scroll', md: 'auto' }}>
                        {experienceTabs.map((tab) => (
                            <Button key={tab.label} color={tab.label === activeTab ? 'blue' : 'gray'} variant="soft" onClick={() => handleChangeActiveTab(tab.label)}>
                                {tab.label}
                            </Button>
                        ))}
                    </Flex>
                </Card>
            </Box>
        </Flex>
        <Box flexGrow="1">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {dataExperienceByActiveTab.map((data, index) => (
                    <li key={index} className="mb-6 ms-5">
                        <div className={`absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 ${data.stillActive ? 'dark:bg-blue-500' : 'dark:bg-gray-700' }`}></div>
                        <motion.div
                            key={data.id}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Flex direction="column">
                                <Heading as="h2" size={{ initial: '4', md: '5' }}>
                                    {data.position}
                                </Heading>
                                <Flex direction="row" align="center">
                                    <Text as="span" size="2">
                                        {data.startDate} - {data.endDate}
                                    </Text>
                                    <Dot />
                                    <Text as="span" size="2" color="blue">
                                        {calculateDuration(data.startDate, data.endDate)}
                                    </Text>
                                </Flex>
                                <Text as="span" size="2">
                                    {data.type}
                                </Text>
                                <Text as="p" color="gray">
                                    {data.description}
                                </Text>
                            </Flex>
                        </motion.div>
                    </li>
                ))}
            </ol>
        </Box>
    </Flex>
);

export default memo(ExperiencesView);
