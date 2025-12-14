import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], options?: IntersectionObserverInit) {
    const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => !!el);


        if (sections.length === 0) return;


        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
            },
            {
                root: null,
                rootMargin: "0px 0px -20% 0px",
                threshold: [0.25, 0.4, 0.6, 0.8, 1],
                ...(options || {}),
            }
        );


        sections.forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, [sectionIds.join("|")]);


    return activeId;
}