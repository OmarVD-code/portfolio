import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section id="contact_" className="contact">
            <h2 className="section-title">Contact</h2>
            <div className="contact-content">
                <div className="contact-form">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
