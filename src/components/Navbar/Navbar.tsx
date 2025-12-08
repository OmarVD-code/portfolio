import { useMemo, useState, useCallback, useEffect } from "react";
import MenuButton from "./MenuButton";
import { useActiveSection } from "../../hooks/useActiveSection";
import "./styles/Navbar.css";

const SECTIONS = ["wallpaper_", "about_", "portfolio_", "skillset_", "contact_"] as const;
type SectionId = (typeof SECTIONS)[number];
type NavItem = { id: SectionId; label: string };

const NAV_ITEMS: NavItem[] = [
    { id: "wallpaper_", label: "Home" },
    { id: "portfolio_", label: "Portfolio" },
    { id: "skillset_", label: "Skills" },
    { id: "contact_", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const activeId = useActiveSection(SECTIONS as unknown as string[]);

    // Bloquea el scroll del body cuando el menú móvil está abierto (UX)
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);


    const toggle = useCallback(() => setOpen((v) => !v), []);


    const handleNavigate = useCallback((id: string) => {
        console.log("handleNavigate", id);
        setOpen(false);
        const el = document.getElementById(id);
        if (!el) return;
        // Deslizar suave sin necesitar librerías
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Actualiza el hash sin recargar
        history.replaceState(null, "", `#${id}`);
    }, []);


    const items = useMemo(() => NAV_ITEMS, []);


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

                <MenuButton open={open} onClick={toggle} />
            </div>
        </header>
    )
};
