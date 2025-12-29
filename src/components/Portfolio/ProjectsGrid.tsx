import { projects } from "./projects.data";
import ProjectCard from "./ProjectCard";
import "./styles/Project.css";
import { useI18n } from "@/i18n/I18nProvider";

export default function ProjectsGrid() {
    const { t } = useI18n();

    return (
        <section id="portfolio_" className="portfolio">
            <div className="header-container">
                <div className="section-header" aria-hidden="true">
                    <div className="line">★ {t("projects.marquee")} ★</div>
                </div>
            </div>
            <div className="projects">
                {projects.map(p => (
                    <ProjectCard key={p.id} {...p} />
                ))}
            </div>
        </section>
    );
}
