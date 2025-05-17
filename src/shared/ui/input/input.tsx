interface IInput {
    value?: string | number,
    className: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    type?: string,
    placeholder?: string
}

export const Input: React.FC<IInput> = ({ value, className, onChange, type, placeholder }) => {
    return (
        <input placeholder={placeholder} type={type} value={value} onChange={onChange} className={className} />
    )
}