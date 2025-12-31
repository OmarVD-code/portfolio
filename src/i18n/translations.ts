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
            email: "Email",
            phone: "Phone",
            projects: "Projects",
            contact: "Contact",
        },
        projects: {
            marquee: "HERE ARE SOME PROJECTS I'VE WORKED ON",
            code: "Code",
            1: {
                title: "AMG Soft",
                desc: "I worked for over 3 years on this large internal enterprise system used to manage multiple core business processes across the company. The project was a long-term product developed through continuous iterations and agile sprints. My role involved developing new features, enhancing existing modules, maintaining production code, and optimizing database queries to improve performance and stability.",
            },
            2: {
                title: "Vegas-Inspired Interactive Portfolio",
                desc: "This project combines custom animations, interactive components, and smooth navigation to present my profile, skills, and projects in a memorable and engaging way. A component-based architecture was prioritized, with component reusability, UI state management, internationalization (i18n), and careful attention to visual detail, performance, and overall user experience. This project showcases my focus on UX, technical creativity, and advanced frontend development, balancing strong visual design with well-structured and maintainable code.",
            },
            3: {
                title: "Heroes SPA (AWS Serverless)",
                desc: "Angular SPA connected to a serverless architecture on AWS (Lambda, API Gateway, DynamoDB). Static content is delivered from S3 using CloudFront as a CDN for improved performance. A CI/CD pipeline powered by GitHub Actions automates the build process, deployment to S3, and CloudFront cache invalidation, ensuring consistent and continuous delivery on every commit.",
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
        contact: {
            marquee: "FEEL FREE TO REACH OUT",
            form: {
                name: "Fullname",
                email: "Email",
                message: "Message",
                submit: "Submit",
                success: "Thanks for contacting me! I'll get back to you as soon as possible.",
            }
        }
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
            email: "Correo electrónico",
            phone: "Teléfono",
            projects: "Proyectos",
            contact: "Contacto",
        },
        projects: {
            marquee: "AQUÍ ALGUNOS PROYECTOS EN LOS QUE HE TRABAJADO",
            code: "Código",
            1: {
                title: "AMG Soft",
                desc: "Trabajé durante más de 3 años en este gran sistema interno empresarial, utilizado para gestionar múltiples procesos clave del negocio dentro de la compañía. El proyecto fue un producto de largo plazo, desarrollado mediante iteraciones continuas y sprints ágiles. Mi rol incluyó el desarrollo de nuevas funcionalidades, la mejora de módulos existentes, el mantenimiento de código en producción y la optimización de consultas a base de datos para mejorar el rendimiento y la estabilidad del sistema.",
            },
            2: {
                title: "Portafolio Interactivo basado en Las Vegas",
                desc: "Este proyecto combina animaciones personalizadas, componentes interactivos y navegación fluida para presentar mi perfil, habilidades y proyectos de una forma memorable. Se priorizó una arquitectura basada en componentes, reutilización, control del estado de la UI, internacionalización (i18n) y una atención especial al detalle visual, rendimiento y experiencia de usuario. Este proyecto demuestra mi enfoque en UX, creatividad técnica y desarrollo frontend avanzado, cuidando tanto la estética como la estructura del código.",
            },
            3: {
                title: "Heroes SPA (AWS Serverless)",
                desc: "SPA en Angular conectada a una arquitectura serverless en AWS (Lambda, API Gateway, DynamoDB). Entrega contenido estático desde S3 con CloudFront como CDN para mejor performance. Pipeline CI/CD con GitHub Actions que automatiza build, deploy a S3 e invalidación de CloudFront, garantizando entregas continuas y consistentes con cada commit.",
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
        },
        contact: {
            marquee: "NO DUDES EN CONTACTARME",
            form: {
                name: "Nombres",
                email: "Correo electrónico",
                message: "Mensaje",
                submit: "Enviar",
                success: "Gracias por contactarme. Te responderé lo antes posible.",
            }
        }
    },
} as const;

export type Dictionary = typeof translations.en;
