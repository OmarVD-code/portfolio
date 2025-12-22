import { useRef, useState } from "react";
import "./styles/Dice.css";
import { skills } from "./skills.data";

export default function SkillsDice() {
    const diceRef = useRef<HTMLDivElement | null>(null);
    const [rolling, setRolling] = useState(false);
    const [diceType, setDiceType] = useState("");
    const [diceVal, setDiceVal] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false); // false = dice mode

    const perFace = [
        [-0.1, 0.3, -1],
        [-0.1, 0.6, -0.4],
        [-0.85, -0.42, 0.73],
        [-0.8, 0.3, -0.75],
        [0.3, 0.45, 0.9],
        [-0.16, 0.6, 0.18]
    ];

    const setFace = (num: number) => {
        if (!diceRef.current) return;
        diceRef.current.style.transform = `rotate3d(${perFace[num - 1]}, 180deg)`;
    };

    const rollDice = () => {
        const val = Math.floor(Math.random() * 6) + 1;

        setDiceVal(null);
        setRolling(false);
        setFace(val);

        setTimeout(() => {
            if (!diceRef.current) return;
            diceRef.current.classList.add("throw");
        }, 50);

        setTimeout(() => {
            setDiceVal(val);
        }, 700);
    };

    const toggleView = () => setShowAll((prev) => !prev);

    return (
        <section id="skillset_" className="skill-dice">
            <h1 className="section-title">Skills</h1>
            {!showAll && (
                <div className="diceWrap">
                    <div
                        ref={diceRef}
                        className={`dice ${rolling ? "rolling" : ""} ${diceType}`}
                        onClick={rollDice}
                    >
                        {skills.map((skill) => (
                            <div key={skill.id} className={`diceFace ${skill.face}`}>
                                <div className="faceContent">
                                    <h3 className="faceTitle">{skill.title}</h3>

                                    <div className="faceIcons">
                                        {skill.items.map((item, index) => (
                                            <img
                                                key={index}
                                                src={item.img}
                                                alt={item.name}
                                                title={item.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {showAll && (
                <div className="listWrap">
                    {skills.map((skill) => (
                        <div key={skill.id} className="listContainer">
                            <div className="listFace">
                                <div className="faceContent">
                                    <h3 className="faceTitle">{skill.title}</h3>

                                    <div className="faceIcons">
                                        {skill.items.map((item, index) => (
                                            <img
                                                key={index}
                                                src={item.img}
                                                alt={item.name}
                                                title={item.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="controller">
                <button onClick={rollDice} disabled={showAll}>Roll</button>
                <br />

                <select onChange={(e) => setDiceType(e.target.value)} disabled={showAll}>
                    <option value="">white</option>
                    <option value="black">black</option>
                </select>
                <br />

                <button onClick={toggleView}>{showAll ? "Dice Mode" : "Show All"}</button>
            </div>
        </section>
    );
}
