import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const history = [
    {
        period: "2022 — Present",
        role: "Backend Engineer",
        company: "Rolling Glory",
        desc: "Architecting high-availability systems. Engineered a massive Voucher Flash Sale Platform handling 10k+ concurrent requests and a real-time Clinic Booking Hub serving nationwide healthcare networks.",
        tags: [".NET", "Redis", "AWS SQS", "Postgres", "K6"],
    },
    {
        period: "2026 — 2026",
        role: "Backend Engineer",
        company: "Caliana Indonesia",
        desc: "Strategic production bug-fixing and infrastructure reliability tuning across distributed Node.js applications.",
        tags: ["Node.js", "Performance", "AWS Mesh"],
    },
    {
        period: "2024 — 2025",
        role: "Backend Engineer",
        company: "ArLabs",
        desc: "Developed high-performance Golang microservices for secure data collection, ensuring sub-ms reporting latency.",
        tags: ["Golang", "Microservices", "gRPC"],
    },
    {
        period: "2024 — 2024",
        role: "Backend Engineer",
        company: "Arvis",
        desc: "Engineered modular Enterprise Quality Management Systems (QMS) with complex 3rd-party architectural integrations.",
        tags: [".NET", "Enterprise", "Systems"],
    },
];

const Experience = () => {
    return (
        <section className="px-4 sm:px-6 md:px-16 py-32 md:py-80 relative overflow-hidden bg-[#030303] scroll-mt-32" id="experience">
            {/* Atmospheric Depth */}
            <div className="absolute top-1/2 -left-1/4 w-[70vw] h-[70vw] bg-primary/5 blur-[160px] rounded-full pointer-events-none opacity-40" />

            <div className="max-w-screen-2xl mx-auto relative z-10">
                <div className="flex flex-col items-start gap-12 sm:gap-16 mb-24 md:mb-64">
                    <div className="flex items-center gap-6 sm:gap-8 overflow-hidden">
                        <div className="h snapshot-row-1 snapshot-row-2 h-[1px] w-12 sm:w-24 bg-primary/30"></div>
                        <span className="font-body text-[10px] sm:text-xs text-primary/60 uppercase tracking-[0.4em] sm:tracking-[0.8em]">Career History</span>
                    </div>

                    <h2 className="section-title">
                        Career <br /><span className="text-white/20 italic font-extralight tracking-[-0.04em]">Narrative.</span>
                    </h2>

                    <div className="flex items-center gap-4 opacity-40">
                        <span className="font-body text-sm text-white/40 tracking-[0.4em] uppercase italic px-4">Professional Record</span>
                    </div>
                </div>

                <div className="space-y-12 md:space-y-20">
                    {history.map((exp, i) => (
                        <GlassCard
                            key={i}
                            tilt={true}
                            className="p-12 md:p-20 relative transition-all duration-700 rounded-[3rem] border-white/5 group overflow-hidden"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1, duration: 1, ease: [0.19, 1, 0.22, 1] }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                                    <div className="md:col-span-3 space-y-4">
                                        <span className="font-body text-[10px] text-primary/40 uppercase tracking-[0.4em] block">{exp.period}</span>
                                        <h4 className="font-body font-bold text-lg text-white group-hover:text-primary transition-colors duration-500 tracking-[-0.06em] leading-tight">{exp.company}</h4>
                                    </div>

                                    <div className="md:col-span-6 space-y-8">
                                        <h3 className="font-body font-semibold text-2xl md:text-3xl text-white leading-none tracking-[-0.06em]">{exp.role}</h3>
                                        <p className="font-body text-sm md:text-base text-white/40 leading-snug max-w-2xl italic group-hover:text-white/60 transition-colors">
                                            {exp.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-3 pt-4">
                                            {exp.tags.map(tag => (
                                                <span key={tag} className="px-6 py-2 bg-white/5 border border-white/5 font-body text-[10px] text-white/40 uppercase tracking-[0.3em] rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="md:col-span-3 flex md:flex-col items-end md:items-end justify-center md:pt-4">
                                    </div>
                                </div>
                            </motion.div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
