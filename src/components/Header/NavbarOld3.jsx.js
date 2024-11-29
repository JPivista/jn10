import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'Services', route: '/service' },
    // { name: 'Porfolio', route: '/portfolio' },
    { name: 'About J10', route: '/about-j10' },
    { name: 'Business Management ', route: '/business-management ' },
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

    const getLinkClass = ({ isActive }) =>
        isActive
            ? 'text-[#25B2C0] font-bold border-b border-[#25B2C0]'
            : 'text-black hover:text-[#25B2C0]'; // Hover and active classes for individual links

    return (
        <div className={`fixed z-50 top-0 left-0 w-full transition-colors duration-300 ${isScrolled || isMenuOpen ? 'bg-sblue text-[#1c2e4a] shadow-lg' : 'bg-transparent text-white'}`}>
            <div className='container-xl mx-auto flex items-center justify-between p-0'>
                <Link to="/">
                    <img src='/jn10-logo.svg' alt='logo' className="lg:w-[200px] p-5 lg:p-1 lg:bg-white lg:rounded-lg" />
                </Link>
                <button onClick={() => setIsMenuOpen(prev => !prev)} className='lg:hidden text-white'>
                    <FaBars className='h-8 w-8' />
                </button>

                {/* Desktop Menu */}
                <div className={`hidden lg:flex space-x-6 px-3 py-2 ${isScrolled || isMenuOpen ? 'bg-sblue' : 'bg-sblue  rounded-lg'}`}>
                    <ul className='flex items-center space-x-6'>
                        {navLinks.map(link => (
                            <li key={link.route}>
                                <NavLink to={link.route} className={getLinkClass}>{link.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden absolute top-16 left-0 w-full ${isMenuOpen ? 'bg-sblue' : ''} z-50`}>
                    <div className='flex flex-col space-y-4 py-4'>
                        {navLinks.map(link => (
                            <NavLink key={link.route} to={link.route} className='block px-4 py-2 text-white hover:bg-gray-100' onClick={() => setIsMenuOpen(false)}>
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
