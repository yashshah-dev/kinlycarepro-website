import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoSection = () => {
    return (
        <section id="video-section" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Guardian Compliance Walkthrough</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Watch a progressive note flagged, rewritten, and synced to billing while GPS-proofed shifts flow into a compliant invoice.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative max-w-4xl mx-auto aspect-video bg-gray-900 rounded-2xl shadow-2xl overflow-hidden group cursor-pointer"
                >
                    {/* Placeholder for video thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                        {/* Abstract UI or pattern */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>

                        <div className="relative z-10 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center pl-1 shadow-inner">
                                <Play className="text-primary fill-current" size={32} />
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-6 left-6 text-white drop-shadow-md">
                        <p className="font-semibold text-lg">Compliance Simulation</p>
                        <p className="text-sm text-gray-200">2:15 • Guardian Compliance</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default VideoSection;
