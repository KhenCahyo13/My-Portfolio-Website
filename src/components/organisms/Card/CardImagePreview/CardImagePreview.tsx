import { FC, memo } from "react";
import { useInView } from "react-intersection-observer";
import { CardImagePreviewProps } from "./CardImagePreview.types";
import CardImagePreviewView from "./CardImagePreview.view";

const CardImagePreview: FC<CardImagePreviewProps> = ({
    label,
    image,
    index,
}) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <CardImagePreviewView
            label={label}
            image={image}
            index={index}
            ref={ref}
            inView={inView}
        />
    );
};

export default memo(CardImagePreview);
