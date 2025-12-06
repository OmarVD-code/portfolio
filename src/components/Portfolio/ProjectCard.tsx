import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  desc: string;
  img: string;
  tools: string[];
  demo: string;
  code: string;
};

export default function ProjectCard({ title, desc, img, tools, demo, code }: Props) {
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
    <div
      ref={cardRef}
      className={`project flip-card ${flipped ? "is-flipped" : ""}`}
      onClick={() => setFlipped(prev => !prev)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="project-header">
            <img src={img} alt={title} />
          </div>
          <div className="project-body">
            <strong>{title}</strong>
            <p>{desc}</p>
            <div className="project-tools">
              {tools.map(t => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="project-footer">
            <a href={demo} target="_blank" rel="noreferrer">
              <i className="fas fa-globe-americas" /> <span>Demo</span>
            </a>
            <a href={code} target="_blank" rel="noreferrer">
              <i className="fab fa-github" /> <span>Code</span>
            </a>
          </div>
        </div>

        <div className="flip-card-back">
          <img src="src/assets/img/cardbackred.png" alt="Card back" />
        </div>
      </div>
    </div>
  );

}