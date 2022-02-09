import React from 'react'

export default function Logo({width, height, className}) {
    return (
        <img src="/img/logo.png" className={className} height={height} width={width} />
    )
}
