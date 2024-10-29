import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import "./layout.css";
export default function Layout() {
    return (
        <>
            <section className="wrapper container">
                {/* navbar */}
                <header>
                    <Navbar />
                </header>
                {/* main Content */}
                <main className="mainContent">
                    <Outlet />
                </main>
                {/* Footer */}
                <footer>
                    <h4>Copyright@2024</h4>
                </footer>
            </section>
        </>
    )
}