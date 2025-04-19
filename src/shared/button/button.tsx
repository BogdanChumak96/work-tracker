interface IButton {
    core: string,
    onClick?: () => void
}

export const Button: React.FC<IButton> = ({ core, onClick }) => {
    return (
        <button onClick={onClick} className="px-3.5 py-3 border-4 border-blue-600 text-blue-600">{core}</button>
    )
}