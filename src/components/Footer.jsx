import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="px-6 md:px-12 py-16 md:py-64 bg-surface text-on-surface relative overflow-hidden border-t border-outline-variant/10">
            <div className="neural-lines z-0 opacity-20"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-16 md:mb-48">
                    <div className="md:col-span-8 space-y-8 md:space-y-16">
                        <div className="space-y-4 md:space-y-8">
                            <span className="font-label text-xs md:text-sm text-secondary tracking-[0.5em] uppercase opacity-60 block">Initiate Contact</span>
                            <h2 className="font-headline text-5xl md:text-9xl text-on-surface leading-[0.8] tracking-tighter">
                                LET'S BUILD THE <br />
                                <span className="text-primary italic">FUTURE.</span>
                            </h2>
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                             <a href="mailto:hafidzawaluddin@gmail.com" className="font-headline text-2xl md:text-4xl text-on-surface hover:text-primary transition-all border-b border-outline-variant/20 pb-2">
                                hafidzawaluddin@gmail.com
                             </a>
                             <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                                <span className="font-label text-[10px] md:text-xs text-primary uppercase tracking-[0.4em]">Available for Engagements</span>
                             </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 space-y-12">
                        <div className="space-y-8">
                            <span className="font-label text-xs md:text-sm text-secondary tracking-[0.5em] uppercase opacity-40 block">Digital Repositories</span>
                            <div className="flex flex-col gap-6 md:gap-8">
                                {[
                                    { name: "GitHub", url: "https://github.com/hafidzhz" },
                                    { name: "LinkedIn", url: "https://www.linkedin.com/in/hafidzawaluddin/" }
                                ].map(l => (
                                    <a key={l.name} href={l.url} target="_blank" rel="noreferrer" className="font-headline text-3xl md:text-6xl text-on-surface hover:text-primary transition-all flex items-center gap-6 group">
                                        {l.name} <span className="material-symbols-outlined text-2xl md:text-4xl opacity-20 group-hover:opacity-100 group-hover:translate-x-4 transition-all">arrow_outward</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-16 md:pt-32 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0">
                    <div className="space-y-4">
                        <div className="font-headline text-4xl md:text-6xl text-on-surface tracking-tighter">Hafidz.</div>
                        <p className="font-label text-[10px] md:text-xs text-on-surface-variant uppercase tracking-[0.3em] md:tracking-[0.5em] leading-relaxed max-w-sm opacity-40">
                             Backend Engineer & System Performance Specialist. Based in Indonesia.
                        </p>
                    </div>

                    <div className="md:text-right space-y-4">
                         <div className="flex flex-wrap md:justify-end gap-6 md:gap-12 opacity-30">
                            {["Architecture", "Performance", "Scalability"].map(v => (
                                <span key={v} className="font-label text-[9px] md:text-[11px] uppercase tracking-[0.3em] underline underline-offset-8 decoration-primary/20">{v}</span>
                            ))}
                         </div>
                         <div className="space-y-2">
                            <span className="font-label text-[10px] md:text-xs text-on-surface-variant uppercase tracking-[0.3em] block">© {currentYear} Hafidz Awaluddin Wahyu</span>
                            <span className="font-label text-[9px] text-secondary/30 uppercase tracking-[0.2em] block italic">Designed for High Performance Architecture</span>
                         </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
