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
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative flex flex-col border border-white/10 p-8 md:p-12 bg-[#0a0a0a]/80 backdrop-blur-[40px] saturate-[200%] transition-all duration-700 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] rounded-3xl"
        >
            <div className="absolute inset-x-0 inset-y-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 opacity-40 group-hover:opacity-100 transition-opacity duration-700 -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"></div>
            
            {/* Dynamic Light Break */}
            <motion.div 
                style={{ 
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 80%)",
                    left: useTransform(mouseXSpring, [-0.5, 0.5], ["-20%", "20%"]),
                    top: useTransform(mouseYSpring, [-0.5, 0.5], ["-20%", "20%"]),
                }}
                className="absolute w-[150%] h-[150%] pointer-events-none -z-10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
            />

            <div className="flex items-start gap-4 mb-12 md:mb-16 relative z-10 transition-transform duration-700 group-hover:translate-z-[40px]">
                <div className="mt-1 group-hover:scale-110 transition-transform duration-700">
                    {Icon}
                </div>
                <h4 className="font-headline text-2xl md:text-3xl text-on-surface leading-tight tracking-tightest uppercase transition-colors group-hover:translate-z-[20px]">
                    {title}
                </h4>
            </div>
            
            <ul className="space-y-12 relative z-10 transition-transform duration-700 group-hover:translate-z-[30px]">
                {children}
            </ul>
        </motion.div>
    );
};

const Capabilities = () => {
  return (
    <section className="px-6 md:px-12 py-16 md:py-64 bg-surface relative overflow-hidden" id="capabilities">
        <div className="neural-lines z-0 opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-12 mb-16 md:mb-48">
            <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.95] tracking-tighter uppercase">
                CORE <br /><span className="text-primary italic">CAPABILITIES.</span>
            </h2>
                <div className="pb-4">
                    <span className="font-label text-xs md:text-sm text-secondary tracking-[0.5em] uppercase opacity-60">System Strengths // 02</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <CapabilityCard 
                    title={<>Concurrency & <br />Load Handling</>}
                    delay={0.1}
                    icon={
                        <svg className="text-primary" fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 24H44M12 12V36M36 12V36" stroke="currentColor" strokeWidth="0.5"></path>
                            <circle cx="12" cy="12" fill="currentColor" r="2"></circle>
                            <circle cx="36" cy="36" fill="currentColor" r="2"></circle>
                            <rect height="8" stroke="currentColor" strokeWidth="1" width="8" x="20" y="20"></rect>
                        </svg>
                    }
                >
                    <li className="relative">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="font-label text-[10px] text-primary/40 group-hover:text-primary transition-colors">01</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface opacity-60">Race Condition Control</p>
                        </div>
                        <p className="font-body text-base text-on-surface-variant leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">Implementing atomic operations and distributed locking strategies to ensure data consistency.</p>
                    </li>
                    <li className="relative">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="font-label text-[10px] text-primary/40 group-hover:text-primary transition-colors">02</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface opacity-60">Performance Validation</p>
                        </div>
                        <p className="font-body text-base text-on-surface-variant leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">Extensive load testing using K6 to identify bottlenecks and optimize system throughput.</p>
                    </li>
                </CapabilityCard>

                <CapabilityCard 
                    title={<>Distributed <br />Systems</>}
                    delay={0.2}
                    icon={
                        <svg className="text-secondary" fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4L4 14V34L24 44L44 34V14L24 4Z" stroke="currentColor" strokeWidth="0.5"></path>
                            <path d="M24 4V44M4 14L44 34M44 14L4 34" stroke="currentColor" strokeWidth="0.5"></path>
                            <circle cx="24" cy="24" fill="currentColor" r="3"></circle>
                        </svg>
                    }
                >
                    <li className="relative">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="font-label text-[10px] text-secondary/40 group-hover:text-secondary transition-colors">03</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface opacity-60">Message Brokerage</p>
                        </div>
                        <p className="font-body text-base text-on-surface-variant leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">Leveraging Redis Pub/Sub and Amazon SQS to decouple services and handle asynchronous workflows.</p>
                    </li>
                    <li className="relative">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="font-label text-[10px] text-secondary/40 group-hover:text-secondary transition-colors">04</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface opacity-60">Modular Architecture</p>
                        </div>
                        <p className="font-body text-base text-on-surface-variant leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">Designing clean, maintainable, and modular backends for enterprise Quality Management Systems.</p>
                    </li>
                </CapabilityCard>

                <CapabilityCard 
                    title={<>Data <br />Optimization</>}
                    delay={0.3}
                    icon={
                        <svg className="text-primary" fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12H40M8 24H40M8 36H40" stroke="currentColor" strokeWidth="0.5"></path>
                            <rect fill="currentColor" height="4" width="4" x="12" y="10"></rect>
                            <rect fill="currentColor" height="4" width="4" x="28" y="22"></rect>
                            <rect fill="currentColor" height="4" width="4" x="18" y="34"></rect>
                        </svg>
                    }
                >
                    <li className="relative">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="font-label text-[10px] text-primary/40 group-hover:text-primary transition-colors">05</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface opacity-60">Database Performance</p>
                        </div>
                        <p className="font-body text-base text-on-surface-variant leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">Optimizing complex PostgreSQL and MySQL queries, reducing response times through strategic indexing.</p>
                    </li>
                    <li className="relative">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="font-label text-[10px] text-primary/40 group-hover:text-primary transition-colors">06</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface opacity-60">Caching Strategies</p>
                        </div>
                        <p className="font-body text-base text-on-surface-variant leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">Implementing multi-tier Redis caching to minimize database load and achieve 50%+ reductions in API latency.</p>
                    </li>
                </CapabilityCard>
            </div>
        </div>
    </section>
  );
};

export default Capabilities;
