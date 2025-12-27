import { useRef, useState } from "react";
import { useNavigateSection } from "../../hooks/useNavigateSection";

type SymbolType = "cv" | "github" | "linkedin" | "projects" | "contact";

const SYMBOLS: SymbolType[] = ["cv", "github", "linkedin", "projects", "contact"];

export default function SlotMachine() {
    const leverOuterRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigateSection();

    const [message, setMessage] = useState("Spin to know me");
    const [reels, setReels] = useState<SymbolType[]>([
        "cv",
        "github",
        "linkedin",
        // "projects",
        // "contact",
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
        <div className="machine-wrapper">
            <div
                className="slot-machine"
                role="application"
                aria-label="Slot Machine"
            >
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
                                        rel="noopener noreferrer"
                                    >
                                        <img src="src/assets/img/about/cv.png" alt="Resume" />
                                    </a>
                                )}

                                {symbol === "github" && (
                                    <a
                                        href="https://github.com/OmarVD-code"
                                        target="_blank"
                                        title="GitHub"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="src/assets/img/about/github.png" alt="GitHub" />
                                    </a>
                                )}

                                {symbol === "linkedin" && (
                                    <a
                                        href="https://www.linkedin.com/in/omar-villarreal1"
                                        target="_blank"
                                        title="LinkedIn"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="src/assets/img/about/linkedin.png" alt="Linkedin" />
                                    </a>
                                )}

                                {symbol === "projects" && (
                                    <span
                                        onClick={() => navigate("portfolio_")}
                                        title="Projects"
                                    >
                                        <img src="src/assets/img/about/folder.png" alt="Projects" />
                                    </span>
                                )}

                                {symbol === "contact" && (
                                    <span
                                        onClick={() => navigate("contact_")}
                                        title="Contact Me"
                                    >
                                        <img src="src/assets/img/about/email.png" alt="COntact Me" />
                                    </span>
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
                                <div className="lever-stick" />
                                <div className="lever-knob" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
