import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

type Props = {
    title: string;
    items: Array<{ name: string; img: string }>;
};

export default function SkillItem({ title, items }: Props) {
    const cardRef = useRevealOnScroll();    

    return (
        <div ref={cardRef} className="skill flip-card">
            <div className="skill-title">{title}</div>
            <div className="skill-body">
                {items.map((i, idx) =>
                    <div key={idx} className="skill-item">
                        <img src={i.img} alt={i.name} />
                        <p>{i.name}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
