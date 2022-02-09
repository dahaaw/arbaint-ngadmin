import React from 'react'

export default function Badge({text, color, className}) {
    return (
        <span className={`${className} ${color} text-white text-sm px-1 py-0.5 rounded-xl`}>{text}</span>
    )
}
