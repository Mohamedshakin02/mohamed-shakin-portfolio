import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import CV from "../assets/resume/Mohamed Shakin CV.pdf";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const [activeSection, setActiveSection] = useState("intro");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);


    return (
        <header className="w-full px-5 py-4 flex items-center">


            <nav className="w-full sm:px-5 sm:py-4 flex items-center">

                {/* Desktop Menu */}
                <div className="hidden lg:flex w-full gap-6 justify-between text-xl items-center">

                    <a
                        href="#about"
                        className={`underline-offset-8 hover:underline transition-all duration-300
                                    ${activeSection === "about" ? "underline" : ""}`}
                    >
                        About
                    </a>

                    <a
                        href="#projects"
                        className={`underline-offset-8 hover:underline transition-all duration-300
                                    ${activeSection === "projects" ? "underline" : ""}`}
                    >
                        Projects
                    </a>


                    <a
                        href="#certificates"
                        className={`underline-offset-8 hover:underline transition-all duration-300
                                    ${activeSection === "certificates" ? "underline" : ""}`}
                    >
                        Certificates
                    </a>

                    <a
                        href="#contact"
                        className={`underline-offset-8 hover:underline transition-all duration-300
                                    ${activeSection === "contact" ? "underline" : ""}`}
                    >
                        Contact
                    </a>


                    <a
                        href={CV}
                        download="Mohamed Shakin-CV.pdf"
                        className="py-3 px-6 rounded-full bg-black text-white"
                    >
                        Download CV <i className="bi bi-download ml-2"></i>
                    </a>
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
                fixed top-0 right-0 h-full w-[250px] bg-white text-black border-5 border-black z-[1050]
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

                <ul className="relative flex flex-col gap-3 p-6 mt-12 h-full">

                    <li className="text-black text-2xl bg-white flex flex-col items-center" onClick={() => setMenuOpen(false)}>
                        <a
                            href="#about" className="w-full text-center"

                        >
                            About
                        </a>

                    </li>

                    <hr className='border-2 mx-5 lg:mx-10' />

                    <li className="text-black text-2xl bg-white flex flex-col items-center" onClick={() => setMenuOpen(false)}>
                        <a
                            href="#projects" className="w-full text-center"

                        >
                            Projects
                        </a>

                    </li>

                    <hr className='border-2 mx-5 lg:mx-10' />

                    <li className="text-black text-2xl bg-white flex flex-col items-center" onClick={() => setMenuOpen(false)}>
                        <a
                            href="#certificates" className="w-full text-center"

                        >
                            Certificates
                        </a>

                    </li>

                    <hr className='border-2 mx-5 lg:mx-10' />

                    <li className="text-black text-2xl bg-white flex flex-col items-center" onClick={() => setMenuOpen(false)}>
                        <a
                            href="#contact" className="w-full text-center"

                        >
                            Contact
                        </a>

                    </li>

                    <li className="absolute bottom-20 left-7 text-black text-2xl bg-white flex flex-col">
                        <a
                            href={CV}
                            download="Mohamed_Shakin-CV.pdf"
                            onClick={() => setMenuOpen(false)}
                            className="py-2 px-5 rounded-full bg-black text-white"
                        >
                            Download CV
                        </a>
                    </li>

                </ul>
            </div>

        </header >
    );
}


export default Navbar