import React, { useState } from 'react';
import { Menu, X, ChevronDown, Sparkles, Scale, BookOpen, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import logo from '../assets/KinlyCarePro_logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const location = useLocation();

    const mainLinks = [
        { label: 'Solutions', to: '/solutions' },
        { label: 'Features', to: '/features' },
        { label: 'Guardian™ AI', to: '/guardian-ai' },
        { label: 'Pricing ($25/mo)', to: '/pricing' },
        { label: 'Compare software', to: '/compare' },
        { label: 'vs ShiftCare', to: '/vs/shiftcare' },
        { label: 'Price Guide', to: '/ndis-price-guide' },
        { label: 'Resources', to: '/resources' },
    ];

    const toolLinks = [
        { label: 'Guardian™ AI Note QA', to: '/guardian-ai', desc: 'Live Compliance QA & Rewriter' },
        { label: 'NDIS Price Guide Explorer', to: '/ndis-price-guide', desc: 'PAPL 2025–26 Item Codes' },
        { label: 'Software TCO Calculator', to: '/pricing', desc: 'Calculate Software Savings' },
        { label: 'Why Participant Pricing?', to: '/why-participant-pricing', desc: 'Margin Strategy Whitepaper' },
    ];

    const companyLinks = [
        { label: 'About Us', to: '/about' },
        { label: 'Compliance & Standards', to: '/compliance' },
        { label: 'Security & Privacy', to: '/security' },
        { label: 'Contact Team', to: '/contact' }
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" aria-label="Kinly CarePro home" className="flex items-center">
                            <img src={logo} alt="Kinly CarePro" className="h-10 sm:h-11 md:h-12 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex xl:items-center xl:space-x-5">
                        {mainLinks.map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                className={clsx(
                                    'text-slate-600 hover:text-primary font-semibold transition-colors text-xs xl:text-sm tracking-tight',
                                    location.pathname === item.to && 'text-primary font-extrabold'
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Tools Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => { setToolsOpen(!toolsOpen); setCompanyOpen(false); }}
                                onBlur={() => setTimeout(() => setToolsOpen(false), 200)}
                                className="flex items-center gap-1 text-slate-600 hover:text-primary font-semibold transition-colors text-xs xl:text-sm"
                            >
                                Free Tools
                                <ChevronDown className={clsx('w-3.5 h-3.5 transition-transform', toolsOpen && 'rotate-180')} />
                            </button>

                            <AnimatePresence>
                                {toolsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50"
                                    >
                                        {toolLinks.map((link) => (
                                            <Link
                                                key={link.label}
                                                to={link.to}
                                                className="block p-3 rounded-xl hover:bg-slate-50 transition-colors"
                                                onClick={() => setToolsOpen(false)}
                                            >
                                                <p className="text-xs font-bold text-slate-900">{link.label}</p>
                                                <p className="text-[11px] text-slate-500 mt-0.5">{link.desc}</p>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Company Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => { setCompanyOpen(!companyOpen); setToolsOpen(false); }}
                                onBlur={() => setTimeout(() => setCompanyOpen(false), 200)}
                                className="flex items-center gap-1 text-slate-600 hover:text-primary font-semibold transition-colors text-xs xl:text-sm"
                            >
                                Company
                                <ChevronDown className={clsx('w-3.5 h-3.5 transition-transform', companyOpen && 'rotate-180')} />
                            </button>

                            <AnimatePresence>
                                {companyOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50"
                                    >
                                        {companyLinks.map((link) => (
                                            <Link
                                                key={link.label}
                                                to={link.to}
                                                className={clsx(
                                                    'block px-4 py-2 text-xs font-semibold text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors',
                                                    location.pathname === link.to && 'text-primary font-bold'
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
                            className="px-5 py-2.5 bg-primary text-white rounded-xl hover:bg-primary-700 transition-all shadow-md hover:shadow-lg font-bold text-xs"
                        >
                            Book a demo
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center xl:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-primary p-2 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
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
                        className="xl:hidden bg-white border-b border-slate-100 overflow-hidden shadow-lg max-h-[85vh] overflow-y-auto"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            <Link
                                to="/"
                                className="block px-4 py-2.5 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-xl font-bold text-sm"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>

                            {mainLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className={clsx(
                                        'block px-4 py-2.5 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-xl font-bold text-sm transition-colors',
                                        location.pathname === item.to && 'text-primary font-extrabold bg-primary/5'
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <div className="pt-2 border-t border-slate-100 mt-2">
                                <p className="px-4 py-1 text-[10px] uppercase tracking-widest text-slate-400 font-bold">Tools & Guides</p>
                                {toolLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        to={link.to}
                                        className="block px-4 py-2 text-slate-600 hover:text-primary rounded-xl font-semibold text-xs"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="pt-2 border-t border-slate-100 mt-2">
                                <p className="px-4 py-1 text-[10px] uppercase tracking-widest text-slate-400 font-bold">Company & Legal</p>
                                {companyLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        to={link.to}
                                        className="block px-4 py-2 text-slate-600 hover:text-primary rounded-xl font-semibold text-xs"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="pt-4">
                                <Link
                                    to="/contact"
                                    className="w-full inline-flex justify-center px-6 py-3.5 bg-primary text-white rounded-xl hover:bg-primary-700 font-bold text-center shadow-md text-sm"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Book a demo
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
