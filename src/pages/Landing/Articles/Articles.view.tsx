import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { FC, Fragment, memo } from "react";
import { ArticlesViewProps } from "./Articles.types";
import CardArticle from "@components/organisms/Card/CardArticle";

const ArticlesView: FC<ArticlesViewProps> = ({ articles, feed }) => (
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
            py={{ initial: '4', md: '6' }}
            px={{ initial: "6", lg: "9" }}
        >
            <Flex direction="column" gapY="1">
                <Heading as="h1" size={{ initial: "6", md: "7" }}>
                    Articles
                </Heading>
                <Text as="p" className="w-full md:w-[40rem]">
                    Sometimes, when I have free time, I write articles on Medium
                    and I think I can share the knowledge I've gained with
                    people. Here are some of the articles I've written.
                </Text>
            </Flex>
            <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap='4'>
                {articles &&
                    articles.length > 0 &&
                    articles.map((article, index) => (
                        <CardArticle
                            article={article}
                            feed={feed}
                            index={index}
                            key={index}
                        />
                    ))}
            </Grid>
        </Flex>
    </Fragment>
);

export default memo(ArticlesView);
