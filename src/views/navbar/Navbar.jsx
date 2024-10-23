import { NavLink } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
    return (
        <>
            <nav className="navContainer">
                {/* Logo */}
                <div className="logo">
                    <h2>LOGO</h2>
                </div>
                {/* navlinks */}
                <ul className="navlinks">
                    <li className="linkContainer">
                        <NavLink to={'/'}>
                            Home
                        </NavLink>
                    </li>
                    <li className="linkContainer">
                        <NavLink to={'/add'}>
                            Add
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}