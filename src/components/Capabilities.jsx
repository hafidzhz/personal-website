import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CapabilityCard = ({ children, title, icon: Icon, delay = 0 }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        x.set(e.clientX / width - 0.5);
        y.set(e.clientY / height - 0.5);
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
            transition={{ delay, duration: 1, ease: [0.19, 1, 0.22, 1] }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="apple-glass p-10 md:p-16 lg:p-20 flex flex-col transition-all duration-700 cursor-default rounded-[2.5rem] md:rounded-[4rem] border-white/5 relative h-full group"
        >
            <div className="flex items-center gap-6 md:gap-8 mb-12 md:mb-16 relative z-10 transition-transform duration-700 h-[80px] md:h-[100px] lg:h-[120px] items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center p-3 md:p-3.5 bg-white/5 border border-white/5 rounded-2xl shadow-sm group-hover:bg-white/10 transition-colors">
                    {Icon}
                </div>
                <h4 className="font-body font-bold text-2xl md:text-4xl text-white tracking-tightest leading-[1.1]">
                    {title}
                </h4>
            </div>
            
            <ul className="space-y-8 md:space-y-10 relative z-10 flex-grow">
                {children}
            </ul>
        </motion.div>
    );
};

const Capabilities = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 py-32 md:py-80 relative overflow-hidden bg-[#030303] scroll-mt-32" id="capabilities">
        {/* Atmospheric Glow */}
        <div className="absolute top-1/2 -left-1/4 w-[60vw] h-[60vw] bg-primary/5 blur-[140px] rounded-full pointer-events-none opacity-40" />

        <div className="max-w-screen-2xl mx-auto relative z-10">
                <div className="flex flex-col items-start gap-16 mb-40 md:mb-64">
                    <div className="flex items-center gap-6 sm:gap-8 overflow-hidden">
                         <div className="h-[1px] w-12 sm:w-16 bg-primary/30"></div>
                         <span className="font-body text-[10px] text-primary/60 uppercase tracking-[0.8em]">Core Capabilities</span>
                    </div>
                    
                    <h2 className="font-body font-semibold text-5xl sm:text-7xl md:text-[8vw] text-white tracking-tightest leading-[0.9]">
                        Mission <br /><span className="text-white/20 italic font-extralight tracking-[-0.04em]">Critical Engineering.</span>
                    </h2>

                    <div className="flex items-center gap-4 opacity-40">
                        <span className="font-body text-sm text-white/40 tracking-[0.4em] uppercase italic">Engineering Registry</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-stretch">
                    <CapabilityCard 
                        title="Load Handling"
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
                        <li className="space-y-4">
                            <div className="flex items-center">
                                <p className="font-body font-medium text-[11px] md:text-xs text-white/80 uppercase tracking-[0.1em]">Race Condition Control</p>
                            </div>
                            <p className="font-body text-lg md:text-xl text-white/40 leading-snug italic">Distributed locking for extreme scaling.</p>
                        </li>
                        <li className="space-y-4">
                            <div className="flex items-center">
                                <p className="font-body font-medium text-xs text-white/80 uppercase tracking-[0.1em]">Benchmarking</p>
                            </div>
                            <p className="font-body text-xl text-white/40 leading-snug italic">Continuous K6 validation at peak.</p>
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
                        <li className="space-y-4">
                            <div className="flex items-center">
                                <p className="font-body font-medium text-xs text-white/80 uppercase tracking-[0.1em]">Message Brokerage</p>
                            </div>
                            <p className="font-body text-xl text-white/40 leading-snug italic">Decoupled Redis & SQS workflows.</p>
                        </li>
                        <li className="space-y-4">
                            <div className="flex items-center">
                                <p className="font-body font-medium text-xs text-white/80 uppercase tracking-[0.1em]">System Nodes</p>
                            </div>
                            <p className="font-body text-xl text-white/40 leading-snug italic">Clean architecture optimized growth.</p>
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
                        <li className="space-y-4">
                            <div className="flex items-center">
                                <p className="font-body font-medium text-xs text-white/80 uppercase tracking-[0.1em]">Index Strategy</p>
                            </div>
                            <p className="font-body text-xl text-white/40 leading-snug italic">Strategic SQL indexing latency reduction.</p>
                        </li>
                        <li className="space-y-4">
                            <div className="flex items-center">
                                <p className="font-body font-medium text-xs text-white/80 uppercase tracking-[0.1em]">Multi-Tier Caching</p>
                            </div>
                            <p className="font-body text-xl text-white/40 leading-snug italic">Redis tiered strategies for data.</p>
                        </li>
                    </CapabilityCard>
                </div>
        </div>
    </section>
  );
};

export default Capabilities;
