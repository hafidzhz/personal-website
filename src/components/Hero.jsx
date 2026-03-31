import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import InteractiveParticles from './InteractiveParticles';

const Hero = () => {
    return (
        <section
            className="min-h-screen flex flex-col justify-center px-4 md:px-16 py-32 md:py-48 relative overflow-hidden bg-[#030303] selection:bg-primary/30"
            id="hero"
        >
            {/* INTERACTIVE CANVAS PARTICLES (ATTRACT + REPEL) */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
                <InteractiveParticles />
            </div>

            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-50">
                {/* Orbital Light Blooms */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        x: [0, 100, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[10%] w-[80vw] h-[80vw] bg-primary/10 blur-[160px] rounded-full opacity-60"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        x: [0, -100, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -right-[20%] w-[70vw] h-[70vw] bg-secondary/5 blur-[140px] rounded-full opacity-40"
                />

                {/* Tactical Digital Scanline Overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 4px' }}
                />
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)', backgroundSize: '60px 60px' }}
                />
            </div>

            <div className="max-w-screen-2xl mx-auto w-full relative z-30 pt-20">
                <div className="flex flex-col items-center text-center space-y-16">

                    <motion.header
                        className="space-y-12 w-full flex flex-col items-center"
                    >
                        <div className="relative pt-12 md:pt-20">
                            <motion.h1
                                initial={{ y: 60, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                                className="font-body font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[7vw] xl:text-[8.5vw] leading-[1.1] tracking-[-0.06em] text-white"
                            >
                                Hafidz Awaluddin <br />
                                <span className="text-secondary italic font-extralight opacity-80">Wahyu</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 1.5 }}
                                className="flex items-center justify-center gap-10 mt-12 mb-10"
                            >
                                <div className="h-[1px] w-12 bg-primary/40 hidden sm:block"></div>
                                <span className="font-body text-xs sm:text-sm text-primary uppercase tracking-[0.6em] sm:tracking-[0.8em]">Senior Backend Engineer</span>
                                <div className="h-[1px] w-12 bg-primary/40 hidden sm:block"></div>
                            </motion.div>

                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
                                className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="font-body text-sm sm:text-lg md:text-2xl text-white leading-tight max-w-5xl tracking-[-0.06em] italic px-4"
                        >
                            Engineering <span className="text-white not-italic font-semibold">Critical Systems</span> for Distributed Infrastructure. Specialized in High-Throughput Resilience and Sub-Second Latency.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="mt-16 sm:mt-24"
                        >
                            <a
                                href="#contact"
                                className="relative px-20 py-8 apple-glass rounded-full font-body font-semibold text-xs text-white uppercase tracking-[0.5em] overflow-hidden group transition-all hover:scale-105 active:scale-95 isolation-auto"
                            >
                                <span className="relative z-10">Get in Touch</span>
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                                <div className="absolute inset-0 shadow-[0_0_40px_rgba(255,255,255,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl pt-16 md:pt-24 border-t border-white/5"
                        >
                            {[
                                { label: "Throughput", val: "14.2k", unit: "req/s", color: "text-primary" },
                                { label: "Stability", val: "99.98%", unit: "uptime", color: "text-secondary" },
                                { label: "Reach", val: "Global", unit: "distributed", color: "text-white" }
                            ].map((stat, i) => (
                                <GlassCard
                                    key={i}
                                    className="p-8 md:p-10 border border-white/10 bg-white/[0.03] rounded-[2rem] md:rounded-[2.5rem] flex flex-col items-center"
                                >
                                    <span className="font-body text-[9px] text-white/20 uppercase tracking-[0.4em] mb-4">{stat.label}</span>
                                    <div className="flex flex-col items-center">
                                        <span className={`font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter tabular-nums ${stat.color} drop-shadow-sm`}>{stat.val}</span>
                                        <span className="font-body text-[10px] text-white/20 uppercase tracking-[0.2em] mt-2 italic">{stat.unit}</span>
                                    </div>
                                </GlassCard>
                            ))}
                        </motion.div>
                    </motion.header>
                </div>
            </div>

            {/* Tactical Grid Grounding */}
            <div className="absolute bottom-12 left-16 flex items-center gap-6 opacity-20">
                <div className="w-12 h-[1px] bg-white" />
                <span className="font-body text-[9px] uppercase tracking-[1em] text-white">PROFESSIONAL REGISTRY</span>
            </div>
            <div className="absolute top-1/2 right-12 font-body text-[8px] text-white/5 uppercase tracking-[2em] vertical-text">
                Hafidz Awaluddin Wahyu
            </div>
        </section>
    );
};

export default Hero;
