import ContactForm from "./ContactForm";
import "./styles/Contact.css";

export default function ContactSection() {
    return (
        <section id="contact_" className="contact">
            <div className="section-header" aria-hidden="true">
                <div className="line">★ FEEL FREE TO REACH OUT - I'M ALWAYS OPEN TO QUESTIONS ★ &nbsp;</div>
            </div>
            <div className="contact-content">
                <div className="contact-form">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
