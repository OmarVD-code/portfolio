import SkillItem from "./SkillItem";
import { skills } from "./skills.data";

export default function SkillsGrid() {
    return (
        <section id="skillset_" className="skillset">
            <h2 className="section-title">Skills</h2>
            <div className="skills">
                {skills.map(s => <SkillItem key={s.id} {...s} />)}
            </div>
        </section>
    );
}
