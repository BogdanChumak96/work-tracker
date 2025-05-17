import React from 'react'

interface ILink {
    title: string | number,
    className: string,
    href: string
}

export const Link: React.FC<ILink> = ({ title, className, href }) => {
    return (
        <a href={href} className={className}>{title}</a>
    )
}
