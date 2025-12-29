import "./styles/Welcome.css";
import { useNavigateSection } from "../../hooks/useNavigateSection";
import { useI18n } from "@/i18n/I18nProvider";

export default function Welcome() {
    const navigate = useNavigateSection();
    const { t } = useI18n();

    return (
        <section id="wallpaper_" className="wallpaper">
            <div className="sign"></div>
            <div className="text">
                <div className="welcome">
                    <span>W</span>
                    <span>E</span>
                    <span>L</span>
                    <span>C</span>
                    <span>O</span>
                    <span>M</span>
                    <span>E</span>
                </div>
                <div className="to">
                    <span>TO</span>
                </div>
                <div className="my">My Portfolio</div>
                <div className="las">OMAR <br className="breaker" /> VILLARREAL</div>
                <div className="nv">SOFTWARE <br className="breaker" />DEVELOPER</div>
                <img
                    className="photo"
                    src="src/assets/img/photo.jpg"
                    alt="Me"
                />
                <button
                    className="hero-cta"
                    onClick={() => navigate("portfolio_")}
                >
                    {t("hero.cta")}
                </button>
            </div>
        </section>
    )
}