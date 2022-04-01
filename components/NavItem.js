export default function NavItem({ children }) {
    return (
        <li><a className="text-white text-lg hover:text-opacity-100 text-opacity-60 font-semibold cursor-pointer">{ children }</a></li>
    )
}