import React from 'react';
import { motion } from 'framer-motion';

const history = [
  {
    period: "2022 — PRESENT",
    role: "Backend Engineer",
    company: "Rolling Glory · Full-Time",
    desc: "Engineering high-availability systems. Engineered a Voucher Flash Sale Platform handling 10k+ concurrent requests and a real-time Clinic Booking System serving 300+ clinics.",
    tags: [".NET", "Redis", "AWS SQS", "PostgreSQL", "K6"],
  },
  {
    period: "FEB 2026 — MAR 2026",
    role: "Backend Engineer",
    company: "Caliana Indonesia · Freelance",
    desc: "Focused on production bug fixing, performance tuning, and infrastructure reliability across multiple Node.js-based applications.",
    tags: ["Node.js", "Performance", "Stability", "Bug Fix"],
  },
  {
    period: "2024 — 2025",
    role: "Backend Engineer",
    company: "ArLabs · Part-Time",
    desc: "Developed a Golang microservice for secure data collection and analysis, ensuring strict data privacy and low-latency reporting.",
    tags: ["Golang", "Microservices", "API Design"],
  },
  {
    period: "2024 — 2024",
    role: "Backend Engineer",
    company: "Arvis · Part-Time",
    desc: "Engineered a modular Quality Management System (QMS) using .NET, featuring complex 3rd-party integrations.",
    tags: [".NET", "Enterprise", "API Integration"],
  },
];

const Experience = () => {
    return (
        <section className="px-6 md:px-12 py-32 md:py-64 relative overflow-hidden" id="experience">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-16 mb-24 md:mb-48">
                    <h2 className="headline-lg text-on-surface">
                        RELEVANT <br /><span className="text-secondary italic">Nodes.</span>
                    </h2>
                    <div className="space-y-4">
                        <span className="font-label text-xs md:text-sm text-primary tracking-[0.5em] uppercase block">Operational History // 04</span>
                        <div className="px-6 py-2 apple-glass inline-flex items-center gap-4 rounded-full">
                            <div className="w-2 h-2 bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)] rounded-full"></div>
                            <span className="font-label text-[10px] text-on-surface/60 tracking-[0.2em] uppercase">Archive_Sync</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 md:space-y-10">
                    {history.map((exp, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1 }}
                            className="apple-glass p-8 md:p-16 relative transition-all duration-700 perspective-[1200px] hover:translate-x-2 rounded-[2.5rem] md:rounded-[4rem]"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start transition-all duration-700">
                                <div className="md:col-span-3 space-y-3">
                                    <span className="font-label text-xs text-primary/40 uppercase tracking-widest block">{exp.period}</span>
                                    <h4 className="font-headline font-bold text-2xl lg:text-3xl text-secondary group-hover:text-primary transition-colors duration-500 uppercase tracking-tighter leading-tight">{exp.company}</h4>
                                </div>

                                <div className="md:col-span-6 space-y-6 md:space-y-10">
                                    <h3 className="headline-lg text-on-surface text-3xl md:text-5xl lg:text-6xl leading-none tracking-tighter transition-all duration-700 group-hover:text-primary">{exp.role}</h3>
                                    <p className="font-body text-lg md:text-xl text-on-surface/50 leading-relaxed max-w-2xl">
                                        {exp.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="px-5 py-2 apple-glass font-label text-[9px] md:text-[10px] text-primary/60 uppercase tracking-widest rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="md:col-span-3 flex flex-col md:items-end justify-center pt-4 md:pt-0">
                                    <div className="flex flex-col items-end gap-2 opacity-20 group-hover:opacity-100 transition-opacity duration-1000">
                                        <span className="font-label text-[9px] text-secondary uppercase tracking-[0.4em]">Node_Authenticated</span>
                                        <span className="font-label text-[9px] text-primary uppercase tracking-[0.4em]">Shard: 0{history.length - i}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
