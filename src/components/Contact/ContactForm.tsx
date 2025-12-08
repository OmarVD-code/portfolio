export default function ContactForm() {
    return (
        <div>
            <div className="poker-table">
                <div className="table-inner">
                    <form action="https://formsubmit.co/5c3c98f506c3d6cbdb5d4aea63046ef2" method="POST">
                        <p>
                            <label htmlFor="name">Fullname</label>
                            <input type="text" name="name" id="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" required />
                        </p>
                        <p>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows={3} required />
                        </p>
                        <p className="contact-form-actions">
                            <button type="submit">Send <i className="fas fa-paper-plane" /></button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
