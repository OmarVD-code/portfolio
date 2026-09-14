import ContactForm from "@/components/Contact/ContactForm";
import "@/components/Contact/styles/Contact.css";
import { useI18n } from "@/i18n/I18nProvider";

export default function ContactSection() {
    const { t } = useI18n();

    return (
        <section id="contact_" className="contact">
            <div className="header-container">
                <div className="section-header" aria-hidden="true">
                    <div className="line">★ {t("contact.marquee")} ★</div>
                </div>
            </div>
            <div className="contact-content">
                <div className="contact-copy">
                    <p className="contact-eyebrow">{t("contact.eyebrow")}</p>
                    <h2>{t("contact.title")}</h2>
                    <p>{t("contact.description")}</p>
                    <a href="mailto:omarvillarreal2000@gmail.com">
                        <span aria-hidden="true">✦</span>
                        <span>
                            <small>{t("contact.email_label")}</small>
                            omarvillarreal2000@gmail.com
                        </span>
                    </a>
                </div>
                <div className="contact-form">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
