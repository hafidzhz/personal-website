import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-32 relative overflow-hidden" id="hero">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-col items-start">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]"></div>
                        <span className="font-label text-[10px] text-on-surface uppercase tracking-[0.6em] opacity-40">System::Node::ActiveRegistry</span>
                    </motion.div>
                    
                    <div className="relative">
                        <motion.h1 
                            style={{ y: y1 }}
                            className="headline-xl text-on-surface"
                        >
                            Hafidz <br />
                            <span className="text-secondary italic">Wahyu.</span>
                        </motion.h1>
                        
                        <motion.div 
                            style={{ y: y2 }}
                            className="mt-8 md:mt-0 md:absolute -bottom-24 right-0 max-w-xl p-10 apple-glass rounded-3xl"
                        >
                            <h2 className="headline-lg text-primary mb-6">Backend <span className="text-on-surface">Architect.</span></h2>
                            <p className="font-body text-xl text-on-surface/60 leading-relaxed">
                                Engineering high-availability distributed systems with sub-second latency. Standardizing backend excellence across enterprise-grade healthcare frameworks.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-12 mt-12 border-t border-white/10 pt-10">
                                <div>
                                    <span className="font-label text-[10px] text-on-surface-variant/40 uppercase tracking-widest block mb-4">Concurrency Gap</span>
                                    <span className="font-headline text-5xl text-on-surface tracking-tighter">10k+ <span className="text-secondary text-base italic">req/s</span></span>
                                </div>
                                <div>
                                    <span className="font-label text-[10px] text-on-surface-variant/40 uppercase tracking-widest block mb-4">System Nodes</span>
                                    <span className="font-headline text-5xl text-on-surface tracking-tighter">300+ <span className="text-primary text-base italic">clinics</span></span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Aesthetic Engine */}
            <motion.div 
                style={{ opacity }}
                className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
            >
                <div className="relative w-full h-full max-w-5xl max-h-5xl">
                    <motion.div 
                        animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-primary/5 rounded-full"
                    />
                    <motion.div 
                        animate={{ 
                            rotate: [360, 0],
                            scale: [1.2, 1, 1.2],
                        }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-24 border border-secondary/5 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
