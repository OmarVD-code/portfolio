import { useMemo, useState, useCallback, useEffect } from "react";
import MenuButton from "./MenuButton";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useNavigateSection } from "../../hooks/useNavigateSection";
import { useI18n } from "../../i18n/I18nProvider";
import "./styles/Navbar.css";

const SECTIONS = ["wallpaper_", "about_", "portfolio_", "skillset_", "contact_"] as const;
type SectionId = (typeof SECTIONS)[number];
type NavItem = { id: SectionId; label: string };

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { lang, setLang, t } = useI18n();

    const navigate = useNavigateSection();
    const activeId = useActiveSection(SECTIONS as unknown as string[]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const toggle = useCallback(() => setOpen((v) => !v), []);

    const handleNavigate = useCallback(
        (id: string) => {
            setOpen(false);
            navigate(id);
        },
        [navigate]
    );

    const items = useMemo<NavItem[]>(
        () => [
            { id: "wallpaper_", label: t("nav.home") },
            { id: "about_", label: t("nav.about") },
            { id: "portfolio_", label: t("nav.portfolio") },
            { id: "skillset_", label: t("nav.skills") },
            { id: "contact_", label: t("nav.contact") },
        ],
        [t]
    );

    return (
        <header className="nav">
            <div className="nav-items">
                <div className="nav-logo">
                    <img
                        src="src/assets/img/pokerchip.png"
                        alt="Logo"
                        width="50"
                        height="50"
                    />
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
                        type="button"
                    >
                        <img src="src/assets/img/languages/es.svg" alt="Español" />
                    </button>

                    <span className="sep">|</span>

                    <button
                        className={lang === "en" ? "active" : ""}
                        onClick={() => setLang("en")}
                        aria-label="Switch to English"
                        type="button"
                    >
                        <img src="src/assets/img/languages/gb.svg" alt="English" />
                    </button>
                </div>

                <MenuButton open={open} onClick={toggle} />
            </div>
        </header>
    );
}
