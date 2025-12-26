import { useCallback } from "react";

export function useNavigateSection() {
    return useCallback((id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${id}`);
    }, []);
}
