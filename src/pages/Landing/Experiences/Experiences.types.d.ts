export type ExperiencesType = 'PT. Sekawan Media' | 'PT. Beemata Indonesia';

export interface Experience {
    id: string;
    position: string;
    type: string;
    startDate: string;
    endDate: string;
    description: string;
    stillActive: boolean;
}

export interface Tab {
    label: ExperiencesType;
}

export interface ExperiencesViewProps {
    activeTab: ExperiencesType;
    handleChangeActiveTab: (tab: ExperiencesType) => void;
    dataExperienceByActiveTab: Experience[];
}