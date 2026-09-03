import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUp, ShieldCheck, Scale, Phone } from 'lucide-react';
import logo from '../assets/KinlyCarePro_logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-5 gap-10 mb-12">
                    {/* Logo & Overview */}
                    <div className="col-span-1 md:col-span-2">
                        <button onClick={scrollToTop} className="inline-block bg-white p-2.5 rounded-xl mb-6 hover:shadow-lg transition-shadow cursor-pointer">
                            <img src={logo} alt="Kinly CarePro" className="h-10 w-auto object-contain" />
                        </button>
                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4 max-w-sm">
                            The all-inclusive, audit-proof NDIS practice management platform. $25 AUD / active participant / month with unlimited staff accounts and zero paywalls.
                        </p>

                        <div className="space-y-1.5 text-xs text-slate-400">
                            <p className="flex items-center gap-2">
                                <Mail className="w-3.5 h-3.5 text-primary" />
                                <a href="mailto:support@kinlycarepro.com" className="hover:text-white transition-colors">support@kinlycarepro.com</a>
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="w-3.5 h-3.5 text-primary" />
                                <a href="tel:+61427884336" className="hover:text-white transition-colors">+61 427 884 336 (Direct Support)</a>
                            </p>
                            <p className="text-slate-500 pt-1">
                                🇦🇺 100% Australian Owned & Hosted in Sydney AWS (ap-southeast-2)
                            </p>
                        </div>
                    </div>

                    {/* Product & Comparisons */}
                    <div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Platform</h4>
                        <ul className="space-y-2.5 text-xs text-slate-400">
                            <li><Link to="/features" className="hover:text-white transition-colors">8 Core Pillars</Link></li>
                            <li><Link to="/guardian-ai" className="hover:text-white transition-colors font-semibold text-emerald-400">Guardian™ AI Note QA</Link></li>
                            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing ($25/mo)</Link></li>
                            <li><Link to="/vs/shiftcare" className="hover:text-white transition-colors flex items-center gap-1"><Scale className="w-3 h-3 text-primary" /> vs ShiftCare</Link></li>
                            <li><Link to="/why-participant-pricing" className="hover:text-white transition-colors">Why Participant Pricing?</Link></li>
                        </ul>
                    </div>

                    {/* Free Tools & Resources */}
                    <div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Tools & Guides</h4>
                        <ul className="space-y-2.5 text-xs text-slate-400">
                            <li><Link to="/ndis-price-guide" className="hover:text-white transition-colors font-semibold text-emerald-400">NDIS Price Guide (PAPL)</Link></li>
                            <li><Link to="/pricing" className="hover:text-white transition-colors">TCO Savings Calculator</Link></li>
                            <li><Link to="/resources" className="hover:text-white transition-colors">Audit Checklists & Decks</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Kinly CarePro</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Legal & Governance */}
                    <div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Governance</h4>
                        <ul className="space-y-2.5 text-xs text-slate-400">
                            <li><Link to="/compliance" className="hover:text-white transition-colors">NDIS Practice Standards</Link></li>
                            <li><Link to="/security" className="hover:text-white transition-colors">Enterprise Security Stack</Link></li>
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section with Disclaimer */}
                <div className="border-t border-slate-800 pt-8 space-y-4">
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
                        <div>
                            <p>© {currentYear} Kinly CarePro. All rights reserved. ABN: 84 652 193 841.</p>
                            <p className="text-[11px] text-slate-600 mt-0.5">Melbourne, VIC, Australia · Built for Australian NDIS Care Providers</p>
                        </div>
                        <div className="flex items-center space-x-5">
                            <a href="https://www.linkedin.com/company/kinlycarepro" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">LinkedIn</a>
                            <a href="https://x.com/KinlyCarePro" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">X (Twitter)</a>
                            <Link to="/vs/shiftcare" className="hover:text-slate-400 transition-colors">vs ShiftCare</Link>
                            <Link to="/ndis-price-guide" className="hover:text-slate-400 transition-colors">PAPL Directory</Link>
                            <button
                                onClick={scrollToTop}
                                className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                            >
                                Back to top <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>

                    <div className="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-900">
                        <p>
                            <strong>Trademark Notice:</strong> All product names, logos, and brands (including <em>ShiftCare</em>, <em>CareMaster</em>, <em>SupportAbility</em>, <em>Xero</em>, and <em>MYOB</em>) are property of their respective owners. Reference to third-party trademarks is made under nominative fair use for the purpose of comparative advertising in accordance with Section 122(1)(d) of the <em>Trade Marks Act 1995 (Cth)</em>. Kinly CarePro is an independent software platform.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
