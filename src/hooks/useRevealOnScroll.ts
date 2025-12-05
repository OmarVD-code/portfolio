import { useEffect, useRef } from "react";

export function useRevealOnScroll(threshold: number = 0.3) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        el.classList.add("show");
                        observer.disconnect();
                    }
                });
            },
            { threshold }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [threshold]);

    return elementRef;
}
