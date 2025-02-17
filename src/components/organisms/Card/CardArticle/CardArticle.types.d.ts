import { Feed, Item } from "@pages/Landing/Articles/Articles.types";

export interface CardArticleProps {
    article: Item;
    feed: Feed | undefined;
    index: number;
}

export interface CardArticleViewProps {
    article: Item;
    feed: Feed | undefined;
    index: number;
    ref: (node?: Element | null) => void;
    inView: boolean;
}