export interface CardImagePreviewProps {
    label: string;
    image: string;
    index: number;
}

export interface CardImagePreviewViewProps {
    label: string;
    image: string;
    index: number;
    ref: (node?: Element | null) => void;
    inView: boolean;
}
