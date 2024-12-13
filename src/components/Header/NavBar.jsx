import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const navLinks = [
    // { name: 'Home', route: '/' },
    { name: 'Services', route: '/service' },
    { name: 'About J10', route: '/about-j10' },
    { name: 'Business Management ', route: '/business-management' },
    { name: 'Portfolio ', route: '/portfolio' },
    { name: 'Careers', route: '/careers' },
    { name: 'Contact Us', route: '/contact-us' },
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Disable page scroll when the mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';  // Disable scroll
        } else {
            document.body.style.overflow = 'auto';   // Enable scroll
        }
        return () => document.body.style.overflow = 'auto'; // Clean up on unmount
    }, [isMenuOpen]);

    const getLinkClass = ({ isActive }) =>
        isActive
            ? 'text-[#25B2C0] font-bold border-b-2 border-[#25B2C0]'  // Active link with bold text and bottom border
            : 'text-black hover:text-[#25B2C0]';  // Default link style

    // Close the mobile menu when clicking outside the menu
    const handleOverlayClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={`fixed z-50 top-0 left-0 w-full transition-colors duration-300 ${isScrolled || isMenuOpen ? 'bg-sblue text-black shadow-lg' : 'bg-transparent text-black'}`}>
            <div className='container-xl mx-auto flex items-center justify-between p-0'>
                <Link to="/">
                    <img src='/jn10-logo.svg' alt='logo' className="lg:w-[200px] w-[200px] p-1 m-2 lg:p-0 bg-white rounded-lg" />
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    className={`lg:hidden text-black pr-9 ${isMenuOpen ? 'text-white z-50' : 'text-black'}`}
                >
                    <FaBars className='h-8 w-8' />
                </button>

                {/* Desktop Menu */}
                <div className={`hidden lg:flex space-x-6 px-4 py-2 ${isScrolled || isMenuOpen ? 'bg-sblue rounded-lg' : 'bg-sblue rounded-lg shadow-md shadow-gray-400'}`}>
                    <ul className='flex items-center space-x-6'>
                        {navLinks.map(link => (
                            <li key={link.route}>
                                <NavLink to={link.route} className={getLinkClass}>
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Overlay */}
                {isMenuOpen && (
                    <div
                        onClick={handleOverlayClick}
                        className="lg:hidden fixed inset-0 bg-black opacity-50 z-30"
                    ></div>
                )}

                {/* Side Navigation for Mobile */}
                <div
                    className={`lg:hidden fixed top-0 left-0 w-[250px] h-full transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} ${isScrolled || isMenuOpen ? 'bg-white shadow-xl' : 'bg-transparent'}`}
                >
                    <div className='flex flex-col space-y-6 py-6 px-4'>
                        {navLinks.map(link => (
                            <NavLink
                                key={link.route}
                                to={link.route}
                                className={({ isActive }) =>
                                    isActive ? 'block text-[#25B2C0] py-2 font-bold hover:bg-gray-200' : 'block text-black py-2 hover:bg-gray-200'
                                }
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
