import React from 'react'

interface ISubtitle {
    title: string | number,
    className?: string,
}

export const Subtitle: React.FC<ISubtitle> = ({ title, className }) => {
    return (
        <p className={className}>{title}</p>
    )
}
