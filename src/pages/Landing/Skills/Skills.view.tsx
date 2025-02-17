import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import { FC, Fragment, memo } from "react";
import {
    dbms,
    devops,
    frameworks,
    gits,
    programmingLanguages,
} from "./Skills.data";
import CardSkill from "@components/organisms/Card/CardSkill";

const SkillsView: FC = () => (
    <Fragment>
        <Box
            position="fixed"
            className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
        >
            <div className="size-[44rem] md:size-[64rem] lg:size-[80rem] rounded-full bg-radial from-blue-700/30 via-transparent to-transparent"></div>
        </Box>
        <Flex direction="column" justify="center" gapY="4">
            <Heading as="h1" size={{ initial: "6", md: "7" }}>
                SKILLS
            </Heading>

            {/* Programming Language */}
            <Flex direction="column" gapY="5">
                <Flex direction="column" gapY="3">
                    <Heading as="h2" size={{ initial: "3", md: "4" }}>
                        PROGRAMMING LANGUAGE
                    </Heading>
                    <Grid columns={{ initial: "2", md: "4", lg: "6" }} gap="4">
                        {programmingLanguages.map((skill, index) => (
                            <CardSkill
                                key={skill.label}
                                skill={skill}
                                index={index}
                            />
                        ))}
                    </Grid>
                </Flex>
                {/* End of Programming Language */}

                {/* Framework */}
                <Flex direction="column" gapY="3">
                    <Heading as="h2" size={{ initial: "3", md: "4" }}>
                        FRAMEWORK
                    </Heading>
                    <Grid columns={{ initial: "2", md: "4", lg: "6" }} gap="4">
                        {frameworks.map((skill, index) => (
                            <CardSkill
                                key={skill.label}
                                skill={skill}
                                index={index}
                            />
                        ))}
                    </Grid>
                </Flex>
                {/* End of Framework */}

                {/* DBMS */}
                <Flex direction="column" gapY="3">
                    <Heading as="h2" size={{ initial: "3", md: "4" }}>
                        DBMS
                    </Heading>
                    <Grid columns={{ initial: "2", md: "4", lg: "6" }} gap="4">
                        {dbms.map((skill, index) => (
                            <CardSkill
                                key={skill.label}
                                skill={skill}
                                index={index}
                            />
                        ))}
                    </Grid>
                </Flex>
                {/* End of DBMS */}

                {/* Git */}
                <Flex direction="column" gapY="3">
                    <Heading as="h2" size={{ initial: "3", md: "4" }}>
                        GIT PLATFORM
                    </Heading>
                    <Grid columns={{ initial: "2", md: "4", lg: "6" }} gap="4">
                        {gits.map((skill, index) => (
                            <CardSkill
                                key={skill.label}
                                skill={skill}
                                index={index}
                            />
                        ))}
                    </Grid>
                </Flex>
                {/* End of Git */}

                {/* Containerization */}
                <Flex direction="column" gapY="3">
                    <Heading as="h2" size={{ initial: "3", md: "4" }}>
                        DEVOPS
                    </Heading>
                    <Grid columns={{ initial: "2", md: "4", lg: "6" }} gap="4">
                        {devops.map((skill, index) => (
                            <CardSkill
                                key={skill.label}
                                skill={skill}
                                index={index}
                            />
                        ))}
                    </Grid>
                </Flex>
                {/* End of Containerization */}
            </Flex>
        </Flex>
    </Fragment>
);

export default memo(SkillsView);
