import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import logo from '../assets/KinlyCarePro_logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { label: 'Home', to: '/' },
        { label: 'Features', to: '/features' },
        { label: 'Compliance', to: '/compliance' },
        { label: 'Resources', to: '/resources' },
        { label: 'Pricing', to: '/pricing' },
        { label: 'About', to: '/about' },
        { label: 'Careers', to: '/careers' },
        { label: 'Partners', to: '/partners' },
        { label: 'Contact', to: '/contact' }
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <Link to="/" aria-label="Kinly CarePro home">
                            <img src={logo} alt="Kinly CarePro" className="h-[100px] sm:h-28 w-auto" />
                        </Link>
                    </div>

                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                className={clsx(
                                    'text-gray-600 hover:text-primary font-medium transition-colors',
                                    location.pathname === item.to && 'text-primary font-semibold'
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            to="/pricing"
                            className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-[#0b3b47] transition-all shadow-md hover:shadow-lg font-semibold text-sm"
                        >
                            Book Pilot
                        </Link>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary p-2 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-lg"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-3">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className={clsx(
                                        'block px-4 py-3 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg font-medium transition-colors',
                                        location.pathname === item.to && 'text-primary font-semibold'
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    to="/pricing"
                                    className="w-full inline-flex justify-center px-6 py-3.5 bg-primary text-white rounded-lg hover:bg-[#0b3b47] font-semibold text-center shadow-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Book Pilot
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
