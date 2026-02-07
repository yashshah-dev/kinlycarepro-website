import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import logo from '../assets/KinlyCarePro_logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const location = useLocation();

    const mainLinks = [
        { label: 'Home', to: '/' },
        { label: 'Features', to: '/features' },
        { label: 'Pricing', to: '/pricing' },
        { label: 'Resources', to: '/resources' },
        { label: 'Contact', to: '/contact' }
    ];

    const companyLinks = [
        { label: 'About Us', to: '/about' },
        { label: 'Careers', to: '/careers' },
        { label: 'Partners', to: '/partners' },
        { label: 'Compliance', to: '/compliance' }
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <Link to="/" aria-label="Kinly CarePro home">
                            <img src={logo} alt="Kinly CarePro" className="h-16 sm:h-20 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-6">
                        {mainLinks.map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                className={clsx(
                                    'text-gray-600 hover:text-primary font-medium transition-colors text-sm',
                                    location.pathname === item.to && 'text-primary font-semibold'
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Company Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setCompanyOpen(!companyOpen)}
                                onBlur={() => setTimeout(() => setCompanyOpen(false), 150)}
                                className="flex items-center gap-1 text-gray-600 hover:text-primary font-medium transition-colors text-sm"
                            >
                                Company
                                <ChevronDown className={clsx('w-4 h-4 transition-transform', companyOpen && 'rotate-180')} />
                            </button>

                            <AnimatePresence>
                                {companyOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                                    >
                                        {companyLinks.map((link) => (
                                            <Link
                                                key={link.label}
                                                to={link.to}
                                                className={clsx(
                                                    'block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors',
                                                    location.pathname === link.to && 'text-primary font-semibold'
                                                )}
                                                onClick={() => setCompanyOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            to="/contact"
                            className="px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-[#0b3b47] transition-all shadow-md hover:shadow-lg font-semibold text-sm"
                        >
                            Book Demo
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center lg:hidden">
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

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-gray-100 overflow-hidden shadow-lg"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {mainLinks.map((item) => (
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

                            {/* Company section in mobile */}
                            <div className="pt-2 border-t border-gray-100 mt-2">
                                <p className="px-4 py-2 text-xs uppercase tracking-wide text-gray-400 font-semibold">Company</p>
                                {companyLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        to={link.to}
                                        className={clsx(
                                            'block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg font-medium transition-colors text-sm',
                                            location.pathname === link.to && 'text-primary font-semibold'
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="pt-4">
                                <Link
                                    to="/contact"
                                    className="w-full inline-flex justify-center px-6 py-3.5 bg-primary text-white rounded-lg hover:bg-[#0b3b47] font-semibold text-center shadow-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Book Demo
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
