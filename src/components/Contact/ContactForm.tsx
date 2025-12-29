import { useI18n } from "@/i18n/I18nProvider";

export default function ContactForm() {
    const { t } = useI18n();

    return (
        <div>
            <div className="poker-table">
                <div className="table-inner">
                    <form action="https://formsubmit.co/5c3c98f506c3d6cbdb5d4aea63046ef2" method="POST">
                        <div className="field">
                            <label htmlFor="name">{t("contact.form.name")}</label>
                            <input type="text" name="name" id="name" required />
                        </div>
                        <div className="field">
                            <label htmlFor="email">{t("contact.form.email")}</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className="field">
                            <label htmlFor="message">{t("contact.form.message")}</label>
                            <textarea name="message" id="message" rows={3} required />
                        </div>
                        <div className="contact-form-actions">
                            <button type="submit">{t("contact.form.submit")}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
