import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const Cube = ({ size, color, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
                opacity: [0, 0.4, 0],
                rotateY: [0, 360],
                rotateX: [0, 180],
                scale: [0.5, 1, 0.5],
                translateZ: [0, 100, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, delay, ease: "linear" }}
            className="absolute border border-white/20 backdrop-blur-[1px]"
            style={{
                width: size,
                height: size,
                backgroundColor: `${color}10`,
                boxShadow: `0 0 20px ${color}20`,
                transformStyle: 'preserve-3d',
            }}
        >
            {/* 3D Sides */}
            <div className="absolute inset-0 border border-white/5" style={{ transform: `translateZ(${size/2}px)` }} />
            <div className="absolute inset-0 border border-white/5" style={{ transform: `rotateY(90deg) translateZ(${size/2}px)` }} />
            <div className="absolute inset-0 border border-white/5" style={{ transform: `rotateY(180deg) translateZ(${size/2}px)` }} />
            <div className="absolute inset-0 border border-white/5" style={{ transform: `rotateY(-90deg) translateZ(${size/2}px)` }} />
        </motion.div>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set((clientX / innerWidth - 0.5) * 40);
        mouseY.set((clientY / innerHeight - 0.5) * 40);
    };

    const cubes = useMemo(() => Array.from({ length: 15 }, (_, i) => ({
        size: Math.random() * 60 + 40,
        color: i % 2 === 0 ? "rgba(173, 203, 218, 1)" : "rgba(210, 145, 41, 1)",
        delay: i * 0.8,
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
    })), []);

    return (
        <section 
            onMouseMove={handleMouseMove}
            className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-40 pb-20 relative overflow-hidden bg-[#030303]" 
            id="hero"
        >
            {/* 3D Immersive Background Engine */}
            <motion.div 
                style={{ opacity, x: springX, y: springY }}
                className="absolute inset-0 z-0 pointer-events-none transition-transform duration-75"
            >
                {/* Tactical Grid Floor */}
                <div 
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: `linear-gradient(var(--glass-border) 1px, transparent 1px), linear-gradient(90deg, var(--glass-border) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                        transform: 'perspective(1000px) rotateX(70deg) translateY(20%) scale(3)',
                        transformOrigin: 'center bottom'
                    }}
                />

                {/* 3D Cluster Simulation */}
                <div className="absolute inset-0" style={{ perspective: '1200px' }}>
                    {cubes.map((c, i) => (
                        <div key={i} className="absolute" style={{ left: c.left, top: c.top, transformStyle: 'preserve-3d' }}>
                            <Cube size={c.size} color={c.color} delay={c.delay} />
                        </div>
                    ))}
                </div>

                {/* Background Log Stream - Pure Backend Aesthetic */}
                <div className="absolute top-0 right-0 h-full w-1/4 opacity-[0.03] font-mono text-[10px] text-primary overflow-hidden whitespace-nowrap hidden lg:block">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -1000] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: i * 2 }}
                        >
                            {`0x${Math.random().toString(16).slice(2, 10).toUpperCase()} >> SYNC_NODE_INIT >> OK\n`}
                            {`LATENCY_CHECK >> ${Math.floor(Math.random() * 5)}ms >> OPTIMAL\n`}
                            {`THROUGHPUT >> 14.2k req/s >> STABLE\n`}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <div className="lg:col-span-12 flex flex-col items-start translate-y-[-5%] md:translate-y-0">
                        <motion.div style={{ y: yParallax }} className="relative">
                            <div className="relative group mb-12 md:mb-20">
                                <motion.h1 
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="headline-xl text-on-surface text-glow relative z-10"
                                >
                                    HAFIDZ<span className="text-secondary">.</span>
                                </motion.h1>
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 0.1, scale: 1 }}
                                    className="absolute -top-10 -left-10 headline-xl text-transparent stroke-white/20 stroke-[1px] select-none pointer-events-none italic"
                                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
                                >
                                    HAFIDZ
                                </motion.div>
                            </div>

                            <div className="flex flex-col md:flex-row items-start md:items-end gap-10 md:gap-24">
                                <div className="space-y-12">
                                    <motion.h2 
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                        className="font-headline font-extrabold text-[clamp(2.5rem,12vw,12rem)] text-secondary uppercase tracking-[-0.05em] leading-[0.8] italic flex flex-col"
                                    >
                                        <span>BACKEND</span>
                                        <span className="text-on-surface ml-[0.5em] md:ml-[1em]">ENGINEER</span>
                                    </motion.h2>
                                    
                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.6 }}
                                        transition={{ delay: 0.8 }}
                                        className="font-body text-xl md:text-3xl lg:text-5xl text-on-surface leading-[1.1] max-w-4xl tracking-tighter"
                                    >
                                        Engineering high-availability distributed systems for mission-critical operations. Specializing in <span className="text-primary italic">extreme throughput</span> and system-wide transactional integrity.
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="mt-24 md:mt-40 flex flex-col md:flex-row items-center gap-12"
                        >
                            <a 
                                href="#contact"
                                className="px-16 py-8 apple-glass rounded-full font-label text-xs text-on-surface uppercase tracking-[0.6em] hover:bg-primary hover:text-[#030303] transition-all duration-700 border-primary/40 hover:border-primary scale-100 hover:scale-105 active:scale-95 group relative overflow-hidden"
                            >
                                <span className="relative z-10">Initiate_Handshake</span>
                                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                            </a>
                            
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-12 opacity-40">
                                    <div className="h-[1px] w-20 bg-white/20"></div>
                                    <span className="font-label text-[10px] uppercase tracking-[0.5em]">Benchmarking_Data</span>
                                </div>
                                <div className="flex gap-16">
                                    <div className="flex flex-col">
                                        <span className="font-headline font-bold text-4xl text-on-surface tracking-tighter">14.2k</span>
                                        <span className="font-label text-[10px] text-primary uppercase tracking-widest opacity-60">Avg Req/s</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-headline font-bold text-4xl text-on-surface tracking-tighter">99.98%</span>
                                        <span className="font-label text-[10px] text-primary uppercase tracking-widest opacity-60">SLA Recovery</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Decorative Aesthetic Artifacts */}
            <div className="absolute top-1/2 left-0 w-32 h-[1px] bg-gradient-to-r from-primary/40 to-transparent opacity-20"></div>
            <div className="absolute top-1/2 right-0 w-32 h-[1px] bg-gradient-to-l from-secondary/40 to-transparent opacity-20"></div>
        </section>
    );
};

export default Hero;
