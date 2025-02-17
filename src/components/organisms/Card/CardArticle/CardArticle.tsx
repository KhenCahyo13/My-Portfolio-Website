import { FC, memo } from "react";
import { CardArticleProps } from "./CardArticle.types";
import CardArticleView from "./CardArticle.view";
import { useInView } from "react-intersection-observer";

const CardArticle: FC<CardArticleProps> = ({ article, feed, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return <CardArticleView
        article={article}
        feed={feed}
        index={index}
        ref={ref}
        inView={inView}
    />;
};

export default memo(CardArticle);