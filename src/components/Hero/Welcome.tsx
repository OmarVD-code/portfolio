import "./styles/Welcome.css";

export default function Welcome() {
    return (
        <section id="wallpaper_" className="wallpaper">
            <div className="sign"></div>
            <div className="text">
                <div className="welcome">
                    <span>W</span>
                    <span>E</span>
                    <span>L</span>
                    <span>C</span>
                    <span>O</span>
                    <span>M</span>
                    <span>E</span>
                </div>
                <div className="to">
                    <span>TO</span>
                </div>
                <div className="my">My Portfolio</div>
                <div className="las">OMAR VILLARREAL</div>
                <div className="nv">SOFTWARE DEVELOPER</div>
                <div className="wallpaper-buttons">
                    <a href="/cv/omarVillarreal.pdf" target="_blank" download title="Download CV">
                        <i className="fas fa-file-download" />
                    </a>
                    <a href="https://github.com/OmarVD-code" target="_blank" title="GitHub">
                        <i className="fab fa-github" />
                    </a>
                    <a href="https://www.linkedin.com/in/omar-villarreal1"
                        target="_blank" title="LinkedIn">
                        <i className="fab fa-linkedin-in" />
                    </a>
                </div>
            </div>
        </section>
    )
}