import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectArchive = () => {
    const projects = [
        { name: "Gold Rewards Engine", role: "Maintainer", id: "sys-06" },
        { name: "Prenagen AI Platform", role: "Maintainer", id: "sys-07" },
        { name: "Multi-Site Growth Tracker", role: "Maintainer", id: "sys-08" },
        { name: "Hakone Content Engine", role: "Maintainer", id: "sys-09" },
        { name: "Dotnet Agnostic Architecture", role: "Owner", id: "sys-05" },
        { name: "Promina Growth Tracker", role: "Maintainer", id: "sys-10" },
    ];

    return (
        <section className="px-6 md:px-16 py-32 md:py-48 relative overflow-hidden bg-[#030303]" id="project-archive">
            <div className="flex flex-col items-start gap-12 mb-24 md:mb-40 relative z-10 max-w-screen-2xl mx-auto">
                <div className="flex items-center gap-8 overflow-hidden">
                    <div className="h-[1px] w-24 bg-primary/30"></div>
                    <span className="font-body text-xs text-primary/60 uppercase tracking-[0.8em]">Archive_Protocol</span>
                </div>

                <h2 className="section-title">
                    Project <br /><span className="text-white/20 italic font-extralight tracking-[-0.04em]">Registry.</span>
                </h2>

                <div className="flex items-center gap-4 opacity-40">
                    <span className="font-body text-sm text-white/40 tracking-[0.4em] uppercase italic">Secondary Registry // 04</span>
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto border-t border-white/5 relative z-10">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.8 }}
                    >
                        <Link
                            to={`/node/${project.id}`}
                            className="flex flex-col md:flex-row justify-between items-start md:items-center py-16 md:py-24 border-b border-white/5 group transition-all duration-700 cursor-pointer relative overflow-hidden px-6 md:px-12 rounded-[2rem] hover:bg-white/[0.03]"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start md:items-center relative z-10">
                                <span className="font-body text-[10px] text-primary/40 group-hover:text-primary transition-all duration-700 uppercase tracking-widest italic">REG_0{i + 1}</span>
                                <h4 className="font-body font-semibold text-2xl sm:text-4xl md:text-5xl text-white group-hover:text-primary transition-all duration-500 leading-none tracking-[-0.06em]">{project.name}</h4>
                            </div>
                            <div className="flex items-center gap-12 mt-10 md:mt-0 relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-12 transition-all duration-700">
                                <span className="font-body text-[11px] text-secondary uppercase tracking-[0.4em] italic">Open_Log_Entry</span>
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-700 group-hover:scale-110">
                                    <span className="material-symbols-outlined text-primary group-hover:text-[#030303] transition-colors text-3xl">north_east</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Dynamic CTA */}
            <div className="max-w-screen-2xl mx-auto mt-48 md:mt-64 relative z-10 border-t border-white/5 pt-32">
                <Link to="/archive" className="group flex flex-col items-start gap-12">
                    <motion.div
                        whileHover={{ x: 24 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="flex items-center gap-16"
                    >
                        <div className="w-24 h-24 md:w-32 md:h-32 apple-glass rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700">
                            <span className="material-symbols-outlined text-5xl text-primary group-hover:text-[#030303] transition-colors">arrow_right_alt</span>
                        </div>
                        <span className="font-body font-semibold text-4xl md:text-6xl lg:text-[5vw] text-white group-hover:text-primary leading-[0.85] tracking-[-0.06em] transition-all duration-700">
                            Explore <br /><span className="text-white/20 italic font-extralight tracking-[-0.04em]">Full Archive.</span>
                        </span>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
};

export default ProjectArchive;
