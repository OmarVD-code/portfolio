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
            marquee: "Pull the lever and see what happens!",
            title: "ABOUT ME",
            description: "Fullstack Developer with over 3 years of experience building real, business-oriented systems. I have worked on the development of critical modules, dashboards, end-to-end workflows, and business rules for production web applications. I have led and supervised other developers, supporting code reviews, technical decision-making, and architectural improvements, always focusing on code quality, maintainability, and performance.",
            experience: "Experience",
            years: "years",
            role: "Role",
            role_answer: "Fullstack Developer",
            phone: "Phone",
            projects: "Projects",
            contact: "Contact",
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
            cta: "Ver mi trabajo",
        },
        about: {
            marquee: "¡Tire de la palanca y vea lo que sucede!",
            title: "SOBRE MÍ",
            description: "Desarrollador Fullstack con más de 3 años de experiencia construyendo sistemas reales orientados al negocio. He trabajado en el desarrollo de módulos críticos, dashboards, flujos completos y reglas de negocio para aplicaciones web en producción. He liderado y supervisado a otros desarrolladores, apoyando en revisiones de código, toma de decisiones técnicas y mejoras de arquitectura, siempre con foco en la calidad, mantenibilidad y rendimiento.",
            experience: "Experiencia",
            years: "años",
            role: "Rol",
            role_answer: "Desarrollador Fullstack",
            phone: "Teléfono",
            projects: "Proyectos",
            contact: "Contacto",
        },
    },
} as const;

export type Dictionary = typeof translations.en;
