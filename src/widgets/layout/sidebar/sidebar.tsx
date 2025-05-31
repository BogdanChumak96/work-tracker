import { X } from "lucide-react";
import styles from "./Sidebar.module.css";

export const Sidebar = ({
                            isOpen,
                            onClose,
                        }: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    return (
        <>
            <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
                <div className={styles.header}>
                    <h2>Menu</h2>
                    <button onClick={onClose}>
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <nav className={styles.menu}>
                    <a href="#" onClick={onClose}>Link 1</a>
                    <a href="#" onClick={onClose}>Link 2</a>
                </nav>
            </aside>
            {isOpen && <div className={styles.overlay} onClick={onClose} />}
        </>
    );
};
