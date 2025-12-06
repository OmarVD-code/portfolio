import { projects } from "./projects.data";
import ProjectCard from "./ProjectCard";
import "./styles/Project.css";

export default function ProjectsGrid() {
    return (
        <section id="portfolio_" className="portfolio">
            <h2 className="section-title">Portfolio</h2>
            <div className="projects">
                {projects.map(p => (
                    <ProjectCard key={p.id} {...p} />
                ))}
            </div>
        </section>
    );
}
