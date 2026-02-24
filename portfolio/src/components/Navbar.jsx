import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);


    return (
        <header className="w-full px-5 py-4 flex items-center">


            <nav className="w-full px-5 py-4 flex items-center">

                {/* Desktop Menu */}
                <div className="hidden lg:flex w-full gap-6 justify-between text-xl items-center">

                    <NavLink to="/">
                        About
                    </NavLink>

                    <NavLink to="/">
                        Projects
                    </NavLink>


                    <NavLink to="/">
                        Certificates
                    </NavLink>


                    <NavLink to="/">
                        Contact
                    </NavLink>


                    <NavLink className="py-2 px-5 rounded-full bg-black text-white" to="/">
                        Download CV
                    </NavLink>
                </div>

                {/* Right Side Controls */}
                <div className="ml-auto flex items-center">

                    {/* Mobile Menu Button */}
                    <button
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black border-2 border-black lg:hidden text-2xl"
                        onClick={(e) => {
                            e.stopPropagation();
                            setMenuOpen(true);
                        }}
                    >
                        <i className="bi bi-list"></i>
                    </button>

                </div>

            </nav>

            {/* Mobile Side Menu */}
            <div
                ref={menuRef}
                className={`
                fixed top-0 right-0 h-full w-[250px] bg-white text-black z-[1050]
                transition-transform duration-500
                ${menuOpen ? "translate-x-0" : "translate-x-full"}
            `}
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className="absolute top-4 right-5 ml-auto text-2xl text-black bg-white"
                    onClick={() => setMenuOpen(false)}
                >
                    <i className="bi bi-x-lg"></i>
                </button>

                <ul className="flex flex-col gap-3 p-6 mt-12">

                    <li className="text-black bg-white flex flex-col items-center">
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>
                    </li>

                    <li className="text-black bg-white flex flex-col items-center">
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            Projects
                        </Link>
                    </li>

                    <li className="text-black bg-white  flex flex-col items-center">
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            Certificates
                        </Link>
                    </li>

                    <li className="text-black bg-white flex flex-col items-center">
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>
                    </li>

                    <li className="text-black bg-white flex flex-col items-center">
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            Download CV
                        </Link>
                    </li>

                </ul>
            </div>

        </header >
    );
}


export default Navbar