import { projects } from "./projects.data";
import ProjectCard from "./ProjectCard";
import "./styles/Project.css";

export default function ProjectsGrid() {
    return (
        <section id="portfolio_" className="portfolio">
            <h1 className="section-title">Portfolio</h1>
            <div className="projects">
                {projects.map(p => (
                    <ProjectCard key={p.id} {...p} />
                ))}
            </div>
        </section>
    );
}
