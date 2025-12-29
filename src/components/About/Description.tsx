import { useI18n } from "@/i18n/I18nProvider";

export default function Description() {
    const { t } = useI18n();

    return (
        <div className="about-wrap">
            <div className="about-card">
                <header className="about-marquee">
                    <span className="about-marquee__dot"></span>
                    <span className="about-marquee__dot"></span>
                    <span className="about-marquee__dot"></span>
                    <h2 className="about-title">{t("about.title")}</h2>
                    <span className="about-marquee__dot"></span>
                    <span className="about-marquee__dot"></span>
                    <span className="about-marquee__dot"></span>
                </header>

                <div className="about-body">
                    <p className="about-text">
                        {t("about.description")}
                    </p>

                    <div className="about-stats">
                        <div className="stat">
                            <span className="stat__label">{t("about.experience")}</span>
                            <span className="stat__value">3+ {t("about.years")}</span>
                        </div>
                        <div className="stat">
                            <span className="stat__label">{t("about.role")}</span>
                            <span className="stat__value">{t("about.role_answer")}</span>
                        </div>
                        <div className="stat">
                            <span className="stat__label">Email</span>
                            <span className="stat__value">omarvillarreal2000@gmail.com</span>
                        </div>
                        <div className="stat">
                            <span className="stat__label">{t("about.phone")}</span>
                            <span className="stat__value">+51 938273697</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}