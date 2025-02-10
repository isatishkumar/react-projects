import logo from "../../assests/icons/Logo.svg";
import Nav from "./Nav";

function Header(){
    return (
        <header className="flex flex-wrap mx-[15%] justify-between gap-8 py-4 items-center"> 
            <img  src={logo} alt="logo" />
            <Nav></Nav>
        </header>
    )
}

export default Header;