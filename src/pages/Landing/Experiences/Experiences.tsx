import { FC, useMemo, useState, useTransition } from "react";
import ExperiencesView from "./Experiences.view";
import { ExperiencesType } from "./Experiences.types";
import {
    ptBeemataIndonesiaExperiences,
    ptSekawanMediaExperiences,
} from "./Experiences.data";

const Experiences: FC = () => {
    const [activeTab, setActiveTab] =
        useState<ExperiencesType>("PT. Sekawan Media");
    const [isPending, startTransition] = useTransition();

    const handleChangeActiveTab = (tab: ExperiencesType) => {
        startTransition(() => {
            setActiveTab(tab);
        });
    };

    const dataExperienceByActiveTab = useMemo(() => {
        return activeTab === "PT. Sekawan Media"
            ? ptSekawanMediaExperiences
            : activeTab === "PT. Beemata Indonesia"
              ? ptBeemataIndonesiaExperiences
              : ptSekawanMediaExperiences;
    }, [activeTab]);

    return (
        <ExperiencesView
            isPending={isPending}
            activeTab={activeTab}
            handleChangeActiveTab={handleChangeActiveTab}
            dataExperienceByActiveTab={dataExperienceByActiveTab}
        />
    );
};

export default Experiences;
