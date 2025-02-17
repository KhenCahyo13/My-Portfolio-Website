import { FC } from "react";
import ArticlesView from "./Articles.view";
import { useGetMediumArticles } from "@data/queries/articles";
import NavigatorFallback from "@viewports/Navigator/Navigator.fallback";

const Articles: FC = () => {
    const { data, isLoading, isError } = useGetMediumArticles();

    if (isLoading) return (
        <NavigatorFallback />
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