import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [select, setSelect] = useState("user");
    const navigate = useNavigate();
    
    /*useEffect(() => {
        if(select == "member") {
            navigate("/login")
        }
        else if(select == "admin") {
            navigate("/add-member")
        }
        else {
            navigate("/")
        }
    }, [])*/

    return (
        <>
            <nav className="mt-3 md:mt-4 h-8 md:h-12 flex justify-center items-center bg-[#f7b398] text-center shadow-lg">
            
                <div className="hidden md:flex gap-16 mr-6">
                    <Link to="/" className="nav-link"> Home </Link>
                    <Link to="/about" className="nav-link"> About </Link>
                    <Link to="/members" className="nav-link"> Members </Link>
                    <Link to="/gallery" className="nav-link"> Gallery </Link>
                    <Link to="/contact" className="nav-link"> Contact Us </Link>
                </div>

                <select className="absolute right-2 md:right-10 text-[#413e35] border-[1.5px] md:border-2 border-[#f47813] rounded-md px-3 py-[1px] md:py-1 hover:bg-[#f99159]" onChange={(ev) => setSelect(ev.target.value)}>
                    <option className="bg-[#f7b398]" name="user" value="user"> User </option>
                    <option className="bg-[#f7b398]" name="member" value="member"> Member </option>
                </select>

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