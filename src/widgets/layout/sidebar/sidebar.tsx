import style from "./Sidebar.module.css";

type SidebarProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    return (
        <>
            <aside className={`${style.sidebar} ${isOpen ? style.open : ""}`}>
                <div className={style.header}>
                    <h2 className={style.title}>Menu</h2>
                    <button onClick={onClose} className={style.closeButton}>
                        ×
                    </button>
                </div>
                <nav className={style.menu}>
                    <a href="#" onClick={onClose} className={style.menuItem}>Link 1</a>
                    <a href="#" onClick={onClose} className={style.menuItem}>Link 2</a>
                    <a href="#" onClick={onClose} className={style.menuItem}>Link 3</a>
                    <a href="#" onClick={onClose} className={style.menuItem}>Link 4</a>
                </nav>
            </aside>
            {isOpen && <div className={style.overlay} onClick={onClose} />}
        </>
    );
};