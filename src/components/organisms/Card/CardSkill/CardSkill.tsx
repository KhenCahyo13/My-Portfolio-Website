import { FC, memo } from "react";
import CardSkillView from "./CardSkill.view";
import { useInView } from "react-intersection-observer";
import { CardSkillProps } from "./CardSkill.types";

const CardSkill: FC<CardSkillProps> = ({ skill, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return <CardSkillView
        skill={skill}
        index={index}
        ref={ref}
        inView={inView}
    />
};

export default memo(CardSkill);