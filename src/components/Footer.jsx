import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="px-6 md:px-12 py-32 md:py-64 relative overflow-hidden" id="contact">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-24 mb-32 md:mb-64">
                    <div className="md:col-span-8 space-y-16">
                        <div className="space-y-8">
                            <span className="font-label text-xs md:text-sm text-secondary tracking-[0.5em] uppercase opacity-60 block">Initiate Contact</span>
                            <h2 className="headline-xl text-on-surface">
                                BUILD THE <br />
                                <span className="text-primary italic">FUTURE.</span>
                            </h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                             <a href="mailto:hafidzawaluddin@gmail.com" className="font-headline font-bold text-3xl md:text-5xl text-on-surface hover:text-primary transition-all border-b border-white/10 pb-4 uppercase tracking-tighter">
                                hafidz@registry.sys
                             </a>
                             <div className="flex items-center gap-4 px-6 py-2 apple-glass rounded-full">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"></div>
                                <span className="font-label text-[10px] text-primary uppercase tracking-[0.4em]">Available_For_Engagements</span>
                             </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 space-y-16">
                        <div className="space-y-12">
                            <span className="font-label text-xs md:text-sm text-secondary tracking-[0.5em] uppercase opacity-40 block">Digital Repositories</span>
                            <div className="flex flex-col gap-10">
                                {[
                                    { name: "GitHub", url: "https://github.com/hafidzhz" },
                                    { name: "LinkedIn", url: "https://www.linkedin.com/in/hafidzawaluddin/" }
                                ].map(l => (
                                    <a key={l.name} href={l.url} target="_blank" rel="noreferrer" className="font-headline font-bold text-4xl md:text-7xl text-on-surface hover:text-primary transition-all flex items-center justify-between group uppercase tracking-tighter">
                                        {l.name} <span className="material-symbols-outlined text-4xl opacity-20 group-hover:opacity-100 group-hover:translate-x-4 transition-all">arrow_outward</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-0">
                    <div className="space-y-6">
                        <div className="font-headline font-bold text-5xl md:text-7xl text-on-surface tracking-tighter uppercase">Hafidz.</div>
                        <p className="font-label text-[10px] md:text-xs text-on-surface/40 uppercase tracking-[0.4em] leading-relaxed max-w-sm">
                             Backend Engineer & System Performance Specialist. Based in Indonesia.
                        </p>
                    </div>

                    <div className="md:text-right space-y-8">
                         <div className="flex flex-wrap md:justify-end gap-10 opacity-30">
                            {["Architecture", "Performance", "Scalability"].map(v => (
                                <span key={v} className="font-label text-[10px] uppercase tracking-[0.4em] underline underline-offset-8 decoration-primary/20">{v}</span>
                            ))}
                         </div>
                         <div className="space-y-4">
                            <span className="font-label text-[10px] md:text-xs text-on-surface/40 uppercase tracking-[0.4em] block">© {currentYear} Hafidz Awaluddin Wahyu</span>
                            <span className="font-label text-[9px] text-secondary/30 uppercase tracking-[0.3em] block italic">Designed for High Performance Architecture</span>
                         </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
