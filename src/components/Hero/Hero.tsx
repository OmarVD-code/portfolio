import { useEffect, useState } from "react";

export default function Hero() {
    const [text1, setFirstLine] = useState("");
    const [text2, setSecondLine] = useState("");
    const [text3, setThirdLine] = useState("");

    const firstLine = "Hi!";
    const secondLine = "I’m Omar Villarreal";
    const thirdLine = "Software Engineer";

    useEffect(() => {
        let i = 0;

        // Primera línea
        const timer1 = setInterval(() => {
            // setFirstLine((prev) => prev + firstLine.charAt(i));
            setFirstLine(firstLine.slice(0, i + 1));
            i++;
            if (i === firstLine.length) {
                clearInterval(timer1);
                let j = 0;
                const timer2 = setInterval(() => {
                    setSecondLine(secondLine.slice(0, j + 1));
                    j++;
                    if (j === secondLine.length) {
                        clearInterval(timer2);
                        let k = 0;
                        const timer3 = setInterval(() => {
                            setThirdLine(thirdLine.slice(0, k + 1));
                            k++;
                            if (k === thirdLine.length) clearInterval(timer3);
                        }, 80);
                    }
                }, 80);
            }
        }, 80);

        return () => clearInterval(timer1);
    }, []);

    return (
        <section id="wallpaper_" className="wallpaper">
            <div className="wallpaper-content">
                <div className="wallpaper-photo">
                    <img
                        src="src/assets/img/photo.jpg"
                        alt="Me"
                        width="200px"
                        height="200px"
                    />
                </div>
                <div className="wallpaper-regards">
                    <div className="wallpaper-text">
                        <h1 className="typing">
                            {text1}<br />
                            {text2}<br />
                            {text3} <br />
                        </h1>
                    </div>
                    <div className="wallpaper-buttons">
                        <a href="/cv/omarVillarreal.pdf" target="_blank" className="circle" download title="Download CV">
                            <i className="fas fa-file-download" />
                        </a>
                        <a href="https://github.com/OmarVD-code" target="_blank" className="circle" title="GitHub">
                            <i className="fab fa-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/omar-villarreal1"
                            target="_blank" className="circle" title="LinkedIn">
                            <i className="fab fa-linkedin-in" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
