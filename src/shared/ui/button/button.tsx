interface IButton {
    core: string,
    onClick?: () => void
    className?: string
}

export const Button: React.FC<IButton> = ({ core, onClick, className }) => {
    return (
        <button onClick={onClick} className={`${className} px-3.5 py-3 border-4 border-blue-600 text-blue-600`}>{core}</button>
    )
}