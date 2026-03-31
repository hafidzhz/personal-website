import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const allProjects = [
  { id: 'sys-01', title: "Flash Sale Vouchers", repo: "Confidential Production System", role: "Backend Engineer", date: "Mar 2026", category: "Fintech / E-commerce" },
  { id: 'sys-02', title: "Clinic Booking Hub", repo: "Healthcare Management Core", role: "Backend Maintainer", date: "Mar 2026", category: "HealthTech" },
  { id: 'sys-03', title: "Morinaga Generative AI", repo: "Asset Generation Service", role: "Maintainer", date: "Jan 2026", category: "HealthTech" },
  { id: 'sys-04', title: "Promina Growth Tracker", repo: "Brand Loyalty Engine", role: "Maintainer", date: "Jan 2026", category: "HealthTech" },
  { id: 'sys-05', title: "Dotnet Agnostic Architecture", repo: "Personal Architecture Lab", role: "Owner", date: "Dec 2025", category: "Personal Lab" },
  { id: 'sys-06', title: "Prenagen AI Platform", repo: "AI Context Orchestrator", role: "Maintainer", date: "Apr 2025", category: "AI / Health" },
  { id: 'sys-07', title: "Medical Symposium Registry", repo: "Medical Infrastructure BE", role: "Maintainer", date: "Jul 2024", category: "HealthTech" },
  { id: 'sys-08', title: "Activity Audit Engine", repo: "Efficiency Tooling Node", role: "Maintainer", date: "Dec 2023", category: "Internal Tooling" },
  { id: 'sys-09', title: "Chilgo Content Engine", repo: "Retail Support API", role: "Maintainer", date: "Jul 2023", category: "HealthTech" },
  { id: 'sys-10', title: "Hakone Content Engine", repo: "Enterprise Logic Core", role: "Maintainer", date: "May 2023", category: "Enterprise" },
  { id: 'sys-11', title: "B7 Enterprise CMS & Talent Hub", repo: "Enterprise Content API", role: "Maintainer", date: "Mar 2023", category: "Enterprise" },
  { id: 'sys-12', title: "Gold Rewards Engine", repo: "Gamification Backend Node", role: "Maintainer", date: "Feb 2023", category: "Fintech" },
  { id: 'sys-13', title: "Multi-Site Growth Tracker", repo: "Growth Calculation API", role: "Maintainer", date: "Feb 2023", category: "HealthTech" },
  { id: 'sys-14', title: "FKS Reward Engine", repo: "Operational Logic Node", role: "Maintainer", date: "Jan 2023", category: "Enterprise" },
];

const GlassCard = ({ project, i, total }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative transform-gpu will-change-transform perspective-[1200px]"
        >
            <Link to={`/projects/${project.id}`} className="block border border-white/10 p-8 md:p-16 bg-[#0a0a0a]/80 backdrop-blur-[40px] saturate-[200%] transition-all duration-700 cursor-pointer h-full relative overflow-hidden group/card shadow-[0_50px_100px_rgba(0,0,0,0.7)] group-hover:border-primary/30">
                <div className="absolute inset-x-0 inset-y-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 opacity-40 group-hover/card:opacity-100 transition-opacity duration-700 -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
                
                {/* Dynamic Light Break */}
                <motion.div 
                    style={{ 
                        background: "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 80%)",
                        left: useTransform(mouseXSpring, [-0.5, 0.5], ["-20%", "20%"]),
                        top: useTransform(mouseYSpring, [-0.5, 0.5], ["-20%", "20%"]),
                    }}
                    className="absolute w-[150%] h-[150%] pointer-events-none -z-10 blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity"
                />

                <div className="flex justify-between items-start mb-12 relative z-10 transition-transform duration-700 group-hover/card:translate-z-[40px]">
                    <div className="space-y-2">
                        <span className="font-label text-xs text-primary tracking-[0.4em] uppercase">{project.category}</span>
                        <div className="font-label text-[10px] text-on-surface-variant/40 tracking-widest uppercase">Registry_ID: 0{total - i}</div>
                    </div>
                    <span className="font-label text-xs md:text-sm text-secondary tracking-widest uppercase border-b border-secondary/20 pb-1">{project.date}</span>
                </div>

                <div className="mb-12 relative z-10 space-y-8 transition-transform duration-700 group-hover/card:translate-z-[60px]">
                    <h3 className="font-headline text-3xl md:text-5xl text-on-surface group-hover/card:text-primary transition-colors leading-[0.9] tracking-tightest duration-500 uppercase">{project.title}</h3>
                    <div className="h-[1px] w-12 bg-white/10 group-hover/card:w-full transition-all duration-1000"></div>
                </div>

                <div className="flex justify-between items-end mt-auto relative z-10 transition-transform duration-700 group-hover/card:translate-z-[30px]">
                    <div className="flex items-center gap-6">
                        <div className="w-2 h-2 bg-primary rounded-full animate-ping shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"></div>
                        <div className="space-y-1">
                            <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest leading-none block">Status: Verified</span>
                            <span className="font-label text-[8px] text-secondary/40 uppercase tracking-widest leading-none block">Operational Integrity [Pass]</span>
                        </div>
                    </div>
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group-hover/card:border-primary group-hover/card:bg-primary transition-all duration-700 group/btn">
                        <span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover/card:text-surface transition-colors">arrow_outward</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

function Projects() {
    return (
    <div className="min-h-screen bg-surface pt-16 pb-32 px-6 md:px-12 font-body relative overflow-hidden">
            <div className="architectural-grid absolute inset-0 opacity-20 pointer-events-none"></div>
            <div className="neural-lines z-0 opacity-10"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <Link
                    to="/"
                    className="flex items-center gap-4 text-primary/60 hover:text-primary transition-all font-label text-[10px] md:text-sm uppercase tracking-[0.4em] mb-12 md:mb-32 group"
                >
                    <span className="material-symbols-outlined text-lg group-hover:-translate-x-2 transition-transform">
                        arrow_back
                    </span>
                    Return to Core Dashboard
                </Link>

                <header className="mb-24 md:mb-48">
                    <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface mb-8 md:mb-16 tracking-tightest leading-[0.85] uppercase">
                        SYSTEM <br /><span className="text-secondary italic">SHOWCASE.</span>
                    </h1>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                        <span className="font-label text-xs md:text-sm text-secondary tracking-[0.5em] uppercase whitespace-nowrap opacity-60">Operations Registry // 2019 — 2026</span>
                        <div className="h-[1px] flex-grow bg-outline-variant/10"></div>
                        <div className="px-6 py-2 border border-primary/20 bg-primary/5">
                            <span className="font-label text-[10px] text-primary uppercase tracking-[0.3em]">Total Systems: {allProjects.length}.sys</span>
                        </div>
                    </div>
                </header>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-20 perspective-[2000px]"
                >
                    {allProjects.map((project, i) => (
                        <GlassCard key={project.id} project={project} i={i} total={allProjects.length} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Projects;
