import { memo } from "react";

type MenuButtonProps = {
    open: boolean;
    onClick: () => void;
};

const MenuButton = memo(function MenuButton({ open, onClick }: MenuButtonProps) {
    return (
        <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={onClick}
            className="menu-btn"
            type="button"
        >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
            <i className={`fas ${open ? "fa-times" : "fa-bars"}`} />
        </button>
    );
});

export default MenuButton;