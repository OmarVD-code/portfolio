import {
    certifications,
    professionalLinks,
    resolveProfessionalLinkHref,
} from "@/components/About/about.data";
import { useI18n } from "@/i18n/I18nProvider";

export default function ProfessionalProfile() {
    const { t, lang } = useI18n();

    return (
        <div className="professional-wrap">
            <aside
                className="professional-profile"
                aria-labelledby="professional-profile-title"
            >
                <header className="professional-marquee">
                    <span className="about-marquee__dot"></span>
                    <span className="about-marquee__dot"></span>
                    <span className="about-marquee__dot"></span>
                    <h3 id="professional-profile-title" className="about-title">
                        {t("about.profile.title")}
                    </h3>
                    <span className="about-marquee__dot"></span>
                    <span className="about-marquee__dot"></span>
                    <span className="about-marquee__dot"></span>
                </header>

                <div className="professional-body">
                    <section
                        className="profile-group"
                        aria-labelledby="relevant-links-title"
                    >
                        <h4 id="relevant-links-title" className="profile-group__title">
                            {t("about.profile.relevant_links")}
                        </h4>

                        <div className="professional-links-grid">
                            {professionalLinks.map((link) => (
                                <a
                                    key={link.id}
                                    className="professional-link-card"
                                    href={resolveProfessionalLinkHref(link, lang)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={link.icon} alt="" />
                                    <span>{t(link.labelKey)}</span>
                                </a>
                            ))}
                        </div>
                    </section>

                    <div className="profile-divider" aria-hidden="true"></div>

                    <section
                        className="profile-group"
                        aria-labelledby="certifications-title"
                    >
                        <h4 id="certifications-title" className="profile-group__title">
                            {t("about.profile.certifications")}
                        </h4>

                        <div className="certifications-grid">
                            {certifications.map((certification) => {
                                const certificationName = t(certification.nameKey);

                                return (
                                    <a
                                        key={certification.id}
                                        className="certification-card"
                                        href={certification.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${certificationName}. ${t("about.profile.badges.view_credential")}`}
                                    >
                                        <img src={certification.image} alt="" />
                                        <span className="certification-card__name">
                                            {certificationName}
                                        </span>
                                        <span className="certification-card__action">
                                            {t("about.profile.badges.view_credential")}
                                            <span aria-hidden="true">↗</span>
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </aside>
        </div>
    );
}
