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
                    <li>
                        <NavLink to={'/'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/add'}>
                            Add
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}