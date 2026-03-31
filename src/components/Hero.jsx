import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-fit md:min-h-screen flex flex-col justify-center px-6 md:px-12 py-6 pt-16 md:py-12 md:pt-20 relative overflow-hidden bg-surface" id="hero">
            <div className="architectural-grid absolute inset-0 opacity-20 pointer-events-none"></div>
            <div className="neural-lines z-0 opacity-20"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10 py-12 md:py-32">
                <div className="asymmetric-grid w-full">
                    <div className="col-span-12 lg:col-span-11">
                        <div className="flex items-center gap-4 mb-4 md:mb-12 opacity-40">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></div>
                            <span className="font-label text-[9px] text-on-surface uppercase tracking-[0.8em] opacity-30">Registry_Status: [LIVE_SYNC]</span>
                        </div>
                        
                        {/* Floating Data Point Clouds */}
                        <div className="absolute -left-64 top-0 w-128 h-128 opacity-20 pointer-events-none overflow-hidden">
                             {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-primary rounded-full"
                                    animate={{ 
                                        x: [Math.random() * 500, Math.random() * 500],
                                        y: [Math.random() * 500, Math.random() * 500],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{ duration: 10 + Math.random() * 20, repeat: Infinity, ease: "linear" }}
                                />
                             ))}
                        </div>

                        <motion.h1
                            initial={{ opacity: 1, x: 0 }}
                            className="font-headline tracking-tighter mb-4 md:mb-12 relative"
                        >
                            <span className="block text-xl md:text-5xl text-secondary italic mb-2 md:mb-4 tracking-[-0.02em] font-light opacity-80">Hafidz Awaluddin Wahyu</span>
                            <span className="block text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.85] mb-1 md:mb-2 uppercase tracking-tightest font-black">Engineering</span>
                            <span className="block text-5xl md:text-7xl lg:text-8xl text-primary leading-[0.85] italic uppercase tracking-tightest font-black">Scalable Systems.</span>
                        </motion.h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mt-12 md:mt-24">
                            <motion.p
                                initial={{ opacity: 1, y: 0 }}
                                className="font-body text-lg md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed border-l-2 border-outline-variant/20 pl-6 md:pl-12 opacity-60"
                            >
                                Engineering high-availability backend systems with sub-second latency. I bridge the gap between complex business requirements and scalable technical solutions.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 1 }}
                                className="flex flex-col gap-4 md:gap-8"
                            >
                                <div className="flex items-center gap-8 md:gap-16">
                                    <div className="flex flex-col">
                                        <span className="font-label text-xs md:text-sm text-on-surface-variant/40 uppercase tracking-widest block mb-4">Global Concurrency</span>
                                        <span className="font-headline text-5xl md:text-8xl text-on-surface tracking-tighter">10k+ <span className="text-secondary text-2xl italic">req/s</span></span>
                                    </div>
                                    <div className="w-[1px] h-20 md:h-32 bg-outline-variant/20"></div>
                                    <div className="flex flex-col">
                                        <span className="font-label text-xs md:text-sm text-on-surface-variant/40 uppercase tracking-widest block mb-4">System Nodes</span>
                                        <span className="font-headline text-5xl md:text-8xl text-on-surface tracking-tighter">300+ <span className="text-primary text-2xl italic">clinics</span></span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cinematic 3D Background Engine */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40 md:opacity-50">
                <div className="relative w-full h-full flex items-center justify-center translate-y-32 md:translate-y-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2.5 }}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="relative w-[600px] h-[600px] md:w-[1200px] md:h-[1200px] flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                            <motion.div
                                animate={{ rotateY: [0, -360], rotateX: [0, 45, 0] }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                style={{ transformStyle: "preserve-3d" }}
                                className="absolute w-32 h-32 md:w-64 md:h-64 border border-primary/20 bg-primary/2 flex items-center justify-center shadow-[0_0_120px_rgba(var(--primary-rgb),0.1)]"
                            >
                                <div className="w-4 h-4 bg-primary rounded-full animate-ping blur-[2px]"></div>
                            </motion.div>

                            {[
                                { rotate: "rotateX(75deg)", color: "primary", speed: 30 },
                                { rotate: "rotateX(-45deg) rotateY(45deg)", color: "secondary", speed: 45 },
                                { rotate: "rotateX(30deg) rotateY(-30deg)", color: "primary", speed: 60 },
                                { rotate: "rotateX(0deg) rotateY(90deg)", color: "secondary", speed: 75 },
                                { rotate: "rotateX(85deg) rotateY(15deg)", color: "primary", speed: 90 }
                            ].map((ring, i) => (
                                <motion.div
                                    key={i}
                                    style={{ transform: ring.rotate, transformStyle: "preserve-3d", position: "absolute" }}
                                    animate={{ rotateZ: [0, 360] }}
                                    transition={{ duration: ring.speed, repeat: Infinity, ease: "linear" }}
                                    className={`w-full h-full border-[0.5px] border-${ring.color}/10 rounded-full`}
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className={`w-4 h-4 rounded-full bg-${ring.color}/10 blur-[4px]`}></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
