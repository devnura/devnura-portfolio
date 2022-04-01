export default function ContactItem({ label, value, icon, className}) {
    const addclassName = className ? `${className}` : ``
    return (
        <div className={`flex item-start ${addclassName}`}>
            <img src={icon} className="w-8" />
            <div className="ml-4">
                <div className="text-sm font-semibold mb-1">{label}</div>
                <div className="text-lg font-semibold">{value}</div>

            </div>
        </div>
    )
}