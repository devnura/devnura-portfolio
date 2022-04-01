import Button from "./Button";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar() {
    return (
    <div className="flex items-center py-10">
        <div className="w-3/12">
          <Logo/>
        </div>
        <div className="w-6/12">
          <Nav/>
        </div>
        <div className="w-3/12 text-right">
          <Button variant="outline-yellow" pill>Contact </Button>
        </div>
    </div>
    )
}