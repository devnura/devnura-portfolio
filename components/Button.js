export default function Button({ className, variant, children }) {
    const addClassName = className ? `${className}` : ""

    const variants = {
        "outline-yellow": "border-2 border-yellow-500 text-yellow-500",
        "yellow": "bg-yellow-500 text-black"
    }

    const pickedVariant = variants[variant]

    return(
        <a className={`py-3 px-10 font-semibold text-lg rounded-full inline-block ${pickedVariant} ${addClassName}`}>
            { children }
        </a>
    )
}
