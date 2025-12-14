import ContactForm from "./ContactForm";
import "./styles/Contact.css";

export default function ContactSection() {
    return (
        <section id="contact_" className="contact">
            <h1 className="section-title">Contact</h1>
            <div className="contact-content">
                <div className="contact-form">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
