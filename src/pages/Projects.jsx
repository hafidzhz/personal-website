import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';

const allProjects = [
  { id: 'sys-01', title: "Flash Sale Vouchers", role: "Sr. Backend Engineer", stack: [".NET", "Redis", "SQS"], stats: "14.2k req/s", date: "2026" },
  { id: 'sys-02', title: "Clinic Booking Hub", role: "Backend Architect", stack: [".NET", "PostgreSQL", "AWS"], stats: "300+ Nodes", date: "2026" },
  { id: 'sys-03', title: "Morinaga Gen-AI", role: "System Maintainer", stack: ["Node.js", "Python", "OpenAI"], stats: "99.9% Uptime", date: "2026" },
  { id: 'sys-04', title: "Promina Tracker", role: "Core Developer", stack: ["PHP", "MySQL", "Redis"], stats: "2M+ Users", date: "2026" },
  { id: 'sys-05', title: "Agnostic Basecode", role: "Lead Architect", stack: [".NET", "SOLID", "CQRS"], stats: "Blueprint v4", date: "2025" },
  { id: 'sys-06', title: "Prenagen AI Hub", role: "Backend Engineer", stack: ["Node.js", "GPT-4", "VectorDB"], stats: "LLM Sync", date: "2025" },
  { id: 'sys-07', title: "Medical Symposium", role: "Backend Maintainer", stack: [".NET", "SignalR", "SQL"], stats: "Real-time", date: "2024" },
  { id: 'sys-08', title: "Audit Engine", role: "Internal Tooling", stack: ["Go", "Docker", "S3"], stats: "Automation", date: "2023" },
];

const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`min-h-[400px] md:min-h-[500px] ${index % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
        >
            <Link to={`/projects/${project.id}`} 
                onMouseMove={handleMouseMove}
                onMouseLeave={() => { x.set(0); y.set(0); }}
                className="group block h-full relative apple-glass p-10 md:p-14 overflow-hidden rounded-[3rem] perspective-[1500px]"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* 3D Content Container */}
                <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="h-full flex flex-col justify-between">
                    <div className="space-y-12 translate-z-[40px]">
                        <div className="flex justify-between items-start">
                            <div className="space-y-4">
                                <span className="font-label text-[10px] text-primary tracking-[0.6em] uppercase block">Registry_ID: 0x{index.toString(16).toUpperCase()}</span>
                                <div className="h-[2px] w-12 bg-primary/20 group-hover:w-full transition-all duration-1000"></div>
                            </div>
                            <span className="font-headline font-bold text-4xl text-on-surface opacity-10 uppercase italic">{project.date}</span>
                        </div>
                        
                        <div className="space-y-6">
                            <h3 className="font-headline font-bold text-4xl md:text-6xl text-on-surface group-hover:text-primary transition-colors duration-500 leading-[0.9] tracking-tighter uppercase">
                                {project.title}
                            </h3>
                            <p className="font-label text-xs text-on-surface/40 uppercase tracking-widest">{project.role}</p>
                        </div>
                    </div>

                    <div className="space-y-10 translate-z-[60px]">
                        <div className="flex flex-wrap gap-3">
                            {project.stack.map(s => (
                                <span key={s} className="px-4 py-1.5 border border-white/5 rounded-full font-label text-[9px] text-on-surface/30 uppercase tracking-widest bg-white/[0.02]">{s}</span>
                            ))}
                        </div>
                        
                        <div className="flex justify-between items-end border-t border-white/5 pt-10">
                            <div className="space-y-2">
                                <span className="font-label text-[9px] text-secondary uppercase tracking-[0.4em] block">Benchmarking</span>
                                <p className="font-headline font-bold text-2xl text-on-surface tracking-tighter">{project.stats}</p>
                            </div>
                            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700">
                                <span className="material-symbols-outlined text-on-surface group-hover:text-black">arrow_forward_ios</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Industrial Overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                        <path d="M10 10H90V90H10zM20 20V80H80V20z" />
                    </svg>
                </div>
            </Link>
        </motion.div>
    );
};

function Projects() {
    const { scrollY } = useScroll();
    const xParallax = useTransform(scrollY, [0, 800], [0, -200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="min-h-screen bg-[#030303] text-on-surface selection:bg-primary/20 pb-64 overflow-x-hidden">
            <div className="fixed inset-0 z-0 bg-mesh opacity-40"></div>
            
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <header className="pt-32 md:pt-48 pb-24 md:pb-64 relative">
                    <Link to="/" className="inline-flex items-center gap-6 font-label text-[10px] text-primary uppercase tracking-[0.6em] mb-32 hover:translate-x-[-10px] transition-transform">
                        <span className="material-symbols-outlined text-sm">west</span>
                        Return_Log: 0x0
                    </Link>
                    
                    <div className="relative">
                        <motion.h1 
                            style={{ x: xParallax }}
                            className="font-headline font-extrabold text-[15vw] leading-none tracking-[-0.06em] uppercase opacity-5 select-none absolute -top-12 -left-12 whitespace-nowrap"
                        >
                            Industrial Archive Industrial Archive
                        </motion.h1>
                        <h1 className="font-headline font-extrabold text-7xl md:text-[10rem] leading-[0.8] tracking-[-0.05em] uppercase relative z-10 break-words">
                            Project <br /><span className="text-primary italic">Registry.</span>
                        </h1>
                    </div>

                    <div className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                        <p className="font-body text-xl md:text-3xl text-on-surface/40 max-w-3xl leading-tight tracking-tight">
                            Documenting the technical distribution of mission-critical systems, distributed architectures, and high-performance engineering nodes developed between 2019 — 2026.
                        </p>
                        <div className="space-y-6 md:text-right">
                             <span className="font-label text-xs text-secondary tracking-[0.5em] uppercase block">Registry Integrity: Verified [OK]</span>
                             <div className="h-[2px] w-24 md:ml-auto bg-primary"></div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {allProjects.map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} />
                    ))}
                </div>
            </div>

            {/* Side Registry Nav */}
            <div className="fixed bottom-12 right-12 z-50 flex flex-col gap-6 items-end group">
                <div className="flex items-center gap-4 px-6 py-3 apple-glass rounded-full translate-x-20 group-hover:translate-x-0 transition-transform duration-700">
                    <span className="font-label text-[10px] text-primary uppercase tracking-widest">Total_Entities: {allProjects.length}</span>
                </div>
                <div className="w-12 h-12 apple-glass rounded-full flex items-center justify-center cursor-pointer hover:bg-primary group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="material-symbols-outlined text-on-surface group-hover:text-black">stat_1</span>
                </div>
            </div>
        </div>
    );
}

export default Projects;
