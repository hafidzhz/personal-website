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
    desc: "Focused on production bug fixing, performance tuning, and system stability across multiple Node.js-based applications. Managed critical patches and infrastructure reliability from Jakarta (Remote).",
    tags: ["Node.js", "Performance", "Stability", "Bug Fix"],
  },
  {
    period: "2024 — 2025",
    role: "Backend Engineer",
    company: "ArLabs · Part-Time",
    desc: "Developed a Golang microservice for secure data collection and analysis, ensuring strict data privacy and low-latency reporting from remote field locations.",
    tags: ["Golang", "Microservices", "API Design"],
  },
  {
    period: "2024 — 2024",
    role: "Backend Engineer",
    company: "Arvis · Part-Time",
    desc: "Engineered a modular Quality Management System (QMS) using .NET, featuring complex 3rd-party integrations for enterprise-grade quality control.",
    tags: [".NET", "Enterprise", "API Integration"],
  },
  {
    period: "2020 — 2022",
    role: "Fullstack Developer",
    company: "PT. Terakorp Indonesia · Full-Time",
    desc: "Led core backend engineering using Laravel. Optimized database schemas and implemented security protocols for faster data retrieval and robust encryption.",
    tags: ["Laravel", "PHP", "Encryption", "Optimization"],
  },
  {
    period: "2018 — 2020",
    role: "Fullstack Developer",
    company: "PT. Cipta Citra Kodena · Full-Time",
    desc: "Developed custom CMS and Android applications, refactoring legacy database structures to improve system stability and overall performance.",
    tags: ["Android", "CMS", "Database Design"],
  }
];

const Experience = () => {
    return (
        <section className="px-6 md:px-12 py-16 md:py-64 bg-surface-container-low/30 relative overflow-hidden" id="experience">
            <div className="architectural-grid absolute inset-0 opacity-10 pointer-events-none"></div>
            <div className="neural-lines z-0 opacity-10"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-16 mb-24 md:mb-48">
                    <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.9] tracking-tighter uppercase">
                        RELEVANT <br /><span className="text-secondary italic">NODES.</span>
                    </h2>
                    <div className="pb-4 md:pb-12 space-y-4">
                        <span className="font-label text-xs md:text-sm text-primary tracking-[0.5em] uppercase block">Operational History // 06</span>
                        <div className="px-4 py-1.5 bg-primary/5 border border-primary/20 inline-flex items-center gap-4">
                            <div className="w-1.5 h-1.5 bg-primary animate-pulse"></div>
                            <span className="font-label text-[9px] text-on-surface tracking-[0.2em] uppercase">Persistent_Archive_Sync</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 md:space-y-0">
                    {history.map((exp, i) => (
                        <motion.div 
                            key={i} 
                            className="group relative transition-all duration-700 perspective-[1000px]"
                            whileHover={{ scale: 0.995, rotateX: 2 }}
                        >
                            <div className="absolute inset-x-0 top-0 h-[1px] bg-outline-variant/10"></div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 md:py-24 px-0 transition-all duration-700 relative overflow-hidden backdrop-blur-0 hover:backdrop-blur-[24px] hover:saturate-[180%] border-x border-transparent hover:border-white/10 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                                <div className="absolute inset-0 bg-[#121212]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                                
                                <div className="md:col-span-3 space-y-4 relative z-10 transition-transform duration-700 group-hover:translate-x-4">
                                    <span className="font-label text-xs md:text-sm text-primary group-hover:tracking-[0.4em] transition-all duration-700 uppercase tracking-widest">{exp.period}</span>
                                    <h4 className="font-headline text-3xl md:text-4xl text-secondary group-hover:text-primary transition-colors duration-500">{exp.company}</h4>
                                </div>

                                <div className="md:col-span-6 space-y-8 md:space-y-12 relative z-10">
                                    <h3 className="font-headline text-4xl md:text-7xl text-on-surface leading-[0.9] tracking-tighter transition-all duration-700 group-hover:text-primary">{exp.role}</h3>
                                    <p className="font-body text-lg md:text-2xl text-on-surface-variant leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-700 max-w-2xl">
                                        {exp.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="px-5 py-2 glass-tag font-label text-[10px] text-primary uppercase tracking-[0.2em]">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="md:col-span-3 flex flex-col md:items-end justify-center relative z-10">
                                    <div className="lg:flex flex-col items-end gap-3 opacity-20 group-hover:opacity-100 transition-all duration-1000 group-hover:-translate-x-4">
                                        <span className="font-label text-[10px] text-secondary uppercase tracking-[0.4em]">Node_Status: Verified</span>
                                        <span className="font-label text-[10px] text-primary uppercase tracking-[0.4em]">Registry_Protocol: 0{history.length - i}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <div className="h-[1px] w-full bg-outline-variant/10"></div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
