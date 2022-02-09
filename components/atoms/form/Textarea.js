export default function Textarea({rows = 3, className, placeholder, onChange, value}) {
    return (
        <textarea className={`border rounded px-2 py-1 w-full ${className}`} value={value} rows={rows} placeholder={placeholder} onChange={onChange}/>
    )
}
