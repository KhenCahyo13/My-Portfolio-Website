import { FC, memo } from "react";
import { motion } from "motion/react";
import { Card, Flex, Text } from "@radix-ui/themes";
import { CardSkillViewProps } from "./CardSkill.types";

const CardSkillView: FC<CardSkillViewProps> = ({
    skill,
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
                <img
                    src={skill.logo}
                    alt={skill.label}
                    className="w-20 md:w-24 rounded"
                />
                <Text align="center" className="font-medium">
                    {skill.label}
                </Text>
            </Flex>
        </Card>
    </motion.div>
);

export default memo(CardSkillView);
