import { Menu } from "lucide-react";
import styles from "./Header.module.css";

export const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
    return (
        <header className={styles.header}>
            <button onClick={onMenuClick}>
                <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold">App Title</h1>
        </header>
    );
};
