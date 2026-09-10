import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="absolute left-1/2 -translate-x-1/2 mt-5 md:mt-8 w-[96%] h-10 md:h-16 flex justify-between items-center bg-red-700 border-[1px] md:border-[1.6px] border-solid border-red-700 rounded-lg text-center">
            
                <div className="ml-3 md:ml-5">
                    <img src="/src/assets/logo.png" alt="Logo" className="size-14 md:size-24 rounded-full" />
                </div>

                <div className="hidden md:flex gap-8 mr-6">
                    <Link to="/" className="nav-link"> Home </Link>
                    <Link to="/about" className="nav-link"> About </Link>
                    <Link to="/members" className="nav-link"> Members </Link>
                    <Link to="/gallery" className="nav-link"> Gallery </Link>
                    <Link to="/contact" className="nav-link"> Contact </Link>
                </div>

                <button className="mr-5 md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}> ☰ </button>

                {/* Mobile Menu */}
                {
                    menuOpen && (
                        <div className="absolute top-full right-0 w-1/2 flex flex-col bg-red-600 rounded-lg py-4 gap-4">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/members" className="nav-link">Members</Link>
                            <Link to="/gallery" className="nav-link">Gallery</Link>
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </div>
                    )
                }
            </nav>
        </>
    )
}