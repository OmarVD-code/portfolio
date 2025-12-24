import { useRef, useState } from "react";

import DiceFace from "./DiceFace";
import DiceController from "./DiceController";

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
        console.log(diceVal);
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
                <div className="dice-wrap">
                    <div
                        ref={diceRef}
                        className={`dice ${rolling ? "rolling" : ""} ${diceType}`}
                        onClick={rollDice}
                    >
                        {skills.map((skill) => (
                            <div key={skill.id} className={`dice-face ${skill.face}`}>
                                <DiceFace
                                    title={skill.title}
                                    items={skill.items}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {showAll && (
                <div className="list-wrap">
                    <div className="list-container">
                        {skills.map((skill) => (
                            <div key={skill.id} className={`list-face ${diceType}`}>
                                <DiceFace
                                    title={skill.title}
                                    items={skill.items}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <DiceController
                showAll={showAll}
                onRoll={rollDice}
                diceType={diceType}
                onChangeDiceType={setDiceType}
                onToggleView={toggleView}
            />
        </section>
    );
}
