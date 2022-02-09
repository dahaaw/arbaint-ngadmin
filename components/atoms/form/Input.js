export default function Input({tabIndex, autoFocus, form, name = '', key, ref, disabled=false, className = '', placeholder = '', type = 'text', checked=false, onChange='', onClick, value= '', mode= '', width ="w-full", max, min}) {

    return (
        <input 
            form={form}
            tabIndex={tabIndex}
            autoFocus={autoFocus}
            key={key}
            ref={ref}
            type={type} 
            disabled={disabled} 
            name={name} 
            checked={checked} 
            className={`border rounded px-3 py-1 ${width} ${className}`} 
            placeholder={placeholder} 
            value={value} 
            onChange={(d) => onChange(d.target.value)} 
            onClick={onClick}
            maxx={max} 
            min={min}
        /> 
    )
}
