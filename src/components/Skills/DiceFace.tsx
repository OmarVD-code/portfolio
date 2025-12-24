type SkillItem = {
    img: string;
    name: string;
};

type FaceContentProps = {
    title: string;
    items: SkillItem[];
};

export default function FaceContent({ title, items }: FaceContentProps) {
    return (
        <div className="face-content">
            <h3 className="face-title">{title}</h3>

            <div className="face-icons">
                {items.map((item, index) => (
                    <img
                        key={index}
                        src={item.img}
                        alt={item.name}
                        title={item.name}
                    />
                ))}
            </div>
        </div>
    );
}