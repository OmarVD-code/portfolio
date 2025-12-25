import { projects } from "./projects.data";
import ProjectCard from "./ProjectCard";
import "./styles/Project.css";

export default function ProjectsGrid() {
    return (
        <section id="portfolio_" className="portfolio">
            <div className="header-container">
                <div className="section-header" aria-hidden="true">
                    <div className="line">★ HERE ARE SOME PROJECTS I'VE WORKED ON ★</div>
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
