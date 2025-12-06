import "./styles/Welcome.css";

export default function Welcome() {
    const letters = ["W", "E", "L", "C", "O", "M", "E"];

    return (
        <section id="wallpaper_" className="wallpaper">
            <div className="vegas-sign">
                <div className="vegas-sign-inner">
                    <div className="vegas-sign-welcome">
                        {letters.map(l => (
                            <span key={l} className="vegas-sign-circle">
                                {l}
                            </span>
                        ))}
                    </div>

                    <div className="vegas-sign-to">TO</div>
                    <div className="vegas-sign-fabulous">My portfolio</div>
                    <div className="vegas-sign-city">OMAR VILLARREAL</div>
                    <div className="vegas-sign-state">SOFTWARE DEVELOPER</div>
                </div>
            </div>
        </section>
    )
}