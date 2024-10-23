import { NavLink } from "react-router-dom";
import "./navbar.css";
import { MdMenuBook } from "react-icons/md";
// Navbar Function
export default function Navbar() {
    return (
        <>
            <nav className="navContainer">
                {/* Logo */}
                <div className="logo">
                    <MdMenuBook size={'4vmax'} color="blueviolet" />
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