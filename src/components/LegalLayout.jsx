import React from 'react';
import { Shield, Lock, FileText, Scale } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const LegalLayout = ({ children, title, lastUpdated }) => {
    const location = useLocation();

    const links = [
        { name: 'Privacy Policy', path: '/privacy', icon: Lock },
        { name: 'Terms of Service', path: '/terms', icon: Scale },
        { name: 'NDIS Compliance', path: '/compliance', icon: Shield },
        { name: 'Security', path: '/security', icon: FileText },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            {/* Header */}
            <div className="bg-slate-900 pt-16 pb-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
                    <p className="text-slate-400 text-sm">Last Updated: {lastUpdated}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar navigation */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sticky top-28">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">Governance & Legal</h3>
                            <nav className="space-y-1">
                                {links.map((link) => {
                                    const Icon = link.icon;
                                    const isActive = location.pathname === link.path;
                                    return (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            className={clsx(
                                                'flex items-center gap-3 px-3 py-2.5 text-xs font-semibold rounded-xl transition-colors',
                                                isActive
                                                    ? 'bg-primary text-white shadow-sm'
                                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            )}
                                        >
                                            <Icon size={16} />
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
                            <div className="prose prose-slate max-w-none text-slate-700">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalLayout;
