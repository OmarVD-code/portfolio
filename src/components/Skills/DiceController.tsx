import { useI18n } from "@/i18n/I18nProvider";

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
    const { t } = useI18n();

    return (
        <div className="controller">
            <button onClick={onRoll} disabled={showAll}>
                {t("skills.controller.roll")}
            </button>

            <br />

            <select value={diceType} onChange={(e) => onChangeDiceType(e.target.value)}>
                <option value="">{t("skills.controller.colors.white")}</option>
                <option value="black">{t("skills.controller.colors.black")}</option>
            </select>

            <br />

            <button onClick={onToggleView}>
                {showAll ? t("skills.controller.dice_mode") : t("skills.controller.show_all")}
            </button>
        </div>
    );
}
