// import classnames from "class";

export default function Button({ className, variant, children, pill }) {
    const addClassName = className ? `${className}` : "";
    const variants = {
        "outline-yellow": `border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500`,
        "yellow": "bg-yellow-400 hover:bg-yellow-500 text-black",
        "black": "bg-black hover:bg-opacity-90 text-white"
    };

    const pickedVariant = variants[variant];

    return (
        <button className={`transition py-3 px-10 font-semibold text-lg inline-block ${pill ? `rounded-full` : ``} ${pickedVariant} ${addClassName}`}>
          {children}  
        </button>
    );
}