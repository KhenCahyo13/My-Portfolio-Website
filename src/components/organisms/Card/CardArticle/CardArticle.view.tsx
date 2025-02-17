import { FC, memo } from "react";
import { CardArticleViewProps } from "./CardArticle.types";
import { motion } from "motion/react";
import { Avatar, Badge, Box, Card, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { dateTimeConverter } from "@utils/datetime";

const CardArticleView: FC<CardArticleViewProps> = ({
    article,
    feed,
    index,
    inView,
    ref,
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
        <Link key={index} href={article.link} target="_blank">
            <Card className="h-80 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 md:h-[22rem]">
                <Flex direction="column" gapY="4" minHeight="100%">
                    <Box width="100%" height={{ initial: "8rem", md: "10rem" }}>
                        <img
                            src={
                                article.description.match(
                                    /<img[^>]+src="([^">]+)"/,
                                )?.[1]
                            }
                            alt={article.title}
                            className="object-cover h-full w-full rounded-md"
                        />
                    </Box>
                    <Flex direction="column" flexGrow="1" gapY="3">
                        <Flex align="center" justify="between">
                            <Flex align="center" gapX="2">
                                <Avatar
                                    size="2"
                                    src={feed?.image}
                                    fallback={feed?.author[0] ?? "K"}
                                    radius="full"
                                />
                                <Text
                                    size="2"
                                    className="text-gray-100 font-medium"
                                >
                                    {article.author}
                                </Text>
                            </Flex>
                            <Text size="2" color="gray">
                                {dateTimeConverter(article.pubDate)}
                            </Text>
                        </Flex>
                        <Heading
                            as="h2"
                            size={{ initial: "3", md: "5", lg: "4" }}
                            className="text-gray-100"
                        >
                            {article.title}
                        </Heading>
                        <Flex wrap="wrap" gapX="2" gapY="1">
                            {article.categories.map((category, index) => (
                                <Badge key={index}>{category}</Badge>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
            </Card>
        </Link>
    </motion.div>
);

export default memo(CardArticleView);
