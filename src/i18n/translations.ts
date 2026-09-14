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
            eyebrow: "Full-stack engineering · Lima, Peru",
            role: "Software Developer",
            intro: "I build reliable digital products that turn complex business needs into clear, scalable experiences.",
            cta: "Explore My Work",
            contact: "Let's talk",
            highlights_label: "Professional highlights",
            years: "Years building products",
            projects: "Selected projects",
            languages: "Languages",
            card_label: "Omar Villarreal profile card",
            card_status: "Available for new challenges",
            card_location: "Lima · Peru",
            scroll: "Discover",
        },
        about: {
            marquee: "Pull the lever and see what happens!",
            title: "About Me",
            description: "Fullstack Developer with over 3 years of experience building real, business-oriented systems. I have worked on the development of critical modules, dashboards, end-to-end workflows, and business rules for production web applications. I have led and supervised other developers, supporting code reviews, technical decision-making, and architectural improvements, always focusing on code quality, maintainability, and performance.",
            experience: "Experience",
            years: "years",
            role: "Role",
            role_answer: "Fullstack Developer",
            email: "Email",
            phone: "Phone",
            projects: "Projects",
            contact: "Contact",
            download_cv: "Download CV",
            title_slot_machine: "Relevant Links"
        },
        projects: {
            marquee: "HERE ARE SOME PROJECTS I'VE WORKED ON",
            case_study: "Selected case",
            technologies: "Technologies used",
            demo: "Live site",
            code: "Code",
            1: {
                title: "AMG Soft",
                desc: "I was part of a team delivering features under agile methodologies (Scrum), focusing on code refactoring, component standardization, and database query optimization. Later, I assumed the role of technical supervisor, leading my own team, coordinating tasks, performing code reviews, and ensuring deliveries met defined timelines. Priority was given to query optimization, system modularization, and the continuous improvement of the existing architecture.",
            },
            2: {
                title: "Vegas-Inspired Interactive Portfolio",
                desc: "I rebuilt my portfolio using React and a component-based architecture, applying a Las Vegas–inspired design to strengthen my frontend profile and visual creativity. The goal was to balance my strong backend background with an attractive, modern, and well-structured interface, prioritizing component reusability, smooth navigation, and user experience.",
            },
            3: {
                title: "Heroes SPA (AWS Serverless)",
                desc: "I took this project as an opportunity to demonstrate my knowledge of AWS by transforming it into an application connected to a serverless architecture. I implemented a real API using AWS Lambda and API Gateway, data persistence with DynamoDB, and an automated CI/CD pipeline using GitHub Actions, taking the project beyond a purely tutorial-based approach.",
            },
            4: {
                title: "Laravel Web Application",
                desc: "The project implements access control through middleware (auth / guest) and an additional layer of security and UX that prevents cached views after login or logout, ensuring a consistent navigation. Priority was given to a clear architecture, separation of responsibilities, and good practices at the route, middleware, and session handling level, offering a solid and scalable foundation for enterprise applications.",
            }
        },
        skills: {
            marquee: "ROLL THE DICE OR USE THE CONTROL PANEL TO SEE MY SKILLS.",
            eyebrow: "The house stack",
            title: "Technical skills, dealt differently.",
            description: "Roll the dice to explore the stack, or show every category at once.",
            controller: {
                label: "Game controls",
                roll: "Roll",
                color_label: "Dice color",
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
            eyebrow: "Place your bet",
            title: "Let's build something valuable.",
            description: "Have a product, challenge or opportunity in mind? Tell me the essentials and I'll get back to you.",
            email_label: "Or email me directly",
            form: {
                name: "Fullname",
                email: "Email",
                message: "Message",
                submit: "Submit",
                name_placeholder: "Your name",
                message_placeholder: "Tell me briefly about your idea",
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
            eyebrow: "Ingeniería full-stack · Lima, Perú",
            role: "Software Developer",
            intro: "Construyo productos digitales sólidos que convierten necesidades complejas de negocio en experiencias claras y escalables.",
            cta: "Ver mi trabajo",
            contact: "Hablemos",
            highlights_label: "Datos profesionales destacados",
            years: "Años creando productos",
            projects: "Proyectos seleccionados",
            languages: "Idiomas",
            card_label: "Tarjeta de presentación de Omar Villarreal",
            card_status: "Disponible para nuevos retos",
            card_location: "Lima · Perú",
            scroll: "Descubrir",
        },
        about: {
            marquee: "¡Tire de la palanca y vea lo que sucede!",
            title: "Sobre mí",
            description: "Desarrollador Fullstack con más de 3 años de experiencia construyendo sistemas reales orientados al negocio. He trabajado en el desarrollo de módulos críticos, dashboards, flujos completos y reglas de negocio para aplicaciones web en producción. He liderado y supervisado a otros desarrolladores, apoyando en revisiones de código, toma de decisiones técnicas y mejoras de arquitectura, siempre con foco en la calidad, mantenibilidad y rendimiento.",
            experience: "Experiencia",
            years: "años",
            role: "Rol",
            role_answer: "Desarrollador Fullstack",
            email: "Correo electrónico",
            phone: "Teléfono",
            projects: "Proyectos",
            contact: "Contacto",
            download_cv: "Descargar CV",
            title_slot_machine: "Links Relevantes"
        },
        projects: {
            marquee: "AQUÍ ALGUNOS PROYECTOS EN LOS QUE HE TRABAJADO",
            case_study: "Caso seleccionado",
            technologies: "Tecnologías utilizadas",
            demo: "Ver proyecto",
            code: "Código",
            1: {
                title: "AMG Soft",
                desc: "Formé parte de un equipo que entregaba funcionalidades bajo metodologías ágiles (Scrum), enfocándonos en refactorizar código, estandarizar componentes y optimizar consultas a base de datos. Posteriormente, asumí el rol de supervisor técnico, liderando un equipo propio, coordinando tareas, revisando código y asegurando entregas dentro de los plazos definidos. Se priorizó la optimización de queries, la modularización del sistema y la mejora progresiva de la arquitectura existente.",
            },
            2: {
                title: "Portafolio Interactivo basado en Las Vegas",
                desc: "Reconstruí mi portafolio utilizando React y una arquitectura basada en componentes, aplicando un diseño inspirado en Las Vegas para reforzar mi perfil frontend y creatividad visual. El objetivo fue equilibrar mi fuerte enfoque backend con una interfaz atractiva, moderna y bien estructurada, priorizando reutilización de componentes, navegación fluida y experiencia de usuario.",
            },
            3: {
                title: "Heroes SPA (AWS Serverless)",
                desc: "Tomé este proyecto como una oportunidad para demostrar mis conocimientos en AWS, transformándolo en una aplicación conectada a una arquitectura serverless. Implementé una API real con AWS Lambda y API Gateway, persistencia en DynamoDB y un pipeline CI/CD automatizado con GitHub Actions, llevando el proyecto más allá del enfoque tutorial.",
            },
            4: {
                title: "Sistema web desarrollado con Laravel",
                desc: "El proyecto implementa control de acceso mediante middleware (auth / guest) y una capa adicional de seguridad y UX que evita el uso de vistas cacheadas tras login o logout, garantizando una navegación consistente. Se priorizó una arquitectura clara, separación de responsabilidades y buenas prácticas a nivel de rutas, middleware y manejo de sesión, ofreciendo una base sólida y escalable para aplicaciones empresariales.",
            }
        },
        skills: {
            marquee: "TIRE EL DADO O UTILICE EL PANEL DE CONTROL PARA VER MIS HABILIDADES",
            eyebrow: "La apuesta tecnológica",
            title: "Habilidades técnicas, presentadas diferente.",
            description: "Tira el dado para explorar el stack o muestra todas las categorías a la vez.",
            controller: {
                label: "Controles de juego",
                roll: "Tirar",
                color_label: "Color del dado",
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
            eyebrow: "Haz tu apuesta",
            title: "Construyamos algo valioso.",
            description: "¿Tienes un producto, reto u oportunidad en mente? Cuéntame lo esencial y me pondré en contacto contigo.",
            email_label: "O escríbeme directamente",
            form: {
                name: "Nombres",
                email: "Correo electrónico",
                message: "Mensaje",
                submit: "Enviar",
                name_placeholder: "Tu nombre",
                message_placeholder: "Cuéntame brevemente sobre tu idea",
                success: "Gracias por contactarme. Te responderé lo antes posible.",
            }
        }
    },
} as const;

export type Dictionary = typeof translations.en;
