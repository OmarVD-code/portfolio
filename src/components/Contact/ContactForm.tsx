export default function ContactForm() {
    return (
        <div>
            <div className="poker-table">
                <div className="table-inner">
                    <form action="https://formsubmit.co/5c3c98f506c3d6cbdb5d4aea63046ef2" method="POST">
                        <div className="field">
                            <label htmlFor="name">Fullname</label>
                            <input type="text" name="name" id="name" required />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows={3} required />
                        </div>
                        <div className="contact-form-actions">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
