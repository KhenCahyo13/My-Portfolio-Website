export interface Feed {
    author: string;
    description: string;
    image: string;
    link: string;
    title: string;
    url: string;
}

export interface Item {
    author: string;
    categories: string[];
    content: string;
    description: string;
    enclosure: object;
    guid: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    title: string;
}

export interface Article {
    status: string;
    feed: Feed;
    items: Item[];
}

export interface ArticlesViewProps {
    articles: Item[] | undefined;
    feed: Feed | undefined;
}
