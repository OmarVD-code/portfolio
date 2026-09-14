import type { Lang } from "@/i18n/translations";
import cvIcon from "@/assets/img/about/cv.png";
import githubIcon from "@/assets/img/about/github.png";
import linkedinIcon from "@/assets/img/about/linkedin.png";
import aiPractitionerBadge from "@/assets/img/badges/aws-ai-practitioner-badge.png";
import cloudPractitionerBadge from "@/assets/img/badges/aws-cloud-practitioner-badge.png";

type LocalizedHref = Record<Lang, string>;

export interface ProfessionalLink {
    id: "cv" | "github" | "linkedin";
    labelKey: string;
    icon: string;
    href: string | LocalizedHref;
}

export interface Certification {
    id: "aws-ai-practitioner" | "aws-cloud-practitioner";
    nameKey: string;
    image: string;
    href: string;
}

export const professionalLinks: ProfessionalLink[] = [
    {
        id: "cv",
        labelKey: "about.profile.links.cv",
        icon: cvIcon,
        href: {
            es: "/cv/es.pdf",
            en: "/cv/en.pdf",
        },
    },
    {
        id: "github",
        labelKey: "about.profile.links.github",
        icon: githubIcon,
        href: "https://github.com/OmarVD-code",
    },
    {
        id: "linkedin",
        labelKey: "about.profile.links.linkedin",
        icon: linkedinIcon,
        href: "https://www.linkedin.com/in/omar-villarreal1",
    },
];

export const certifications: Certification[] = [    
    {
        id: "aws-cloud-practitioner",
        nameKey: "about.profile.badges.cloud_practitioner",
        image: cloudPractitionerBadge,
        href: "https://www.credly.com/badges/e95e60aa-d557-4f40-afa7-14b6bd0ae085",
    },
    {
        id: "aws-ai-practitioner",
        nameKey: "about.profile.badges.ai_practitioner",
        image: aiPractitionerBadge,
        href: "https://www.credly.com/badges/84669029-6f2c-4294-8b6b-ce060ede24a3",
    },
];

export function resolveProfessionalLinkHref(
    link: ProfessionalLink,
    lang: Lang,
): string {
    return typeof link.href === "string" ? link.href : link.href[lang];
}
