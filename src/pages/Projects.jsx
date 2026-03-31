import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const allProjects = [
    { id: 'sys-01', title: "Flash Sale Vouchers", role: "Backend Engineer", stack: [".NET", "Redis", "SQS"], stats: "14.2k req/s", date: "2026" },
    { id: 'sys-02', title: "Clinic Booking Hub", role: "Backend Engineer", stack: [".NET", "PostgreSQL", "AWS"], stats: "300+ Nodes", date: "2026" },
    { id: 'sys-03', title: "Morinaga Gen-AI", role: "Backend Engineer", stack: ["Node.js", "Python", "OpenAI"], stats: "99.9% Uptime", date: "2026" },
    { id: 'sys-04', title: "Promina Tracker", role: "Backend Engineer", stack: ["PHP", "MySQL", "Redis"], stats: "In Progress", date: "2026" },
    { id: 'sys-05', title: "Agnostic Basecode", role: "Backend Engineer", stack: [".NET", "SOLID", "CQRS"], stats: "Blueprint v4", date: "2025" },
    { id: 'sys-06', title: "Prenagen AI Hub", role: "Backend Engineer", stack: ["Node.js", "GPT-4", "VectorDB"], stats: "LLM Sync", date: "2025" },
    { id: 'sys-07', title: "Medical Symposium", role: "Backend Engineer", stack: [".NET", "SignalR", "SQL"], stats: "Real-time", date: "2024" },
    { id: 'sys-08', title: "Audit Engine", role: "Backend Engineer", stack: ["Go", "Docker", "S3"], stats: "Automation", date: "2023" },
    { id: 'sys-09', title: "Teramedik Cloud", role: "Backend Engineer", stack: ["Laravel", "PostgreSQL", "SaaS"], stats: "99% Cost Red.", date: "2024" },
    { id: 'sys-10', title: "Profile Gen-Engine", role: "Backend Engineer", stack: ["Laravel", "Redis", "React", "CI/CD"], stats: "Auto-Sync", date: "2023" },
];

const ArchiveRow = ({ project, index, isLast }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className={`group relative py-12 md:py-24 px-6 sm:px-12 md:px-24 hover:bg-white/[0.03] transition-all duration-700 ${!isLast ? 'border-b border-white/5' : ''}`}
        >
            <Link to={`/node/${project.id}`} className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-start lg:items-center">
                <div className="lg:col-span-8 space-y-10 relative z-10">
                    <div className="flex items-center gap-6">
                        <span className="font-body text-xs text-primary/40 uppercase tracking-[0.4em] italic">0x{index.toString(16).toUpperCase().padStart(2, '0')}</span>
                        <div className="h-[1px] w-12 bg-white/5 group-hover:w-24 transition-all duration-700"></div>
                        <span className="font-body text-[10px] text-white/20 uppercase tracking-[0.2em] sm:tracking-[0.5em]">{project.date}</span>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-body font-semibold text-4xl sm:text-5xl md:text-6xl text-white tracking-tightest leading-tight group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="font-body text-xs text-white/30 uppercase tracking-[0.4em] italic">{project.role}</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {project.stack.map(s => (
                            <span key={s} className="px-6 py-2 bg-white/5 border border-white/5 font-body text-[10px] text-white/40 uppercase tracking-widest rounded-full">{s}</span>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right space-y-4 self-center">
                    <span className="font-body text-[10px] text-secondary uppercase tracking-[0.6em] block opacity-30 italic">Registry_Stats</span>
                    <div className="flex flex-col items-start lg:items-end">
                        <span className="font-body font-bold text-5xl sm:text-6xl md:text-7xl text-white tracking-tighter leading-none tabular-nums">{project.stats}</span>
                        <div className="flex items-center gap-3 mt-4 group-hover:gap-6 transition-all duration-700">
                            <span className="font-body text-xs text-white/20 uppercase tracking-[0.4em] italic">Open Registry</span>
                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700">
                                <svg className="w-3 h-3 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

function Projects() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="min-h-screen bg-[#030303] selection:bg-primary/20 overflow-x-hidden">
            <div className="fixed inset-0 z-0 bg-mesh opacity-40"></div>

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-24 relative z-10">
                <header className="pt-32 md:pt-80 pb-16 md:pb-64 relative">
                    <div className="flex flex-col items-start gap-12">
                        <Link to="/" className="inline-flex items-center gap-6 font-body text-xs text-primary/60 uppercase tracking-[0.6em] group hover:translate-x-[-10px] transition-transform">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                            Handshake_Return
                        </Link>

                        <div className="space-y-4">
                            <div className="flex items-center gap-6 sm:gap-8 overflow-hidden">
                                <div className="h-[1px] w-12 sm:w-16 bg-primary/30"></div>
                                <span className="font-body text-[10px] sm:text-xs text-primary/60 uppercase tracking-[0.4em] sm:tracking-[0.8em]">Project Archives</span>
                            </div>

                            <h1 className="font-body font-semibold text-5xl sm:text-7xl md:text-[8vw] text-white tracking-tightest leading-[0.9]">
                                Project <br /><span className="text-white/20 italic font-extralight tracking-[-0.04em]">Registry.</span>
                            </h1>

                            <div className="flex items-center gap-4 opacity-40">
                                <span className="font-body text-sm text-white/40 tracking-[0.4em] uppercase italic">2019 — 2026 Archive</span>
                            </div>
                        </div>

                        <div className="mt-16 sm:mt-20 flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-12 sm:gap-16">
                            <p className="font-body text-xl sm:text-2xl md:text-3xl text-white/40 max-w-2xl italic leading-snug">
                                Documenting the technical distribution of mission-critical systems and high-performance engineering nodes.
                            </p>
                            <div className="space-y-4 md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-8 md:pl-0 md:pr-8 py-2">
                                <span className="font-body text-[10px] text-secondary uppercase tracking-[0.6em] block opacity-40 italic">System_Verification</span>
                                <span className="font-body font-bold text-4xl text-white tracking-tight leading-none uppercase">VERIFIED</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* THE UNIFIED ARCHIVE MONOLITH */}
                <div className="apple-glass rounded-[2.5rem] md:rounded-[4rem] border-white/5 relative overflow-hidden mb-40 md:mb-80">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {allProjects.map((project, i) => (
                        <ArchiveRow
                            key={project.id}
                            project={project}
                            index={i}
                            isLast={i === allProjects.length - 1}
                        />
                    ))}

                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
            </div>

            {/* Ambient Background Depth */}
            <div className="fixed top-1/2 -left-1/4 w-[60vw] h-[60vw] bg-primary/5 blur-[160px] rounded-full pointer-events-none opacity-40 -z-10" />
            <div className="fixed bottom-0 -right-1/4 w-[50vw] h-[50vw] bg-secondary/5 blur-[140px] rounded-full pointer-events-none opacity-30 -z-10" />
        </div>
    );
}

export default Projects;
