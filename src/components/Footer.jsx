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
        <footer className="px-6 md:px-16 pt-32 pb-12 md:pt-64 md:pb-24 relative overflow-hidden bg-[#030303] border-t border-white/5" id="contact">
            {/* Massive Background Decorative Identity */}
            <div className="absolute -bottom-10 left-0 w-full font-body font-bold text-[20vw] md:text-[25vw] leading-none tracking-tightest opacity-[0.02] select-none pointer-events-none italic whitespace-nowrap">
                Hafidz<span className="text-secondary opacity-20">.</span>
            </div>

            <div className="max-w-screen-2xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-32 md:mb-64">
                    <div className="lg:col-span-8 space-y-16">
                        <div className="space-y-12">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-6"
                            >
                                <div className="px-5 py-2 apple-glass rounded-full flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]"></div>
                                    <span className="font-body text-[10px] text-primary/60 uppercase tracking-[0.4em]">Handshake_Protocol: Ready</span>
                                </div>
                            </motion.div>
                            
                            <h2 className="font-body font-semibold text-7xl md:text-8xl lg:text-[10vw] text-white leading-[0.85] tracking-tightest">
                                Build the <br />
                                <span className="text-white/20 font-extralight italic">Future.</span>
                            </h2>
                        </div>

                        <div className="flex flex-col md:flex-row items-baseline gap-12 group">
                             <a href="mailto:hafidzawaluddin@gmail.com" className="font-body font-bold text-4xl md:text-6xl text-white hover:text-primary transition-all duration-700 border-b border-white/5 hover:border-primary pb-4 tracking-tightest italic">
                                hafidzawaluddin@gmail.com
                             </a>
                             <div className="space-y-2 opacity-40">
                                <span className="font-body text-[9px] uppercase tracking-[0.6em] block text-secondary">Registry Status</span>
                                <span className="font-body text-[11px] uppercase tracking-[0.4em] block text-white/40 italic">Verified Primary Node</span>
                             </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-20 lg:text-right">
                        <div className="space-y-12">
                            <span className="font-body text-xs text-white/40 tracking-[0.6em] uppercase block">Network_Nodes</span>
                            <div className="flex flex-col gap-10">
                                {[
                                    { name: "GitHub", url: "https://github.com/hafidzhz", id: "0xGH" },
                                    { name: "LinkedIn", url: "https://www.linkedin.com/in/hafidzawaluddin/", id: "0xLI" }
                                ].map(l => (
                                    <a key={l.name} href={l.url} target="_blank" rel="noreferrer" className="group flex flex-col lg:items-end gap-2">
                                        <span className="font-body text-[10px] text-primary/40 uppercase tracking-[0.6em] italic">{l.id}</span>
                                        <div className="font-body font-semibold text-5xl md:text-7xl text-white group-hover:text-primary transition-all tracking-tightest">
                                            {l.name}
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
                        <div className="font-body font-bold text-5xl md:text-7xl text-white tracking-tightest leading-none">
                            Hafidz<span className="text-secondary italic">.</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="h-[1px] w-12 bg-white/10"></div>
                            <p className="font-body text-[11px] text-white/30 uppercase tracking-[0.4em] leading-relaxed italic">
                                Senior Backend Engineer
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col md:items-center gap-6">
                        <div className="apple-glass px-10 py-6 rounded-[2rem] flex flex-col md:items-center border border-white/5 group hover:border-primary/20 transition-all">
                             <span className="font-body text-sm text-white/60 tracking-[0.6em] whitespace-nowrap mb-2 italic">{time}</span>
                             <div className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_10px_rgba(var(--secondary-rgb),0.5)]"></div>
                                 <span className="font-body text-[10px] text-white/30 uppercase tracking-[0.4em]">Audit_v24.0.1 // UP</span>
                             </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col md:items-end gap-10">
                         <div className="flex flex-wrap md:justify-end gap-6 opacity-20">
                            {["PostgreSQL", "Redis", ".NET", "AWS", "Go"].map(v => (
                                <span key={v} className="font-body text-[10px] uppercase tracking-[0.6em]">{v}</span>
                            ))}
                         </div>
                         <div className="space-y-2 md:text-right">
                             <span className="font-body text-[9px] text-white/30 uppercase tracking-[0.4em] block italic">© {currentYear} Hafidz Awaluddin _ Professional Registry</span>
                             <span className="font-body text-[11px] text-primary/40 uppercase tracking-[0.6em] block">Status: Redundancy_Active</span>
                         </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
