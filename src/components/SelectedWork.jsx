import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const SystemNode3D = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX / rect.width - 0.5);
        y.set(event.clientY / rect.height - 0.5);
    };

    return (
        <div onMouseMove={handleMouseMove} onMouseLeave={() => { x.set(0); y.set(0); }}
            className="w-full h-full flex items-center justify-center relative perspective-[1200px] overflow-hidden"
        >
            <motion.div style={{ transformStyle: "preserve-3d", rotateX, rotateY }} className="w-full h-full relative flex items-center justify-center opacity-30 md:opacity-40">
                {/* Structural Background Patterns */}
                <div className="absolute inset-0 architectural-grid opacity-20"></div>
                
                {/* Dynamic Data Streams */}
                {[...Array(15)].map((_, i) => (
                    <motion.div 
                        key={i}
                        animate={{ 
                            x: [-800, 800],
                            opacity: [0, 0.5, 0.5, 0],
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            delay: i * 0.3,
                            ease: "linear"
                        }}
                        className="absolute w-32 h-[1px] bg-primary/30"
                        style={{ top: `${(i / 15) * 100}%`, filter: "blur(1px)" }}
                    />
                ))}

                {/* Central System Core */}
                <motion.div 
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] border-[0.5px] border-primary/10 rounded-full flex items-center justify-center"
                >
                    <div className="w-[80%] h-[80%] border-[0.5px] border-secondary/10 rounded-full"></div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const NetworkMesh3D = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative perspective-[1200px] overflow-hidden">
            <div className="w-full h-full relative flex items-center justify-center opacity-20 md:opacity-30">
                <div className="absolute inset-0 neural-lines opacity-20"></div>
                
                {/* Geometric Artifacts */}
                {[...Array(8)].map((_, i) => (
                    <motion.div 
                        key={i}
                        animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                            duration: 15 + i * 5, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                        className="absolute border-[0.5px] border-secondary/20"
                        style={{ 
                            width: `${200 + i * 100}px`, 
                            height: `${200 + i * 100}px`,
                            borderRadius: i % 2 === 0 ? "0%" : "50%"
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const SelectedWork = () => {
  return (
    <section className="px-6 md:px-12 py-32 md:py-64 bg-surface relative overflow-hidden" id="projects">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-24 md:mb-48">
            <div className="asymmetric-grid w-full">
                <div className="col-span-12">
                    <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] tracking-tighter uppercase mb-4">
                        Selected <br /><span className="text-primary italic">Works.</span>
                    </h2>
                    <div className="flex items-center gap-6 opacity-40">
                        <div className="h-[1px] w-24 bg-primary"></div>
                        <span className="font-label text-xs md:text-sm text-secondary tracking-[0.5em] uppercase">Deployment Log // 2019 — 2026</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-48 md:space-y-96">
            {/* Project 01 */}
            <div className="relative group">
                {/* 3D Background Artifact */}
                <div className="absolute inset-0 -inset-x-24 z-0 pointer-events-none">
                    <SystemNode3D />
                </div>

                <div className="asymmetric-grid w-full relative z-10">
                    <div className="col-span-12 lg:col-span-11 space-y-16 md:space-y-32">
                        <div className="space-y-8 md:space-y-16">
                            <div className="flex items-center gap-8">
                                <span className="font-label text-sm text-primary tracking-[0.8em]">01_SYS</span>
                                <div className="h-[1px] flex-grow max-w-[100px] bg-primary/20"></div>
                            </div>
                            
                            <h3 className="font-headline text-4xl md:text-6xl lg:text-[5vw] xl:text-[5.5rem] text-on-surface leading-[0.9] group-hover:text-primary transition-colors duration-700 tracking-tighter uppercase mb-4">
                                Flash Sale <br />Vouchers
                            </h3>
                            
                            <p className="font-body text-lg md:text-2xl text-on-surface-variant leading-relaxed opacity-60 max-w-5xl border-l-2 border-outline-variant/20 pl-8 md:pl-16">
                                Engineering high-concurrency voucher systems for massive peak traffic. Optimized for 10k+ concurrent requests with transactional integrity.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-48 pt-16 md:pt-32 border-t border-outline-variant/10">
                            <div className="space-y-12">
                                <span className="font-label text-sm md:text-base text-secondary uppercase tracking-[0.4em] block">Technical Stack</span>
                                <div className="flex flex-wrap gap-4 p-8 bg-white/5 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                                    {["Distributed Redis", ".NET SQS", "PostgreSQL"].map(t => (
                                        <span key={t} className="px-6 py-2.5 glass-tag font-label text-[10px] text-primary uppercase tracking-[0.2em]">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-12">
                                <span className="font-label text-sm md:text-base text-secondary uppercase tracking-[0.4em] block">Operational Metrics</span>
                                <div className="space-y-4">
                                    <span className="block font-headline text-6xl md:text-[clamp(4rem,9vw,9rem)] text-on-surface tracking-tighter leading-none">10k<span className="text-primary text-4xl italic">/sec</span></span>
                                    <span className="block font-label text-sm text-on-surface-variant/40 uppercase tracking-[0.3em]">Peak Concurrency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project 02 */}
            <div className="relative group">
                {/* 3D Background Artifact */}
                <div className="absolute inset-0 -inset-x-24 z-0 pointer-events-none">
                    <NetworkMesh3D />
                </div>

                <div className="asymmetric-grid w-full relative z-10">
                    <div className="col-span-12 lg:col-span-11 space-y-16 md:space-y-32">
                        <div className="space-y-8 md:space-y-16">
                            <div className="flex items-center gap-8">
                                <span className="font-label text-sm text-primary tracking-[0.8em]">02_SYS</span>
                                <div className="h-[1px] flex-grow max-w-[100px] bg-primary/20"></div>
                            </div>
                            
                            <h3 className="font-headline text-4xl md:text-6xl lg:text-[5vw] xl:text-[5.5rem] text-on-surface leading-[0.9] group-hover:text-primary transition-colors duration-700 tracking-tighter uppercase mb-4">
                                Clinic <br />Booking Hub
                            </h3>
                            
                            <p className="font-body text-lg md:text-2xl text-on-surface-variant leading-relaxed opacity-60 max-w-5xl border-l-2 border-outline-variant/20 pl-8 md:pl-16">
                                Scalable scheduling engine serving 300+ clinics with real-time availability and sub-second conflict resolution across high-volume healthcare networks.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-48 pt-16 md:pt-32 border-t border-outline-variant/10">
                            <div className="space-y-12">
                                <span className="font-label text-sm md:text-base text-secondary uppercase tracking-[0.4em] block">Technical Stack</span>
                                <div className="flex flex-wrap gap-4 p-8 bg-white/5 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                                    {["Postgres + Redis", "AWS Mesh", "gRPC"].map(t => (
                                        <span key={t} className="px-6 py-2.5 glass-tag font-label text-[10px] text-primary uppercase tracking-[0.2em]">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-12">
                                <span className="font-label text-sm md:text-base text-secondary uppercase tracking-[0.4em] block">Performance Benchmark</span>
                                <div className="space-y-4">
                                    <span className="block font-headline text-6xl md:text-[9rem] text-on-surface tracking-tighter leading-none">150<span className="text-secondary text-4xl italic">ms</span></span>
                                    <span className="block font-label text-sm text-on-surface-variant/40 uppercase tracking-[0.3em]">Conflict Resolution Gap</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default SelectedWork;
