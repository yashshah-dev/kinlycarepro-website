import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import logo from '../assets/KinlyCarePro_logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-5 gap-10 mb-12">
                    {/* Logo and Newsletter */}
                    <div className="col-span-1 md:col-span-2">
                        <button onClick={scrollToTop} className="inline-block bg-white p-4 rounded-lg mb-6 hover:shadow-lg transition-shadow cursor-pointer">
                            <img src={logo} alt="Kinly CarePro" className="h-16 w-auto" />
                        </button>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Complete NDIS management platform with mobile apps, smart rostering, one-click billing, and Guardian compliance.
                        </p>

                        {/* Newsletter Signup */}
                        <div>
                            <p className="text-white font-semibold text-sm mb-3">Get compliance updates</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-1 px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-primary"
                                />
                                <button className="px-4 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-[#0b3b47] transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-6 space-y-2 text-sm">
                            <p className="flex items-center gap-2 text-gray-400">
                                <Phone className="w-4 h-4" /> +61 1800 287 227
                            </p>
                            <p className="flex items-center gap-2 text-gray-400">
                                <Mail className="w-4 h-4" /> hello@kinlycarepro.com
                            </p>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-white font-bold mb-5">Product</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link to="/compliance" className="hover:text-white transition-colors">Compliance</Link></li>
                            <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-bold mb-5">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-white font-bold mb-5">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">NDIS Data Standards</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="mb-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                        <p className="text-xs text-gray-400 leading-relaxed">
                            <strong className="text-gray-300">Technology Disclaimer:</strong> Guardian provides documentation suggestions only. All clinical decisions remain the responsibility of qualified healthcare professionals per NDIS Practice Standards.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                        <p>© {currentYear} Kinly CarePro. All rights reserved.</p>
                        <div className="flex items-center space-x-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-white transition-colors">Twitter</a>
                            <button
                                onClick={scrollToTop}
                                className="flex items-center gap-1 hover:text-white transition-colors"
                            >
                                Back to top <ArrowUp className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
