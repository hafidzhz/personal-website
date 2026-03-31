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
        <section className="px-6 md:px-12 py-16 md:py-64 bg-surface relative overflow-hidden" id="project-archive">
            <div className="architectural-grid absolute inset-0 opacity-10 pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-16 mb-24 md:mb-48 relative z-10 max-w-7xl mx-auto">
                <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.95] tracking-tighter uppercase">
                    PROJECT <br /><span className="text-secondary italic">ARCHIVE.</span>
                </h2>
                <div className="pb-4 md:pb-12 space-y-4">
                    <span className="font-label text-xs md:text-sm text-primary tracking-[0.5em] uppercase block">Operations Registry // 04</span>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-outline-variant/10 relative z-10">
                    {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 0.995, rotateX: 2 }}
                        className="perspective-[1000px]"
                    >
                        <Link
                            to={`/projects/${project.id}`}
                            className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 md:py-20 border-b border-outline-variant/10 group px-0 transition-all duration-700 cursor-pointer backdrop-blur-0 hover:backdrop-blur-[24px] hover:saturate-[180%] hover:bg-[#121212]/70 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"></div>
                            <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start md:items-center">
                                <span className="font-label text-xs text-primary group-hover:tracking-[0.4em] transition-all duration-700 uppercase tracking-widest">Node_0{i + 1}</span>
                                <h4 className="font-headline text-4xl md:text-6xl text-on-surface group-hover:text-primary transition-colors duration-500 leading-none">{project.name}</h4>
                            </div>
                            <div className="flex items-center gap-8 mt-6 md:mt-0">
                                <span className="font-label text-[10px] text-secondary/40 uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-700">Open_System_Logs</span>
                                <div className="w-12 h-12 rounded-full border border-outline-variant/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-700">
                                    <span className="material-symbols-outlined text-primary group-hover:text-surface transition-colors">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Dynamic CTA */}
            <div className="max-w-7xl mx-auto mt-48 md:mt-64 flex justify-start items-center relative z-10">
                <Link to="/projects" className="w-full">
                    <motion.div
                        whileHover={{ x: 20 }}
                        className="group flex flex-col items-start gap-12 cursor-pointer border-t border-outline-variant/10 pt-24"
                    >
                        <div className="flex items-center gap-12">
                             <div className="w-24 h-24 md:w-32 md:h-32 border border-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-1000 group/btn">
                                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-surface transition-colors">arrow_right_alt</span>
                            </div>
                            <span className="font-headline text-3xl md:text-[4.5rem] text-on-surface group-hover:text-primary leading-[0.95] tracking-tighter transition-all duration-700">
                                EXPLORE <br /><span className="text-secondary italic">ALL SYSTEMS.</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
                            <div className="h-[1px] w-12 bg-primary"></div>
                            <span className="font-label text-sm md:text-xl text-on-surface-variant uppercase tracking-[0.6em]">Registry Registry // 20+ Production Nodes</span>
                        </div>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
};

export default ProjectArchive;
