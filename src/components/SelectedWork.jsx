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
            <motion.div style={{ transformStyle: "preserve-3d", rotateX, rotateY }} className="w-full h-full relative flex items-center justify-center opacity-40">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-primary/20 blur-[1px]"></div>
                {[...Array(8)].map((_, i) => (
                    <motion.div 
                        key={i}
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
                        className="absolute border border-white/5 rounded-full"
                        style={{ width: `${600 + i * 200}px`, height: `${600 + i * 200}px` }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

const NetworkMesh3D = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative perspective-[1200px] overflow-hidden">
            <div className="w-full h-full relative flex items-center justify-center opacity-30">
                {[...Array(5)].map((_, i) => (
                    <motion.div 
                        key={i}
                        className="absolute border border-secondary/10"
                        animate={{ scale: [1, 1.5, 1], rotate: [0, 45, 0] }}
                        transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "easeInOut" }}
                        style={{ width: `${800 + i * 300}px`, height: `${800 + i * 300}px`, borderRadius: "35%" }}
                    />
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ id, title, description, tags, metric, metricLabel, nodeBackground }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
        
        e.currentTarget.style.setProperty('--mouse-x', `${(mouseX / width) * 100}%`);
        e.currentTarget.style.setProperty('--mouse-y', `${(mouseY / height) * 100}%`);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="relative group">
            {/* 3D Background Artifact */}
            <div className="absolute inset-0 -inset-x-32 z-0 pointer-events-none overflow-hidden">
                {nodeBackground}
            </div>

            <motion.div 
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="apple-glass p-12 md:p-24 relative z-10 flex flex-col gap-16 md:gap-32 transition-all duration-700 rounded-[4rem] group-hover:bg-[#0a0a0a]/60"
            >
                <div className="space-y-12 transition-transform duration-700 group-hover:translate-z-[40px]">
                    <div className="flex items-center gap-8">
                        <span className="font-label text-sm text-primary tracking-[0.8em]">{id}</span>
                        <div className="h-[1px] w-32 bg-primary/20"></div>
                    </div>
                    
                    <h3 className="headline-lg text-on-surface group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    
                    <p className="font-body text-2xl md:text-3xl text-on-surface/40 leading-tight max-w-5xl group-hover:text-on-surface/80 transition-colors">
                        {description}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 border-t border-white/5 pt-16 md:pt-32 transition-transform duration-700 group-hover:translate-z-[60px]">
                    <div className="space-y-10">
                        <span className="font-label text-xs text-secondary uppercase tracking-[0.4em] block">Technical Stack</span>
                        <div className="flex flex-wrap gap-4">
                            {tags.map(t => (
                                <span key={t} className="px-8 py-3 apple-glass font-label text-[10px] text-on-surface uppercase tracking-widest rounded-full">{t}</span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-10">
                        <span className="font-label text-xs text-secondary uppercase tracking-[0.4em] block">Performance Benchmark</span>
                        <div className="space-y-4">
                            <span className="block font-headline font-bold text-7xl md:text-9xl text-on-surface tracking-tighter leading-none">{metric}</span>
                            <span className="block font-label text-[10px] text-on-surface/40 uppercase tracking-[0.3em]">{metricLabel}</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const SelectedWork = () => {
    return (
        <section className="px-6 md:px-12 py-32 md:py-64 relative overflow-hidden" id="projects">
            <div className="max-w-7xl mx-auto mb-32 md:mb-64">
                <h2 className="headline-xl text-on-surface mb-8">
                    SELECTED <br /><span className="text-primary italic">WORKS.</span>
                </h2>
                <div className="flex items-center gap-6 opacity-40">
                    <div className="h-[2px] w-32 bg-primary"></div>
                    <span className="font-label text-xs md:text-sm text-secondary tracking-[0.5em] uppercase">Archive Registry // 19—26</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto space-y-64 md:space-y-128">
                <ProjectCard
                    id="SYS_01"
                    title={<>Flash Sale <br />Vouchers</>}
                    description="Redesigning distributed concurrency for high-peak transaction volumes. Zero-leak integrity at scale."
                    tags={["Distributed Redis", ".NET SQS", "PostgreSQL"]}
                    metric={<>10k<span className="text-primary text-4xl italic">/sec</span></>}
                    metricLabel="Peak Concurrent Stream"
                    nodeBackground={<SystemNode3D />}
                />

                <ProjectCard
                    id="SYS_02"
                    title={<>Clinic <br />Booking Hub</>}
                    description="Multi-node scheduling architecture serving nationwide healthcare networks with sub-ms resolution."
                    tags={["Postgres + Redis", "AWS Mesh", "gRPC"]}
                    metric={<>150<span className="text-secondary text-4xl italic">ms</span></>}
                    metricLabel="Resolution Interval Gap"
                    nodeBackground={<NetworkMesh3D />}
                />
            </div>
        </section>
    );
};

export default SelectedWork;
