import { useI18n } from "@/i18n/I18nProvider";

export default function ContactForm() {
    const { t } = useI18n();

    return (
        <div className="poker-table">
            <span className="card-corner card-corner--top" aria-hidden="true">A<br />♠</span>
            <span className="card-corner card-corner--bottom" aria-hidden="true">A<br />♠</span>
                <div className="table-inner">
                    <form action="https://formsubmit.co/5c3c98f506c3d6cbdb5d4aea63046ef2" method="POST">
                        <div className="field">
                            <label htmlFor="name">{t("contact.form.name")}</label>
                            <input type="text" name="name" id="name" autoComplete="name" placeholder={t("contact.form.name_placeholder")} required />
                        </div>
                        <div className="field">
                            <label htmlFor="email">{t("contact.form.email")}</label>
                            <input type="email" name="email" id="email" autoComplete="email" placeholder="nombre@correo.com" required />
                        </div>
                        <div className="field">
                            <label htmlFor="message">{t("contact.form.message")}</label>
                            <textarea name="message" id="message" rows={4} placeholder={t("contact.form.message_placeholder")} required />
                        </div>
                        <div className="contact-form-actions">
                            <button type="submit">{t("contact.form.submit")}</button>
                        </div>
                    </form>
                </div>
        </div>
    );
}
