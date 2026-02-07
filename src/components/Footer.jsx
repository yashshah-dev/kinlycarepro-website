import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/KinlyCarePro_logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="inline-block bg-white p-5 rounded-lg mb-6">
                            <img src={logo} alt="Kinly CarePro" className="h-24 w-auto" />
                        </div>
                        <p className="mt-6 text-gray-400 text-sm leading-relaxed">
                            Kinly CarePro combines mobile apps, smart rostering, one-click billing, and Guardian safety checks into one NDIS platform for Australian providers.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link to="/compliance" className="hover:text-white transition-colors">Compliance</Link></li>
                            <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Compliance Technology</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">NDIS Data Standards</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8">
                    <div className="mb-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
                        <p className="text-xs text-gray-400 leading-relaxed">
                            <strong className="text-gray-300">Technology Disclaimer:</strong> Guardian is an administrative compliance assistant that provides documentation improvement suggestions. It does not make autonomous clinical decisions or provide direct clinical care. All clinical documentation and decisions remain the responsibility of appropriately qualified healthcare professionals in accordance with NDIS Practice Standards and relevant legislation. Kinly CarePro does not replace professional judgment or your duty of care obligations.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                        <p>© {currentYear} Kinly CarePro. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Twitter</a>
                            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-white transition-colors">Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
