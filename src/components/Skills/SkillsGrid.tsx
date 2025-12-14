import SkillItem from "./SkillItem";
import { skills } from "./skills.data";
import "./styles/Skills.css";

export default function SkillsGrid() {
    return (
        <section id="skillset_" className="skillset">
            <h1 className="section-title">Skills</h1>
            <div className="skills">
                {skills.map(s => <SkillItem key={s.id} {...s} />)}
            </div>
        </section>
    );
}
