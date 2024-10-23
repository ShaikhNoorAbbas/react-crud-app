import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./layout.css";
// Layout function Startes from here
export default function Layout() {
    return (
        <>
            <section className="container wrapper">
                {/* Navbar header */}
                <header>
                    <Navbar />
                </header>
                {/* Main content */}
                <main>
                    <Outlet />
                </main>
                {/* Footer */}
                <footer>
                    <h4 style={{ textAlign: 'center' }}>@Copyright 2024</h4>
                </footer>
            </section>
        </>
    )
}