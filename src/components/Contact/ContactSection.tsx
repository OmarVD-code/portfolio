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
                <div className="contact-form">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
