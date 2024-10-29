import { NavLink } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
    return (
        <>
            <nav className="navContainer">
                {/* logo container */}
                <div className="logo">
                    <NavLink to={'/'}><h2>LOGO</h2></NavLink>
                </div>
                {/* navlinks */}
                <ul className="navlinks">
                    <NavLink to={'/'}><li>Home</li></NavLink>
                    <NavLink to={"/add"}><li>Add</li></NavLink>
                </ul>
            </nav>
        </>
    )
}