import projectAmg from "@/assets/img/projects/project-amg.png";
import projectPortfolio from "@/assets/img/projects/project-portfolio.png";
import projectComic from "@/assets/img/projects/project-comic.png";
import projectAgro from "@/assets/img/projects/project-agro.png";

export const projects = [
    {
        id: 1,
        title: "projects.1.title",
        desc: "projects.1.desc",
        img: projectAmg,
        tools: ["Vue.js", "Laravel", "NestJS", "TypeScript", "MySQL", "MongoDB", "AWS Lambda", "AWS Amplify", "Scrum"],
        demo: "https://www.front.amgsoft.us/",
        code: "",
        show_code: false,
        show_demo: true,
    },
    {
        id: 2,
        title: "projects.2.title",
        desc: "projects.2.desc",
        img: projectPortfolio,
        tools: ["React", "TypeScript", "Vite", "CSS Animations", "i18n", "UX/UI Design"],
        demo: "",
        code: "https://github.com/OmarVD-code/portfolio",
        show_code: true,
        show_demo: false,
    },
    {
        id: 3,
        title: "projects.3.title",
        desc: "projects.3.desc",
        img: projectComic,
        tools: ["Angular", "TypeScript", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront", "CI/CD", "GitHub Actions"],
        demo: "https://dsbhayu79n54j.cloudfront.net/#/heroes",
        code: "https://github.com/OmarVD-code/marvel-dc-comic",
        show_code: true,
        show_demo: true,
    },
    {
        id: 4,
        title: "projects.4.title",
        desc: "projects.4.desc",
        img: projectAgro,
        tools: ["Vue.js", "Laravel", "MySQL", "Sass", "PhpSpreadsheet", "Laravel Auth", "Custom middlewares"],
        demo: "",
        code: "https://github.com/OmarVD-code/agroproject/tree/master",
        show_code: true,
        show_demo: false,
    },
];