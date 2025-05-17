import React from 'react'

interface ITitle {
    title: string | number,
    className: string,
}

export const Title: React.FC<ITitle> = ({ title, className }) => {
    return (
        <h1 className={className}>{title}</h1>
    )
}
