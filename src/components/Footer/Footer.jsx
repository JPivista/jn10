import WhatsAppButton from "../../utils/WhatsAppButton";
import Chatbox from "../../utils/Chatbox";
import { Link, NavLink } from "react-router-dom";
import { Envelope, Phone, GeoAlt, Facebook, Instagram, Youtube } from 'react-bootstrap-icons'; // Import icons

const navLinks = [
    // { name: 'Home', route: '/' },
    { name: 'Services', route: '/service' },
    { name: 'About J10', route: '/about-j10' },
    { name: 'Business Management ', route: '/business-management' },
    { name: 'Portfolio ', route: '/portfolio' },
    { name: 'Careers', route: '/careers' },
    { name: 'Contact Us', route: '/contact-us' },
];

const getLinkClass = ({ isActive }) =>
    isActive ? 'text-[#25B2C0]' : 'text-black';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <>
            <footer className="bg-sblue text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center">

                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h2 className="text-lg font-semibold text-dblue">Quick Links</h2>
                            <ul className='flex flex-col items-start mt-2'>
                                {navLinks.map((link) => (
                                    <li key={link.route}>
                                        <NavLink
                                            to={link.route}
                                            className={getLinkClass}
                                            style={{ whiteSpace: 'nowrap' }}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h2 className="text-lg font-semibold text-dblue">Head Office</h2>
                            <p className='flex flex-col items-start mt-2 text-black'>
                                1/10, Josiar Thottam,
                                Lenin Street,
                                Dhanalakshmi Nagar,
                                Vilankurichi,
                                Coimbatore, TN, IN - 641035.
                            </p>
                        </div>

                        <div className="w-full md:w-1/4 flex flex-col gap-2">
                            <div>
                                <h3 className="text-lg font-semibold text-dblue">Contact Us</h3>
                                <div>
                                    <p className="text-black">
                                        <a href="tel:7010263537" target="_blank" rel="noreferrer">
                                            +91 7010263537
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-dblue">Email us</h3>
                                <div>
                                    <p className="text-black">
                                        <a href="mailto:info@jn10events.in" target="_blank" rel="noreferrer">
                                            info@jn10events.in
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-700 pt-6 text-center text-black">
                        &copy; {currentYear} jn10events.in. All rights reserved.
                    </div>
                </div>
            </footer >

            <div>
                {/* <Chatbox /> */}
                <WhatsAppButton />
            </div>
        </>
    )
}

export default Footer;
