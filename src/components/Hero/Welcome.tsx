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
                <div className="las">OMAR <br className="breaker" /> VILLARREAL</div>
                <div className="nv">SOFTWARE <br className="breaker" /> DEVELOPER</div>
                <img
                    className="photo"
                    src="src/assets/img/photo.jpg"
                    alt="Me"
                />
            </div>
        </section>
    )
}