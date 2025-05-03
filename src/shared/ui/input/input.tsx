interface IInput {
    value: string | number,
    className: string,
    onChange: () => void,
    type: string
}

export const Input: React.FC<IInput> = ({ value, className, onChange, type }) => {
    return (
        <input type={type} value={value} onChange={onChange} className={className} />
    )
}