import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import dashboardImage from '../assets/hero_dashboard.png';

const VideoSection = () => {
    return (
        <section id="video-section" className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">See Guardian in 90 Seconds</h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-sm">
                        Watch how a compliance gap gets caught, rewritten, and synced before it reaches billing.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative max-w-3xl mx-auto aspect-video bg-gray-900 rounded-2xl shadow-2xl overflow-hidden group cursor-pointer"
                >
                    {/* Use dashboard image as placeholder */}
                    <div className="absolute inset-0">
                        <img
                            src={dashboardImage}
                            alt="Kinly CarePro dashboard"
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center pl-1 shadow-inner">
                                <Play className="text-primary fill-current" size={28} />
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-5 left-5 text-white">
                        <p className="font-semibold">Guardian Compliance Demo</p>
                        <p className="text-xs text-gray-300">1:32 • How it works</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
