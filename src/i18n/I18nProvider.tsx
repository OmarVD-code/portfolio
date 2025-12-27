import React, { createContext, useContext, useMemo, useState } from "react";
import { translations, type Lang } from "./translations";

type I18nContextValue = {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getByPath(obj: any, path: string): unknown {
    return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("en");

    const value = useMemo<I18nContextValue>(() => {
        const dict = translations[lang];

        const t = (key: string) => {
            const v = getByPath(dict, key);
            return typeof v === "string" ? v : key;
        };

        return { lang, setLang, t };
    }, [lang]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within I18nProvider");
    return ctx;
}
