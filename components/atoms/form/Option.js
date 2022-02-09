import React from 'react'

export default function Option({selected, data = [], value, onChange}) {
    return (
        <select className="border rounded px-2 py-1.5 w-full bg-white" value={value} onChange={(d) => onChange(d.target.value)}>
            {selected && <option value="">{selected}</option>}
            {data.map(v => <option key={v.id || v.value || v} value={v.value || v}>{v.text || v}</option>)}
        </select>
    )
}
