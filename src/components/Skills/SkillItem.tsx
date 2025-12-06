import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

type Props = {
    title: string;
    items: Array<{ name: string; img: string }>;
};

export default function SkillItem({ title, items }: Props) {
    const { cardRef, flipped, toggleFlipped } = useRevealOnScroll({
        delay: 600,
        initialFlipped: true,
    });

    return (
        <div ref={cardRef} className={`project flip-card ${flipped ? "is-flipped" : ""}`}
            onClick={toggleFlipped}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
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

                <div className="flip-card-back">
                    <img src="src/assets/img/cardbackblack.png" alt="card back" />
                </div>
            </div>
        </div>
    );
}
