import { FC } from "react";
import ArticlesView from "./Articles.view";
import { useGetMediumArticles } from "@data/queries/articles";

const Articles: FC = () => {
    const { data, isLoading, isError } = useGetMediumArticles();

    if (isLoading) return (
        'Loading...'
    );

    if (isError) return (
        'Error!'
    );

    return <ArticlesView
        articles={data?.items}
        feed={data?.feed}
    />
};

export default Articles;