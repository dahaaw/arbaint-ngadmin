import React from 'react'

export default function Button({className, text, onClick, bold=false}) {
    return (
        <button className={`border rounded px-3 py-1 text-white ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}
