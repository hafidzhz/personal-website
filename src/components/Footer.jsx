import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="px-6 md:px-12 pt-32 pb-12 md:pt-64 md:pb-24 relative overflow-hidden bg-[#030303] border-t border-white/5" id="contact">
            {/* Massive Background Decorative Identity */}
            <div className="absolute -bottom-20 left-0 w-full font-headline font-extrabold text-[20vw] md:text-[25vw] leading-none tracking-tightest opacity-[0.02] select-none pointer-events-none uppercase italic whitespace-nowrap">
                Hafidz Awaluddin
            </div>

            <div className="max-w-screen-2xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-32 md:mb-64">
                    <div className="lg:col-span-8 space-y-16 md:space-y-32">
                        <div className="space-y-12">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-6"
                            >
                                <div className="px-5 py-2 apple-glass rounded-full flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]"></div>
                                    <span className="font-label text-[10px] text-primary uppercase tracking-[0.4em]">Handshake_Protocol: Ready</span>
                                </div>
                            </motion.div>
                            
                            <h2 className="font-headline font-extrabold text-6xl md:text-8xl lg:text-9xl text-on-surface leading-[0.8] tracking-tighter uppercase whitespace-normal">
                                BUILD THE <br />
                                <span className="text-secondary italic">FUTURE.</span>
                            </h2>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 group">
                             <a href="mailto:hafidzawaluddin@gmail.com" className="font-headline font-extrabold text-3xl md:text-5xl lg:text-6xl text-on-surface hover:text-primary transition-all duration-700 border-b-2 border-white/10 hover:border-primary pb-4 uppercase tracking-tighter relative break-all lg:break-normal">
                                <span className="relative z-10">hafidzawaluddin@gmail.com</span>
                             </a>
                             <div className="space-y-2 opacity-40">
                                <span className="font-label text-[9px] uppercase tracking-[0.4em] block text-secondary">Operational Status</span>
                                <span className="font-label text-[10px] uppercase tracking-[0.5em] block text-on-surface">Verified Primary Node</span>
                             </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-20 lg:text-right">
                        <div className="space-y-12">
                            <span className="font-label text-xs text-secondary tracking-[0.6em] uppercase opacity-40 block">Network_Nodes</span>
                            <div className="flex flex-col gap-10">
                                {[
                                    { name: "GitHub", url: "https://github.com/hafidzhz", id: "0xGH" },
                                    { name: "LinkedIn", url: "https://www.linkedin.com/in/hafidzawaluddin/", id: "0xLI" }
                                ].map(l => (
                                    <a key={l.name} href={l.url} target="_blank" rel="noreferrer" className="group flex flex-col lg:items-end gap-2">
                                        <span className="font-label text-[9px] text-primary/40 uppercase tracking-widest">{l.id}</span>
                                        <div className="font-headline font-bold text-4xl md:text-6xl text-on-surface group-hover:text-primary transition-all flex items-center gap-6 uppercase tracking-tightest">
                                            {l.name} <span className="material-symbols-outlined text-4xl md:text-5xl opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500">arrow_forward</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ultimate System Footer */}
                <div className="pt-24 border-t border-white/5 flex flex-col md:grid md:grid-cols-12 gap-16 md:items-end">
                    <div className="md:col-span-4 space-y-8">
                        <div className="font-headline font-extrabold text-5xl md:text-7xl text-on-surface tracking-tighter uppercase leading-none">
                            Hafidz<span className="text-secondary">.</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="h-[1px] w-12 bg-primary/20"></div>
                            <p className="font-label text-[10px] text-on-surface/40 uppercase tracking-[0.4em] leading-relaxed">
                                Senior Backend Engineer
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col md:items-center gap-6">
                        <div className="apple-glass px-8 py-4 rounded-full flex flex-col md:items-center border border-white/5 group hover:border-primary/20 transition-all">
                             <span className="font-label text-xs text-on-surface tracking-[0.6em] whitespace-nowrap mb-2">{time}</span>
                             <div className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 bg-[#4ADE80] rounded-full shadow-[0_0_10px_#4ADE80]"></div>
                                 <span className="font-label text-[9px] text-[#4ADE80]/80 uppercase tracking-widest">Uptime_v99.98</span>
                             </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col md:items-end gap-8">
                         <div className="flex flex-wrap md:justify-end gap-8 opacity-20">
                            {["PostgreSQL", "Redis", ".NET", "AWS"].map(v => (
                                <span key={v} className="font-label text-[9px] uppercase tracking-[0.4em]">{v}</span>
                            ))}
                         </div>
                         <div className="space-y-2 md:text-right">
                             <span className="font-label text-[9px] text-on-surface/40 uppercase tracking-[0.4em] block italic">© {currentYear} Hafidz Awaluddin _ Node_Signature: Verified</span>
                             <span className="font-label text-[10px] text-primary/40 uppercase tracking-[0.5em] block">Registry Integrity [Pass]</span>
                         </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
