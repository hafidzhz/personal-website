import React from 'react';
import { motion } from 'framer-motion';

const ProjectRow = ({ id, title, description, tags, metric, metricLabel, isLast }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className={`flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-20 items-start py-12 md:py-24 lg:py-40 px-6 sm:px-12 md:px-24 group hover:bg-white/[0.03] transition-all duration-700 relative ${!isLast ? 'border-b border-white/5' : ''}`}
        >
            <div className="lg:col-span-8 space-y-16 relative z-10">
                <div className="flex items-center gap-6">
                    <span className="font-body text-xs text-primary/40 uppercase tracking-[0.4em] italic">Project Node</span>
                    <div className="h-[1px] w-12 bg-white/5 group-hover:w-20 transition-all duration-700"></div>
                </div>
                
                <h3 className="font-body font-semibold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tightest leading-[1.1]">
                    {title}
                </h3>
                
                <p className="font-body text-xl sm:text-2xl md:text-3xl text-white/40 leading-snug max-w-3xl italic group-hover:text-white/60 transition-colors">
                    {description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    {tags.map(t => (
                        <span key={t} className="px-6 py-2 bg-white/5 border border-white/5 font-body text-[11px] text-white/50 uppercase tracking-widest rounded-full group-hover:border-primary/20 transition-colors">{t}</span>
                    ))}
                </div>
            </div>
            
            <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end text-left lg:text-right space-y-6 self-center">
                <span className="font-body text-[10px] text-secondary uppercase tracking-[0.6em] block opacity-30 italic">Impact_Metric</span>
                <div className="flex flex-col items-start lg:items-end">
                    <span className="font-body font-bold text-6xl sm:text-7xl md:text-9xl text-white tracking-tighter leading-none tabular-nums drop-shadow-lg">{metric}</span>
                    <span className="font-body text-xs text-white/20 uppercase tracking-[0.4em] mt-3 italic">{metricLabel}</span>
                </div>
            </div>

            {/* Hover Indicator */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary group-hover:h-1/2 transition-all duration-700" />
        </motion.div>
    );
};

const SelectedWork = () => {
    const projects = [
        {
            id: "Project_01",
            title: "Flash Sale Infrastructure",
            description: "Architecting high-availability systems for massive transaction events. Engineering zero-leak distributed concurrency with sub-ms node synchronization.",
            tags: [".NET", "Redis", "AWS SQS", "Postgres", "K6"],
            metric: "10k",
            metricLabel: "Transactions /sec",
        },
        {
            id: "Project_02",
            title: "Clinic Booking Hub",
            description: "Redesigning multi-node scheduling networks serving nationwide healthcare platforms with clinical sub-ms performance resolution.",
            tags: ["Golang", "gRPC", "AWS Mesh", "Redis"],
            metric: "150",
            metricLabel: "Latency Resolution /ms",
        },
        {
            id: "Project_03",
            title: "Teramedik Cloud",
            description: "Modernizing legacy medical infrastructure through a 99%+ cost-efficient cloud SaaS evolution. Restructured 1Bn+ IDR implementations into sub-150k monthly nodes.",
            tags: ["Laravel", "PostgreSQL", "SaaS Architecture"],
            metric: "99%",
            metricLabel: "Cost Optimization",
        }
    ];

    return (
        <section className="px-4 sm:px-6 md:px-16 py-32 md:py-80 relative overflow-hidden bg-[#030303] scroll-mt-32" id="projects">
            {/* Soft Ambient Depth */}
            <div className="absolute top-1/4 -right-1/4 w-[60vw] h-[60vw] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-40" />
            <div className="absolute bottom-1/4 -left-1/4 w-[50vw] h-[50vw] bg-secondary/5 blur-[140px] rounded-full pointer-events-none opacity-30" />

            <div className="max-w-screen-2xl mx-auto relative z-10">
                <div className="flex flex-col items-start gap-12 sm:gap-16 mb-24 md:mb-64">
                    <div className="flex items-center gap-6 overflow-hidden">
                         <div className="h-[1px] w-12 bg-primary/30"></div>
                         <span className="font-body text-[10px] text-primary/60 uppercase tracking-[0.6em]">Selected Projects</span>
                    </div>
                    
                    <h2 className="font-body font-semibold text-5xl sm:text-7xl md:text-[7vw] text-white tracking-tightest leading-[0.9]">
                        Selected <br /><span className="text-white/20 italic font-extralight tracking-[-0.04em]">Projects.</span>
                    </h2>

                    <div className="flex items-center gap-4 opacity-40">
                    </div>
                </div>

                {/* THE UNIFIED MONOLITHIC CARD */}
                <div className="apple-glass rounded-[2.5rem] md:rounded-[4rem] border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    
                    {projects.map((project, i) => (
                        <ProjectRow 
                            key={project.id} 
                            {...project} 
                            isLast={i === projects.length - 1} 
                        />
                    ))}

                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default SelectedWork;
