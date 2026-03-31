import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CapabilityCard = ({ children, title, icon: Icon, delay = 0 }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
        
        e.currentTarget.style.setProperty('--mouse-x', `${(mouseX / width) * 100}%`);
        e.currentTarget.style.setProperty('--mouse-y', `${(mouseY / height) * 100}%`);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="apple-glass p-8 md:p-12 flex flex-col transition-all duration-700 cursor-default rounded-[2.5rem] relative min-h-[400px]"
        >
            <div className="flex items-center gap-5 mb-10 relative z-10 transition-transform duration-700 group-hover:translate-z-[30px]">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center p-3 apple-glass rounded-2xl group-hover:scale-110 transition-transform duration-700 bg-white/5 shrink-0">
                    {Icon}
                </div>
                <h4 className="font-headline font-bold text-xl md:text-2xl lg:text-3xl text-on-surface leading-tight tracking-tighter uppercase transition-colors group-hover:translate-z-[20px]">
                    {title}
                </h4>
            </div>
            
            <ul className="space-y-10 relative z-10 transition-transform duration-700 group-hover:translate-z-[40px]">
                {children}
            </ul>
        </motion.div>
    );
};

const Capabilities = () => {
  return (
    <section className="px-6 md:px-12 py-32 md:py-64 relative overflow-hidden" id="capabilities">
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-8 mb-24 md:mb-48">
                <h2 className="headline-lg text-on-surface">
                    CORE <br /><span className="text-primary italic">Strengths.</span>
                </h2>
                <div className="pb-2">
                    <div className="px-4 py-2 apple-glass rounded-full inline-flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-secondary animate-pulse rounded-full" />
                        <span className="font-label text-xs text-secondary tracking-[0.2em] uppercase">Status: Operational // Registry v.26</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 translate-z-0">
                <CapabilityCard 
                    title={<>Load <br />Handling</>}
                    delay={0.1}
                    icon={
                        <svg className="text-primary" fill="none" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 24H44M12 12V36M36 12V36" stroke="currentColor" strokeWidth="1.5"></path>
                            <circle cx="12" cy="12" fill="currentColor" r="2.5"></circle>
                            <circle cx="36" cy="36" fill="currentColor" r="2.5"></circle>
                            <rect height="8" stroke="currentColor" strokeWidth="1.5" width="8" x="20" y="20"></rect>
                        </svg>
                    }
                >
                    <li className="relative group">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="font-label text-[10px] text-primary/40 uppercase tracking-widest">NR_01</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface opacity-80">Race Condition Control</p>
                        </div>
                        <p className="font-body text-lg text-on-surface/50 group-hover:text-on-surface transition-colors duration-500 leading-snug">Atomic operations and distributed locking for extreme consistency.</p>
                    </li>
                    <li className="relative group">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="font-label text-[10px] text-primary/40 uppercase tracking-widest">NR_02</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface opacity-80">Benchmarking</p>
                        </div>
                        <p className="font-body text-lg text-on-surface/50 group-hover:text-on-surface transition-colors duration-500 leading-snug">Continuous K6 validation ensuring sub-ms latency at peak throughput.</p>
                    </li>
                </CapabilityCard>

                <CapabilityCard 
                    title={<>Distributed <br />Architecture</>}
                    delay={0.2}
                    icon={
                        <svg className="text-secondary" fill="none" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4L4 14V34L24 44L44 34V14L24 4Z" stroke="currentColor" strokeWidth="1.5"></path>
                            <path d="M24 4V44M4 14L44 34M44 14L4 34" stroke="currentColor" strokeWidth="1.5"></path>
                            <circle cx="24" cy="24" fill="currentColor" r="3.5"></circle>
                        </svg>
                    }
                >
                    <li className="relative group">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="font-label text-[10px] text-secondary/40 uppercase tracking-widest">NR_03</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface opacity-80">Message Brokerage</p>
                        </div>
                        <p className="font-body text-lg text-on-surface/50 group-hover:text-on-surface transition-colors duration-500 leading-snug">Decoupled Redis & SQS workflows for fault-tolerant operations.</p>
                    </li>
                    <li className="relative group">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="font-label text-[10px] text-secondary/40 uppercase tracking-widest">NR_04</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface opacity-80">Modular Systems</p>
                        </div>
                        <p className="font-body text-lg text-on-surface/50 group-hover:text-on-surface transition-colors duration-500 leading-snug">Clean architecture patterns optimized for enterprise growth.</p>
                    </li>
                </CapabilityCard>

                <CapabilityCard 
                    title={<>Database <br />Optimization</>}
                    delay={0.3}
                    icon={
                        <svg className="text-primary" fill="none" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12H40M8 24H40M8 36H40" stroke="currentColor" strokeWidth="1.5"></path>
                            <rect fill="currentColor" height="4" width="4" x="12" y="10" rx="1"></rect>
                            <rect fill="currentColor" height="4" width="4" x="28" y="22" rx="1"></rect>
                            <rect fill="currentColor" height="4" width="4" x="18" y="34" rx="1"></rect>
                        </svg>
                    }
                >
                    <li className="relative group">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="font-label text-[10px] text-primary/40 uppercase tracking-widest">NR_05</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface opacity-80">Index Performance</p>
                        </div>
                        <p className="font-body text-lg text-on-surface/50 group-hover:text-on-surface transition-colors duration-500 leading-snug">Strategic SQL indexing yielding 40% reduction in query latency.</p>
                    </li>
                    <li className="relative group">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="font-label text-[10px] text-primary/40 uppercase tracking-widest">NR_06</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface opacity-80">Multi-Tier Caching</p>
                        </div>
                        <p className="font-body text-lg text-on-surface/50 group-hover:text-on-surface transition-colors duration-500 leading-snug">Tiered Redis strategies minimizing database hit-rates across systems.</p>
                    </li>
                </CapabilityCard>
            </div>
        </div>
    </section>
  );
};

export default Capabilities;
