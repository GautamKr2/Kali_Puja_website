import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="mt-3 md:mt-4 h-8 md:h-12 flex justify-center items-center bg-[#f7b398] text-center shadow-lg">
            
                <div className="hidden md:flex gap-16 mr-6">
                    <Link to="/" className="nav-link"> Home </Link>
                    <Link to="/about" className="nav-link"> About </Link>
                    <Link to="/members" className="nav-link"> Members </Link>
                    <Link to="/gallery" className="nav-link"> Gallery </Link>
                    <Link to="/contact" className="nav-link"> Contact </Link>
                </div>

                <button className="mr-5 md:hidden text-[20px]" onClick={() => setMenuOpen(!menuOpen)}> ☰ </button>

                {/* Mobile Menu */}
                {
                    menuOpen && (
                        <div className="w-1/3 flex flex-col bg-[#f7a788] rounded-xl py-3 gap-2 absolute top-17 right-4 mr-3 md:hidden shadow-lg">
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