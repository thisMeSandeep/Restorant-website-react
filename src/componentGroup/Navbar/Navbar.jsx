import React, { useState, useEffect } from 'react';
import Logo from '../../componentsSingle/Logo';
import PagesDropdown from '../../componentsSingle/PagesDropdown';
import Button from '../../componentsSingle/Button';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={` p-2 transition-all duration-300 ease-in-out fixed top-0 left-0 right-0  z-50 ${
                isScrolled ? 'w-full bg-blue shadow-md' : 'w-10/12 mx-auto'
            }`}
        >
            {/* Mobile Header */}
            <div className="flex justify-between items-center lg:hidden">
                <div className="text-white">
                    <Logo />
                </div>
                <button
                    className="text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex justify-between items-center">
                <div className="text-white">
                    <Logo />
                </div>
                <div className="flex items-center space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange text-lg font-semibold'
                                : 'text-white hover:text-lightorange text-lg font-semibold'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange text-lg font-semibold'
                                : 'text-white hover:text-lightorange text-lg font-semibold'
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/service"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange text-lg font-semibold'
                                : 'text-white hover:text-lightorange text-lg font-semibold'
                        }
                    >
                        Service
                    </NavLink>
                    <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange text-lg font-semibold'
                                : 'text-white hover:text-lightorange text-lg font-semibold'
                        }
                    >
                        Menu
                    </NavLink>
                    <PagesDropdown />
                    <NavLink
                        to="/contacts"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange text-lg font-semibold'
                                : 'text-white hover:text-lightorange text-lg font-semibold'
                        }
                    >
                        Contact
                    </NavLink>
                    <Button>Book a Table</Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-blue z-50 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } lg:hidden`}
            >
                <div className="flex flex-col items-center p-4">
                    <div className="text-white mb-4">
                        <Logo />
                    </div>
                    <button
                        className="text-white focus:outline-none mb-4"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            ></path>
                        </svg>
                    </button>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange text-lg font-semibold mb-4'
                                : 'text-white hover:text-lightorange text-lg font-semibold mb-4'
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange text-lg font-semibold mb-4'
                                : 'text-white hover:text-lightorange text-lg font-semibold mb-4'
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/service"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange text-lg font-semibold mb-4'
                                : 'text-white hover:text-lightorange text-lg font-semibold mb-4'
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Service
                    </NavLink>
                    <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange text-lg font-semibold mb-4'
                                : 'text-white hover:text-lightorange text-lg font-semibold mb-4'
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Menu
                    </NavLink>
                    <PagesDropdown />
                    <NavLink
                        to="/contacts"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange text-lg font-semibold mb-4'
                                : 'text-white hover:text-lightorange text-lg font-semibold mb-4'
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </NavLink>
                    <Button className="w-full">Book a Table</Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
