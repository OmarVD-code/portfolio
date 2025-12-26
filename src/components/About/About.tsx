import { useRef, useState } from "react";
import "./styles/About.css";

type SymbolType = "cv" | "github" | "linkedin";

const SYMBOLS: SymbolType[] = ["cv", "github", "linkedin"];

export default function About() {
    const leverOuterRef = useRef<HTMLDivElement | null>(null);

    const [message, setMessage] = useState("Spin to know me");
    const [reels, setReels] = useState<SymbolType[]>([
        "cv",
        "github",
        "linkedin",
    ]);

    const spinOnce = () => {
        if (!leverOuterRef.current) return;

        // animación palanca
        leverOuterRef.current.classList.add("pull");

        const result: SymbolType[] = Array.from({ length: 3 }, () =>
            SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
        );

        setReels(result);
        score(result);

        setTimeout(() => {
            leverOuterRef.current?.classList.remove("pull");
        }, 820);
    };

    const score = (result: SymbolType[]) => {
        const [a, b, c] = result;

        if (a === b && b === c) {
            setMessage("💰 JACKPOT!");
        } else if (a === b || b === c || a === c) {
            setMessage("⭐ Nice match! Almost there");
        } else {
            setMessage("❌ No luck! Spin again");
        }
    };

    return (
        <section id="about_" className="about">
            <div className="header-container">
                <div className="section-header" aria-hidden="true">
                    <div className="line">★ PULL THE LEVER TO EXPLORE MY SOCIAL MEDIA ★</div>
                </div>
            </div>

            <div className="about-wrapper">
                <div className="about-wrap">
                    <div className="about-card">
                        <header className="about-marquee">
                            <span className="about-marquee__dot"></span>
                            <span className="about-marquee__dot"></span>
                            <span className="about-marquee__dot"></span>
                            <h2 className="about-title">ABOUT ME</h2>
                            <span className="about-marquee__dot"></span>
                            <span className="about-marquee__dot"></span>
                            <span className="about-marquee__dot"></span>
                        </header>

                        <div className="about-body">
                            <p className="about-text">
                                Fullstack Developer with over 3 years of experience building real, business-oriented systems.
                                I have worked on the development of critical modules, dashboards, end-to-end workflows, and business rules for production web applications.

                                I have led and supervised other developers, supporting code reviews, technical decision-making, and architectural improvements, always focusing on code quality, maintainability, and performance.

                                I specialize in turning complex requirements into clear, scalable, and well-structured solutions, taking care of both backend logic and the overall user experience.                            
                            </p>                            

                            <div className="about-stats">
                                <div className="stat">
                                    <span className="stat__label">Experience</span>
                                    <span className="stat__value">3+ years</span>
                                </div>
                                <div className="stat">
                                    <span className="stat__label">Role</span>
                                    <span className="stat__value">Fullstack Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="machine-wrapper">
                    <div className="slot-machine" role="application" aria-label="Slot Machine">
                        <div className="hud">
                            <span id="score-display">{message}</span>
                        </div>

                        <div className="machine-body">
                            <div className="reel-window">

                                {reels.map((symbol, i) => (
                                    <div className="reel" key={i}>
                                        {symbol === "cv" && (
                                            <a
                                                href="/cv/omarVillarreal.pdf"
                                                target="_blank"
                                                title="Download CV"
                                                className="cv-icon"
                                            >
                                                <i className="fas fa-file-download" />
                                            </a>
                                        )}

                                        {symbol === "github" && (
                                            <a
                                                href="https://github.com/OmarVD-code"
                                                target="_blank"
                                                title="GitHub"
                                                className="github-icon"
                                            >
                                                <i className="fab fa-github" />
                                            </a>
                                        )}

                                        {symbol === "linkedin" && (
                                            <a
                                                href="https://www.linkedin.com/in/omar-villarreal1"
                                                target="_blank"
                                                title="LinkedIn"
                                                className="linkedin-icon"
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        )}
                                    </div>
                                ))}

                            </div>

                            <button
                                className="lever"
                                onClick={spinOnce}
                                aria-label="Pull lever to spin"
                            >
                                <div className="lever-outer" ref={leverOuterRef}>
                                    <div className="lever-inner">
                                        <div className="lever-stick"></div>
                                        <div className="lever-knob"></div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
