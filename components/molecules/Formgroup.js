import Card from './Card';

export default function Formgroup({title, subtitle, children}) {
    return (
        <div className="mb-6">
            <b className='text-xl'>{title}</b>
            {subtitle && <p className='text-xs text-gray-600'>{subtitle}</p>}
            <Card className="mt-4">
                {children}
            </Card>
            
        </div>
    )
}
