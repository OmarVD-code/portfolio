import { useI18n } from "@/i18n/I18nProvider";

type Props = {
    id: number;
    title: string;
    desc: string;
    img: string;
    tools: string[];
    demo: string;
    code: string;
    show_code: boolean;
    show_demo: boolean;
};

export default function ProjectCard({ id, title, desc, img, tools, demo, code, show_code, show_demo }: Props) {
    const { t } = useI18n();

    return (
        <article className="project">
            <div className="project-header">
                <img src={img} alt="" />
                <span className="project-number">0{id}</span>
            </div>
            <div className="project-body">
                <p className="project-kicker">{t("projects.case_study")}</p>
                <h3 className="project-title">{t(title)}</h3>
                <p className="project-description">{t(desc)}</p>
                <div className="project-tools" aria-label={t("projects.technologies")}>
                    {tools.slice(0, 6).map(tool => (
                        <span key={tool} className="tag">{tool}</span>
                    ))}
                </div>
            </div>
            {(show_demo || show_code) && (
                <footer className="project-footer">
                    {show_demo && (
                        <a href={demo} target="_blank" rel="noreferrer">
                            {t("projects.demo")} <span aria-hidden="true">↗</span>
                        </a>
                    )}
                    {show_code && (
                        <a href={code} target="_blank" rel="noreferrer">
                            {t("projects.code")} <span aria-hidden="true">↗</span>
                        </a>
                    )}
                </footer>
            )}
        </article>
    );
}
