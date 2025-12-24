type SkillsDiceControllerProps = {
    showAll: boolean;
    onRoll: () => void;
    diceType: string;
    onChangeDiceType: (val: string) => void;
    onToggleView: () => void;
};

export default function SkillsDiceController({
    showAll,
    onRoll,
    diceType,
    onChangeDiceType,
    onToggleView,
}: SkillsDiceControllerProps) {
    return (
        <div className="controller">
            <button onClick={onRoll} disabled={showAll}>
                Roll
            </button>

            <br />

            <select value={diceType} onChange={(e) => onChangeDiceType(e.target.value)}>
                <option value="">white</option>
                <option value="black">black</option>
            </select>

            <br />

            <button onClick={onToggleView}>
                {showAll ? "Dice Mode" : "Show All"}
            </button>
        </div>
    );
}
