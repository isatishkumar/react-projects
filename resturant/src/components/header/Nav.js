import { Link } from "react-router";

export default function Nav(){
    return (
        <nav className="">
            <ul className="flex gap-6">
                <li ><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}