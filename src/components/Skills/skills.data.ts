import typeScriptSvg from "@/assets/img/skills/typescript-original.svg";
import bootstrapSvg from "@/assets/img/skills/bootstrap-original.svg";
import angularjsSvg from "@/assets/img/skills/angularjs-original.svg";
import reactSvg from "@/assets/img/skills/react-original.svg";
import vuejsSvg from "@/assets/img/skills/vuejs-original.svg";
import nodejsSvg from "@/assets/img/skills/nodejs-original.svg";
import nestjsSvg from "@/assets/img/skills/nestjs-original.svg";
import pythonSvg from "@/assets/img/skills/python-original.svg";
import flaskSvg from "@/assets/img/skills/flask-original.svg";
import phpSvg from "@/assets/img/skills/php-original.svg";
import laravelSvg from "@/assets/img/skills/laravel-original.svg";
import mysqlSvg from "@/assets/img/skills/mysql-original.svg";
import mongodbSvg from "@/assets/img/skills/mongodb-original.svg";
import microsoftsqlserverSvg from "@/assets/img/skills/microsoftsqlserver-original.svg";
import amazonwebservicesSvg from "@/assets/img/skills/amazonwebservices-original-wordmark.svg";
import dockerSvg from "@/assets/img/skills/docker-original.svg";
import gitSvg from "@/assets/img/skills/git-original.svg";
import githubSvg from "@/assets/img/skills/github-original.svg";
import npmSvg from "@/assets/img/skills/npm-original-wordmark.svg";
import spanishSvg from "@/assets/img/languages/es.svg";
import englishSvg from "@/assets/img/languages/gb.svg";

export const skills = [
    {
        id: 1,
        title: "skills.front_end",
        face: "front",
        items: [
            {
                name: "TypeScript",
                img: typeScriptSvg
            },
            {
                name: "Bootstrap",
                img: bootstrapSvg
            },
            {
                name: "Angular",
                img: angularjsSvg
            },
            {
                name: "React",
                img: reactSvg
            },
            {
                name: "Vue.js",
                img: vuejsSvg
            }
        ]
    },
    {
        id: 2,
        title: "skills.back_end",
        face: "up",
        items: [
            {
                name: "Node.js",
                img: nodejsSvg
            },
            {
                name: "NestJS",
                img: nestjsSvg
            },
            {
                name: "Python",
                img: pythonSvg
            },
            {
                name: "Flask",
                img: flaskSvg
            },
            {
                name: "PHP",
                img: phpSvg
            },
            {
                name: "Laravel",
                img: laravelSvg
            }
        ]
    },
    {
        id: 3,
        title: "skills.database",
        face: "left",
        items: [
            {
                name: "MySQL",
                img: mysqlSvg
            },
            {
                name: "MongoDB",
                img: mongodbSvg
            },
            {
                name: "Microsoft SQL Server",
                img: microsoftsqlserverSvg
            }
        ]
    },
    {
        id: 4,
        title: "skills.devops",
        face: "right",
        items: [
            {
                name: "AWS",
                img: amazonwebservicesSvg
            },
            {
                name: "Docker",
                img: dockerSvg
            }
        ]
    },
    {
        id: 5,
        title: "skills.tools",
        face: "bottom",
        items: [
            {
                name: "Git",
                img: gitSvg
            },
            {
                name: "GitHub",
                img: githubSvg
            },
            {
                name: "npm",
                img: npmSvg
            },
        ]
    },
    {
        id: 6,
        title: "skills.languages",
        face: "back",
        items: [
            {
                name: "Spanish",
                img: spanishSvg
            },
            {
                name: "English",
                img: englishSvg
            },
        ]
    },
]
