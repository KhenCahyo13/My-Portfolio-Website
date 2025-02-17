import { Skill } from "@pages/Landing/Skills/Skills.type";

export interface CardSkillProps {
    skill: Skill;
    index: number;
}

export interface CardSkillViewProps {
    skill: Skill;
    index: number;
    ref: (node?: Element | null) => void;
    inView: boolean;
}
