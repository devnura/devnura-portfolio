export default function SectionParagraph({ left, children }) {
    return (
        <p className={`text-gray-600 text-lg ${ !left ? "text-center" : ""}`}>{ children }</p>
    )
}