import style from "./Header.module.css";

type HeaderProps = {
    onMenuClick: () => void;
};

export const Header = ({ onMenuClick }: HeaderProps) => {
    return (
        <header className={style.topHeader}>
            <button onClick={onMenuClick} className={style.menuButton}>
                ☰
            </button>
            <h1 className={style.title}>My App</h1>
        </header>
    );
};