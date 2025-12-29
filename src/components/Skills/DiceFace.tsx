import { useI18n } from "@/i18n/I18nProvider";

type SkillItem = {
    img: string;
    name: string;
};

type FaceContentProps = {
    title: string;
    items: SkillItem[];
};

export default function FaceContent({ title, items }: FaceContentProps) {
    const { t } = useI18n();

    return (
        <div className="face-content">
            <h3 className="face-title">{t(title)}</h3>
            <div className="face-icons">
                {items.map((item, index) => (
                    <div key={index} className="icon-skill"
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            title={item.name}
                        />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}