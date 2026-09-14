import "@/components/Hero/styles/Welcome.css";
import { useNavigateSection } from "@/hooks/useNavigateSection";
import { useI18n } from "@/i18n/I18nProvider";
import myPic from "@/assets/img/photo.jpg";

export default function Welcome() {
    const navigate = useNavigateSection();
    const { t } = useI18n();

    return (
        <section id="wallpaper_" className="wallpaper">
            <div className="hero-glow hero-glow--red" aria-hidden="true" />
            <div className="hero-glow hero-glow--gold" aria-hidden="true" />

            <div className="hero-layout">
                <div className="hero-copy">
                    <p className="hero-eyebrow">
                        <span aria-hidden="true">◆</span> {t("hero.eyebrow")}
                    </p>
                    <h1>Omar <span>Villarreal</span></h1>
                    <p className="hero-role">{t("hero.role")}</p>
                    <p className="hero-intro">{t("hero.intro")}</p>

                    <div className="hero-actions">
                        <button
                            className="hero-cta"
                            onClick={() => navigate("portfolio_")}
                        >
                            {t("hero.cta")}
                        </button>
                        <button
                            className="hero-cta hero-cta--secondary"
                            onClick={() => navigate("contact_")}
                        >
                            {t("hero.contact")}
                        </button>
                    </div>

                    <dl className="hero-stats" aria-label={t("hero.highlights_label")}>
                        <div>
                            <dt>3+</dt>
                            <dd>{t("hero.years")}</dd>
                        </div>
                        <div>
                            <dt>4</dt>
                            <dd>{t("hero.projects")}</dd>
                        </div>
                        <div>
                            <dt>2</dt>
                            <dd>{t("hero.languages")}</dd>
                        </div>
                    </dl>
                </div>

                <div className="welcome-stage" aria-label={t("hero.card_label")}>
                    <div className="sign" aria-hidden="true" />
                    <div className="hero-card-lights" aria-hidden="true">
                        {Array.from({ length: 18 }, (_, index) => <span key={index} />)}
                    </div>
                    <p className="hero-card-kicker">WELCOME TO</p>
                    <p className="hero-card-title">The Full-Stack<br />Experience</p>
                    <img
                        className="photo"
                        src={myPic}
                        alt="Omar Villarreal"
                    />
                    <div className="hero-card-footer">
                        <span>{t("hero.card_status")}</span>
                        <strong>{t("hero.card_location")}</strong>
                    </div>
                    <span className="hero-suit hero-suit--top" aria-hidden="true">♠</span>
                    <span className="hero-suit hero-suit--bottom" aria-hidden="true">♥</span>
                </div>
            </div>

            <button className="scroll-cue" onClick={() => navigate("about_")}>
                <span>{t("hero.scroll")}</span>
                <i aria-hidden="true" />
            </button>
        </section>
    )
}
