import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectArchive = () => {
    const projects = [
        { name: "Gold Rewards Engine", role: "Maintainer", id: "treasury-gamification" },
        { name: "Prenagen AI Platform", role: "Maintainer", id: "prenagen-ai" },
        { name: "Multi-Site Growth Tracker", role: "Maintainer", id: "morinaga-tumbuh-kembang" },
        { name: "Hakone Content Engine", role: "Maintainer", id: "hakone-be" },
        { name: "Dotnet Agnostic Architecture", role: "Owner", id: "dotnet-basecode" },
        { name: "Promina Growth Tracker", role: "Maintainer", id: "bbdo-promina" },
    ];

    return (
        <section className="px-6 md:px-12 py-32 md:py-64 relative overflow-hidden" id="project-archive">
            <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-16 mb-24 md:mb-48 relative z-10 max-w-7xl mx-auto">
                <h2 className="headline-lg text-on-surface">
                    PROJECT <br /><span className="text-secondary italic">Registry.</span>
                </h2>
                <div className="space-y-4">
                    <span className="font-label text-xs md:text-sm text-primary tracking-[0.5em] uppercase block">Secondary Registry // 04</span>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto border-t border-white/5 relative z-10">
                    {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        className="perspective-[1200px]"
                    >
                        <Link
                            to={`/projects/${project.id}`}
                            className="flex flex-col md:flex-row justify-between items-start md:items-center py-16 md:py-24 border-b border-white/5 group transition-all duration-700 cursor-pointer relative overflow-hidden px-10 rounded-2xl hover:bg-white/5"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start md:items-center relative z-10">
                                <span className="font-label text-xs text-primary/40 group-hover:text-primary transition-all duration-700 uppercase tracking-widest">NR_{i + 1}</span>
                                <h4 className="font-headline font-bold text-4xl md:text-6xl text-on-surface group-hover:text-secondary transition-all duration-500 leading-none uppercase tracking-tighter">{project.name}</h4>
                            </div>
                            <div className="flex items-center gap-12 mt-10 md:mt-0 relative z-10">
                                <span className="font-label text-[10px] text-secondary/40 uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-12 transition-all duration-700">Open_Log</span>
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-700 group-hover:scale-110">
                                    <span className="material-symbols-outlined text-primary group-hover:text-[#030303] transition-colors">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Dynamic CTA */}
            <div className="max-w-7xl mx-auto mt-48 md:mt-64 relative z-10">
                <Link to="/projects" className="w-full">
                    <motion.div
                        whileHover={{ x: 20 }}
                        className="group flex flex-col items-start gap-12 cursor-pointer border-t border-white/5 pt-32"
                    >
                        <div className="flex items-center gap-16">
                             <div className="w-24 h-24 md:w-32 md:h-32 border border-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-1000 group/btn">
                                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-[#030303] transition-colors">arrow_right_alt</span>
                            </div>
                            <span className="headline-lg text-on-surface group-hover:text-primary leading-[0.95] tracking-tighter transition-all duration-700">
                                EXPLORE <br /><span className="text-secondary italic">Registry.</span>
                            </span>
                        </div>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
};

export default ProjectArchive;
