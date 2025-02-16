import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { SocialMediaLink } from "./Landing.types";

// Name motion
export const name: string = 'KHEN CAHYO';

export const textVariants = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.20,
		},
	},
};

export const letterVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

// Social media links
export const socialMediaLinks: SocialMediaLink[] = [
    {
        href: '#',
        icon: <Github size={18} />,
        rotate: -12
    },
    {
        href: '#',
        icon: <Linkedin size={18} />,
        rotate: 12
    },
    {
        href: '#',
        icon: <Instagram size={18} />,
        rotate: -12
    },
    {
        href: '#',
        icon: <Facebook size={18} />,
        rotate: 12
    }
];

export const renderMenuUiVariants = {
	initial: { opacity: 0, y: 50 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
};