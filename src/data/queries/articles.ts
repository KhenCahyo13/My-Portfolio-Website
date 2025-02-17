import { Article } from "@pages/Landing/Articles/Articles.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Axios
export const getMediumArticles = async (): Promise<Article> => {
    const response = await axios.get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@khencahyo13",
    );
    return response.data;
};

// React Query
export const useGetMediumArticles = () => {
    return useQuery({
        queryKey: ["articles"],
        queryFn: getMediumArticles,
    });
};
