import React from 'react'

export default function Card({className, children, title}) {
    return (
        <div className={`border rounded-lg mb-4 p-4 bg-white shadow-xl ${className}`}>
            {title && <p className="mb-3"><b>{title}</b></p>}
            {children}
        </div>
    )
}
