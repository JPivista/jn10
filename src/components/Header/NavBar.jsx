import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaChevronDown, FaArrowRight } from 'react-icons/fa';

const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'Services', route: '/service' },
    { name: 'Portfolio', route: '/portfolio' },
    // { name: 'Our Doctors', route: '/our-doctors' },
    // { name: 'Blogs', route: '/blog' },
    // // { name: 'Patient Stories', route: '/patient-stories' },
    // { name: 'Contact Us', route: '/contact-us' },
    // { name: 'Book an Appointment', route: '/book-appointment' }
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [hoverService, setHoverService] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const toggleSubMenu = (category) => {
        setOpenSubMenu(prevCategory => prevCategory === category ? null : category);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
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

    const getLinkClass = ({ isActive }) =>
        isActive ? 'text-white font-bold [text-shadow:_0_4px_8px_rgba(144_165_223_/_0.2)] border-b border-white' : 'text-black hover:text-white ';

    const getSubLinkClass = ({ isActive }) =>
        isActive
            ? 'text-rblue bg-white block px-2 py-1 hover:bg-sblue hover:text-rblue border-b last:border-b-0'  // Added border-b to all sublinks except the last one
            : 'text-black hover:bg-white hover:text-sblue block px-2 py-1 border-b last:border-b-0';

    return (
        <div className={`fixed z-50 top-0 left-0 w-full transition-colors duration-300 ${isScrolled || hoverService ? 'bg-sblue text-[#1c2e4a] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' : 'bg-transparent text-white'}`}>
            <div className='lg:w-[95%] mx-auto sm:px-6 lg:px-6 relative'>
                <div className='flex items-center justify-between p-0'>
                    {/* Logo */}
                    <Link to="/">
                        <img src='/jn10-logo.svg' alt='logo' className="lg:w-[200px] w-[200px] p-5 lg:p-1 lg:bg-white lg:rounded-lg" />
                    </Link>

                    {/* Mobile Menu Icon */}
                    <div className='lg:hidden flex items-center justify-center shadow-sm'>
                        <button
                            type='button'
                            onClick={toggleMenu}
                            className={`focus:outline-none fixed top-4 right-6 ${isScrolled ? 'text-black' : 'text-white'}`}
                        >
                            <FaBars className='h-8 w-8 mt-1' />
                        </button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className='hidden lg:flex items-center px-10 py-4 space-x-6'>
                        <ul className='flex items-center space-x-6 relative bg-sblue px-3 py-2 rounded-lg'>
                            {navLinks.slice(0, -1).map((link) => (
                                <li
                                    key={link.route}
                                    className='group'
                                >
                                    <div className='flex items-center'>
                                        <NavLink
                                            to={link.route}
                                            className={getLinkClass}
                                            style={{ whiteSpace: 'nowrap' }}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </div>

                                    {link.subLinks && (
                                        <div className='absolute top-full left-0 w-[650px] bg-white shadow-lg -mt-4 hidden grid-cols-2 gap-4 p-4 pt-6 opacity-0 group-hover:grid group-hover:opacity-100 transition-opacity duration-300'>
                                            {link.subLinks.map(category => (
                                                <div key={category.category} className='flex flex-col'>
                                                    <p className='font-bold text-gray-800 bg-gray-200 p-2 mb-4 text-rblue'>{category.category}</p>
                                                    <ul className='flex flex-col gap-2'>
                                                        {category.links.map((subLink, index, arr) => (
                                                            <li key={subLink.route} className={`${index === arr.length - 1 ? 'border-b-0' : 'border-b'}`}>
                                                                <NavLink
                                                                    to={subLink.route}
                                                                    className={getSubLinkClass}
                                                                >
                                                                    {subLink.name}
                                                                </NavLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}

                            {/* Book an Appointment button */}
                            {/* <li className='ml-auto z-50'>
                                <NavLink to='/book-appointment'>
                                    <button className={`relative flex items-center gap-2 px-5 py-2 text-[#FFDF00] font-bold rounded-full overflow-hidden ${isScrolled ? 'bg-[#14202E]' : 'bg-[#2B4257]'
                                        } button-reflection`}>
                                        Book an Appointment
                                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                        <span className="reflection-glow"></span>
                                        <span className="border-top"></span>
                                        <span className="border-left"></span>
                                        <span className="border-bottom"></span>
                                        <span className="border-right"></span>
                                    </button>
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`lg:hidden absolute top-16 left-0 w-full bg-white z-50 border border-gray-200 shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className='flex flex-col items-start space-y-4 py-4'>
                        {navLinks.map((link) => (
                            <div key={link.route}>
                                <div className='flex items-center'>
                                    <NavLink
                                        to={link.route}
                                        className={`${getLinkClass} block px-4 py-2 text-black hover:bg-gray-100`}
                                        onClick={() => {
                                            link.subLinks && toggleSubMenu(link.name);
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        {link.name}
                                    </NavLink>
                                    {link.name === 'Services' && (
                                        <FaChevronDown
                                            className={`ml-2 transition-transform duration-300 ${openSubMenu === link.name ? 'rotate-180' : ''}`}
                                        />
                                    )}
                                </div>

                                {/* Mobile Submenu */}
                                {link.subLinks && openSubMenu === link.name && (
                                    <div className='ml-4 mt-2'>
                                        {link.subLinks.map(category => (
                                            <div key={category.category}>
                                                <p className='font-bold text-gray-800 bg-gray-200 p-2'>{category.category}</p>
                                                <ul className='flex flex-col gap-2'>
                                                    {category.links.map((subLink) => (
                                                        <li key={subLink.route} className='border-b last:border-b-0'>
                                                            <NavLink
                                                                to={subLink.route}
                                                                className={`${getSubLinkClass} block px-6 py-2`}
                                                                onClick={() => setIsMenuOpen(false)}
                                                            >
                                                                {subLink.name}
                                                            </NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
