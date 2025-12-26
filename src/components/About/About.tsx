import "./styles/About.css";
import Description from "./Description";
import SlotMachine from "./SlotMachine";

export default function About() {
    return (
        <section id="about_" className="about">
            <div className="header-container">
                <div className="section-header" aria-hidden="true">
                    <div className="line">
                        ★ PULL THE LEVER TO EXPLORE MY SOCIAL MEDIA ★
                    </div>
                </div>
            </div>

            <div className="about-wrapper">
                <Description />
                <SlotMachine />
            </div>
        </section>
    );
}
