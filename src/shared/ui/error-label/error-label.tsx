import React from 'react'

interface IErrorLabel {
    label: string | number,
    className: string,
}

export const ErrorLabel: React.FC<IErrorLabel> = ({ label, className }) => {
    return (
        <p className={className}>{label}</p>
    )
}
