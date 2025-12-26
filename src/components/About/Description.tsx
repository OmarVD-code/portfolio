export default function Description() {
    return (
        <div className="about-wrap">
            <div className="about-card">
                <header className="about-marquee">
                    <span className="about-marquee__dot"></span>
                    <span className="about-marquee__dot"></span>
                    <span className="about-marquee__dot"></span>
                    <h2 className="about-title">ABOUT ME</h2>
                    <span className="about-marquee__dot"></span>
                    <span className="about-marquee__dot"></span>
                    <span className="about-marquee__dot"></span>
                </header>

                <div className="about-body">
                    <p className="about-text">
                        Fullstack Developer with over 3 years of experience building real, business-oriented systems.
                        I have worked on the development of critical modules, dashboards, end-to-end workflows, and business rules for production web applications.

                        I have led and supervised other developers, supporting code reviews, technical decision-making, and architectural improvements, always focusing on code quality, maintainability, and performance.

                        I specialize in turning complex requirements into clear, scalable, and well-structured solutions, taking care of both backend logic and the overall user experience.
                    </p>

                    <div className="about-stats">
                        <div className="stat">
                            <span className="stat__label">Experience</span>
                            <span className="stat__value">3+ years</span>
                        </div>
                        <div className="stat">
                            <span className="stat__label">Role</span>
                            <span className="stat__value">Fullstack Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}