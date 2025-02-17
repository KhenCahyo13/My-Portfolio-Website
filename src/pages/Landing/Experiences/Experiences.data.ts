import { getCurrentDate } from "@utils/datetime";
import { Experience, Tab } from "./Experiences.types";

export const experienceTabs: Tab[] = [
    {
        label: "PT. Sekawan Media",
    },
    {
        label: "PT. Beemata Indonesia",
    },
];

export const ptSekawanMediaExperiences: Experience[] = [
    {
        id: "PTSM1",
        position: "FULLSTACK WEB DEVELOPER",
        type: "Internship",
        startDate: "February 2023",
        endDate: "November 2023",
        description: `As a Fullstack Web Developer intern at Sekawan Media's RnD team, I contributed to the development of the Talentnesia Animation LMS using Laravel. I created comprehensive learning modules on Fullstack Laravel, Frontend with ReactJS, Backend with Laravel, and mobile app development using Ionic and React Native to enhance developers' learning experiences. Additionally, I led a workshop at SMKN 6 Malang, teaching Fullstack and Frontend development to students.`,
        stillActive: false,
    },
    {
        id: "PTSM2",
        position: "RESEARCH AND DEVELOPMENT ENGINEER",
        type: "Fulltime - Onsite",
        startDate: "November 2023",
        endDate: "August 2024",
        description: `As a Fullstack Developer, System Analyst, and Engineer Lead at Sekawan Media's RnD Team, I lead development workflows, support co-developers, and manage Git versioning to ensure efficient application development. As a System Analyst, I create blueprints, develop internal libraries, and conduct research to enhance development efficiency. In my Fullstack Developer role, I debug client applications, ensuring high quality, and contribute to internal HR application development. Additionally, as a TEFA Program teacher, I create learning modules and lead workshops at SMKN 6 Malang and SMK Telkom Malang, teaching Fullstack and Frontend development.`,
        stillActive: false,
    },
    {
        id: "PTSM3",
        position: "FULLSTACK WEB DEVELOPER TEACHER",
        type: "Freelance",
        startDate: "August 2024",
        endDate: "November 2024",
        description: `Became a mentor in the TEFA program in the Fullstack Web Developer class of SMK Telkom Malang.`,
        stillActive: false,
    },
    {
        id: "PTSM4",
        position: "FRONTEND DEVELOPER",
        type: "Freelance",
        startDate: "September 2024",
        endDate: "November 2024",
        description: `Frontend Developer in BNPT Simawas Audit App`,
        stillActive: false,
    },
];

export const ptBeemataIndonesiaExperiences: Experience[] = [
    {
        id: "PTBI1",
        position: "FULLSTACK ENGINEER",
        type: "Fulltime Remote",
        startDate: "Desember 2024",
        endDate: getCurrentDate(),
        description: `-`,
        stillActive: true,
    },
];
