import { useEffect, useState } from "react";


/**
* Observa secciones por ID y devuelve el id activo según el scroll.
* Uso:
* const activeId = useActiveSection(["wallpaper_","about_","portfolio_","skillset_","contact_"])
*/
export function useActiveSection(sectionIds: string[], options?: IntersectionObserverInit) {
    const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => !!el);


        if (sections.length === 0) return;


        const observer = new IntersectionObserver(
            (entries) => {
                // Ordena por el ratio de intersección para elegir la sección más visible
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
            },
            {
                root: null,
                rootMargin: "0px 0px -20% 0px", // activa un poco antes
                threshold: [0.25, 0.4, 0.6, 0.8, 1],
                ...(options || {}),
            }
        );


        sections.forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, [sectionIds.join("|")]);


    return activeId;
}