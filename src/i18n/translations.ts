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
        projects: {
            marquee: "HERE ARE SOME PROJECTS I'VE WORKED ON",
            code: "Code",
            1: {
                title: "COGNITO LOGIN",
                desc: "I worked on this project to create a login system using Amazon Cognito. The project was a long-term product developed through continuous iterations and agile sprints. My role involved developing new features, enhancing existing modules, maintaining production code, and optimizing database queries to improve performance and stability.",
            },
            2: {
                title: "SOCIAL NETWORK",
                desc: "I worked on this project to create a social media sharing platform using Amazon DynamoDB. The project was a long-term product developed through continuous iterations and agile sprints. My role involved developing new features, enhancing existing modules, maintaining production code, and optimizing database queries to improve performance and stability.",
            },
            3: {
                title: "AMG SOFT",
                desc: "I worked for over 3 years on this large internal enterprise system used to manage multiple core business processes across the company. The project was a long-term product developed through continuous iterations and agile sprints. My role involved developing new features, enhancing existing modules, maintaining production code, and optimizing database queries to improve performance and stability.",
            }
        },
        skills: {
            marquee: "ROLL THE DICE OR USE THE CONTROL PANEL TO SEE MY SKILLS.",
            controller: {
                roll: "Roll",
                colors: {
                    white: "White",
                    black: "Black"
                },
                show_all: "Show All",
                dice_mode: "Dice Mode"
            },
            front_end: "Front-end",
            back_end: "Back-end",
            devops: "DevOps",
            database: "Database",
            tools: "Tools",
            languages: "Languages"
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
        projects: {
            marquee: "AQUÍ ALGUNOS PROYECTOS EN LOS QUE HE TRABAJADO",
            code: "Código",
            1: {
                title: "LOGIN CON COGNITO",
                desc: "Trabajé en este proyecto para crear un sistema de inicio de sesión utilizando Amazon Cognito. El proyecto fue un producto de largo plazo desarrollado a través de iteraciones continuas y sprints ágiles. Mi rol incluyó el desarrollo de nuevas funcionalidades, la mejora de módulos existentes, el mantenimiento de código en producción y la optimización de consultas a base de datos para mejorar el rendimiento y la estabilidad del sistema.",
            },
            2: {
                title: "RED SOCIAL",
                desc: "Trabajé en este proyecto para crear una plataforma de compartición de medios sociales utilizando Amazon DynamoDB. El proyecto fue un producto de largo plazo desarrollado a través de iteraciones continuas y sprints ágiles. Mi rol incluyó el desarrollo de nuevas funcionalidades, la mejora de módulos existentes, el mantenimiento de código en producción y la optimización de consultas a base de datos para mejorar el rendimiento y la estabilidad del sistema.",
            },
            3: {
                title: "AMG SOFT",
                desc: "Trabajé durante más de 3 años en este gran sistema interno empresarial, utilizado para gestionar múltiples procesos clave del negocio dentro de la compañía. El proyecto fue un producto de largo plazo, desarrollado mediante iteraciones continuas y sprints ágiles. Mi rol incluyó el desarrollo de nuevas funcionalidades, la mejora de módulos existentes, el mantenimiento de código en producción y la optimización de consultas a base de datos para mejorar el rendimiento y la estabilidad del sistema.",
            }
        },
        skills: {
            marquee: "TIRE EL DADO O UTILICE EL PANEL DE CONTROL PARA VER MIS HABILIDADES",
            controller: {
                roll: "Tirar",
                colors: {
                    white: "Blanco",
                    black: "Negro"
                },
                show_all: "Ver todo",
                dice_mode: "Dado"
            },
            front_end: "Front-end",
            back_end: "Back-end",
            devops: "DevOps",
            database: "Bases de datos",
            tools: "Herramientas",
            languages: "Idiomas"
        }
    },
} as const;

export type Dictionary = typeof translations.en;
