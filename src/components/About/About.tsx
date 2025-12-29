import "@/components/About/styles/About.css";
import Description from "@/components/About/Description";
import SlotMachine from "@/components/About/SlotMachine";
import { useI18n } from "@/i18n/I18nProvider";

export default function About() {
    const { t } = useI18n();

    return (
        <section id="about_" className="about">
            <div className="header-container">
                <div className="section-header" aria-hidden="true">
                    <div className="line">
                        ★ {t("about.marquee")} ★
                    </div>
                </div>
            </div>

            <div className="about-wrapper">
                <Description />
                <SlotMachine />
            </div>
        </section>
    );
}
