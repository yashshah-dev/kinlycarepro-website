import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Shield, Lock, FileText, Scale } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const LegalLayout = ({ children, title, lastUpdated, seoTitle, seoDescription, seoUrl }) => {
    const location = useLocation();

    const links = [
        { name: 'Privacy Policy', path: '/privacy', icon: Lock },
        { name: 'Terms of Service', path: '/terms', icon: Scale },
        { name: 'NDIS Compliance', path: '/compliance', icon: Shield },
        { name: 'Security', path: '/security', icon: FileText },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Header */}
            <div className="bg-primary pt-32 pb-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
                    <p className="text-primary-100/80 text-lg">Last Updated: {lastUpdated}</p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar navigation */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sticky top-24">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">Legal Documents</h3>
                            <nav className="space-y-1">
                                {links.map((link) => {
                                    const Icon = link.icon;
                                    const isActive = location.pathname === link.path;
                                    return (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            className={clsx(
                                                'flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                                                isActive
                                                    ? 'bg-primary/5 text-primary'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            )}
                                        >
                                            <Icon size={18} />
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                            <div className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary prose-li:text-gray-600 max-w-none">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LegalLayout;
