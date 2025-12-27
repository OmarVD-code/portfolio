import { useMemo, useState, useCallback, useEffect } from "react";
import MenuButton from "./MenuButton";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useNavigateSection } from "../../hooks/useNavigateSection";
import "./styles/Navbar.css";

const SECTIONS = ["wallpaper_", "about_", "portfolio_", "skillset_", "contact_"] as const;
type SectionId = (typeof SECTIONS)[number];
type NavItem = { id: SectionId; label: string };

const NAV_ITEMS: NavItem[] = [
    { id: "wallpaper_", label: "Home" },
    { id: "about_", label: "About Me" },
    { id: "portfolio_", label: "Portfolio" },
    { id: "skillset_", label: "Skills" },
    { id: "contact_", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigateSection();
    const activeId = useActiveSection(SECTIONS as unknown as string[]);

    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const toggle = useCallback(() => setOpen((v) => !v), []);

    const handleNavigate = useCallback((id: string) => {
        setOpen(false);
        navigate(id);
    }, [navigate]);


    const items = useMemo(() => NAV_ITEMS, []);

    const [lang, setLang] = useState<"en" | "es">("en");

    return (
        <header className="nav">
            <div className="nav-items">
                <div className="nav-logo">
                    <img src="src/assets/img/pokerchip.png" alt="Logo" width="50px" height="50px" />
                </div>

                <nav className={`nav-menu ${open ? "open" : ""}`}>
                    <ul>
                        {items.map((it) => (
                            <li key={it.id} className={it.id.replace("#", "")}>
                                <a
                                    href={`#${it.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigate(it.id);
                                    }}
                                    className={activeId === it.id ? "active" : ""}
                                >
                                    {it.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="nav-lang">
                    <button
                        className={lang === "es" ? "active" : ""}
                        onClick={() => setLang("es")}
                        aria-label="Cambiar a Español"
                    >
                        <img src="src/assets/img/languages/es.svg" alt="Español" />
                    </button>

                    <span className="sep">|</span>

                    <button
                        className={lang === "en" ? "active" : ""}
                        onClick={() => setLang("en")}
                        aria-label="Switch to English"
                    >
                        <img src="src/assets/img/languages/gb.svg" alt="English" />
                    </button>
                </div>

                <MenuButton open={open} onClick={toggle} />
            </div>
        </header>
    )
};
