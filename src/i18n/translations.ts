export type Lang = "en" | "es";

export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About Me",
            portfolio: "Portfolio",
            skills: "Skills",
            contact: "Contact",
        },
        hero: {
            cta: "Explore My Work",
        },
        about: {
            title: "ABOUT ME",
        },
    },
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            portfolio: "Portafolio",
            skills: "Habilidades",
            contact: "Contacto",
        },
        hero: {
            cta: "Explorar mi trabajo",
        },
        about: {
            title: "SOBRE MÍ",
        },
    },
} as const;

export type Dictionary = typeof translations.en;
