import { NavLink } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <div>
                <h1>Page Not Found</h1>
                <p>
                    <NavLink to={'/'}>Back to Home</NavLink>
                </p>
            </div>
        </>
    )
}