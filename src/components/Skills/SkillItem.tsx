import { useEffect, useRef, useState } from "react";

type Props = {
    title: string;
    items: Array<{ name: string; img: string }>;
};

export default function SkillItem({ title, items }: Props) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.add("visible");
                }
            });
        });

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={cardRef} className={`project flip-card ${flipped ? "is-flipped" : ""}`}
            onClick={() => setFlipped(prev => !prev)}>
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
                    <img src="src/assets/img/cardbackblue.png" alt="card back" />
                </div>
            </div>
        </div>
    );
}
