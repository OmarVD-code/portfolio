import { useRef, useState } from "react";
import { useNavigateSection } from "@/hooks/useNavigateSection";
import { useI18n } from "@/i18n/I18nProvider";
import cvIcon from "@/assets/img/about/cv.png";
import githubIcon from "@/assets/img/about/github.png";
import linkedinIcon from "@/assets/img/about/linkedin.png";
import folderIcon from "@/assets/img/about/folder.png";
import emailIcon from "@/assets/img/about/email.png";


type SymbolType = "cv" | "github" | "linkedin" | "projects" | "contact";
const SYMBOLS: SymbolType[] = ["cv", "github", "linkedin", "projects", "contact"];

export default function SlotMachine() {
    const { t, lang } = useI18n();

    const cvHref =
        lang === "es"
            ? "/cv/es.pdf"
            : "/cv/en.pdf";


    const leverOuterRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigateSection();

    const [reels, setReels] = useState<SymbolType[]>([
        "cv",
        "github",
        "linkedin",
        // "projects",
        // "contact",
    ]);

    const spinOnce = () => {
        if (!leverOuterRef.current) return;

        leverOuterRef.current.classList.add("pull");

        const result: SymbolType[] = Array.from({ length: 3 }, () =>
            SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
        );

        setReels(result);

        setTimeout(() => {
            leverOuterRef.current?.classList.remove("pull");
        }, 820);
    };

    return (
        <div className="machine-wrapper">
            <div
                className="slot-machine"
                role="application"
                aria-label="Slot Machine"
            >
                <div className="machine-body">
                    <div className="reel-window">
                        {reels.map((symbol, i) => (
                            <div className="reel" key={i}>
                                {symbol === "cv" && (
                                    <a
                                        href={cvHref}
                                        target="_blank"
                                        title={t("about.download_cv")}
                                        rel="noopener noreferrer"
                                    >
                                        <img src={cvIcon} alt="Resume" />
                                    </a>
                                )}

                                {symbol === "github" && (
                                    <a
                                        href="https://github.com/OmarVD-code"
                                        target="_blank"
                                        title="GitHub"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={githubIcon} alt="GitHub" />
                                    </a>
                                )}

                                {symbol === "linkedin" && (
                                    <a
                                        href="https://www.linkedin.com/in/omar-villarreal1"
                                        target="_blank"
                                        title="LinkedIn"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={linkedinIcon} alt="Linkedin" />
                                    </a>
                                )}

                                {symbol === "projects" && (
                                    <span
                                        onClick={() => navigate("portfolio_")}
                                        title={t("about.projects")}
                                    >
                                        <img src={folderIcon} alt="Projects" />
                                    </span>
                                )}

                                {symbol === "contact" && (
                                    <span
                                        onClick={() => navigate("contact_")}
                                        title={t("about.contact")}
                                    >
                                        <img src={emailIcon} alt="Contact Me" />
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
