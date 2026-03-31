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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="apple-glass p-12 md:p-16 flex flex-col transition-all duration-700 cursor-default rounded-[3rem]"
        >
            <div className="flex items-start gap-6 mb-16 relative z-10 transition-transform duration-700 group-hover:translate-z-[40px]">
                <div className="p-4 apple-glass rounded-2xl group-hover:scale-110 transition-transform duration-700">
                    {Icon}
                </div>
                <h4 className="font-headline font-bold text-3xl md:text-4xl text-on-surface leading-none tracking-tighter uppercase transition-colors group-hover:translate-z-[20px]">
                    {title}
                </h4>
            </div>
            
            <ul className="space-y-16 relative z-10 transition-transform duration-700 group-hover:translate-z-[30px]">
                {children}
            </ul>
        </motion.div>
    );
};

const Capabilities = () => {
  return (
    <section className="px-6 md:px-12 py-32 md:py-64 relative overflow-hidden" id="capabilities">
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-end gap-12 mb-24 md:mb-48">
                <h2 className="headline-lg text-on-surface">
                    CORE <br /><span className="text-primary italic">Strengths.</span>
                </h2>
                <div className="pb-4">
                    <span className="font-label text-xs md:text-sm text-secondary tracking-[0.5em] uppercase opacity-60">System Capacities // Functional_Prowess</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <CapabilityCard 
                    title={<>Load <br />Handling</>}
                    delay={0.1}
                    icon={
                        <svg className="text-primary" fill="none" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 24H44M12 12V36M36 12V36" stroke="currentColor" strokeWidth="1"></path>
                            <circle cx="12" cy="12" fill="currentColor" r="2"></circle>
                            <circle cx="36" cy="36" fill="currentColor" r="2"></circle>
                            <rect height="8" stroke="currentColor" strokeWidth="1" width="8" x="20" y="20"></rect>
                        </svg>
                    }
                >
                    <li className="relative group">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="font-label text-[10px] text-primary transition-colors">01</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface">Race Condition Control</p>
                        </div>
                        <p className="font-body text-lg text-on-surface/40 group-hover:text-on-surface transition-colors duration-500">Implementing atomic operations and distributed locking strategies to ensure data consistency.</p>
                    </li>
                    <li className="relative group">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="font-label text-[10px] text-primary transition-colors">02</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface">Benchmarking</p>
                        </div>
                        <p className="font-body text-lg text-on-surface/40 group-hover:text-on-surface transition-colors duration-500">Extensive load testing using K6 to identify bottlenecks and optimize system throughput.</p>
                    </li>
                </CapabilityCard>

                <CapabilityCard 
                    title={<>Distributed <br />Systems</>}
                    delay={0.2}
                    icon={
                        <svg className="text-secondary" fill="none" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4L4 14V34L24 44L44 34V14L24 4Z" stroke="currentColor" strokeWidth="1"></path>
                            <path d="M24 4V44M4 14L44 34M44 14L4 34" stroke="currentColor" strokeWidth="1"></path>
                            <circle cx="24" cy="24" fill="currentColor" r="3"></circle>
                        </svg>
                    }
                >
                    <li className="relative group">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="font-label text-[10px] text-secondary transition-colors">03</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface">Brokerage</p>
                        </div>
                        <p className="font-body text-lg text-on-surface/40 group-hover:text-on-surface transition-colors duration-500">Leveraging Redis Pub/Sub and Amazon SQS to decouple services and handle asynchronous workflows.</p>
                    </li>
                    <li className="relative group">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="font-label text-[10px] text-secondary transition-colors">04</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface">Architecture</p>
                        </div>
                        <p className="font-body text-lg text-on-surface/40 group-hover:text-on-surface transition-colors duration-500">Designing clean, maintainable, and modular backends for enterprise Quality Management Systems.</p>
                    </li>
                </CapabilityCard>

                <CapabilityCard 
                    title={<>Data <br />Optimization</>}
                    delay={0.3}
                    icon={
                        <svg className="text-primary" fill="none" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12H40M8 24H40M8 36H40" stroke="currentColor" strokeWidth="1"></path>
                            <rect fill="currentColor" height="4" width="4" x="12" y="10"></rect>
                            <rect fill="currentColor" height="4" width="4" x="28" y="22"></rect>
                            <rect fill="currentColor" height="4" width="4" x="18" y="34"></rect>
                        </svg>
                    }
                >
                    <li className="relative group">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="font-label text-[10px] text-primary transition-colors">05</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface">Database Perf</p>
                        </div>
                        <p className="font-body text-lg text-on-surface/40 group-hover:text-on-surface transition-colors duration-500">Optimizing complex PostgreSQL and MySQL queries, reducing response times through strategic indexing.</p>
                    </li>
                    <li className="relative group">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="font-label text-[10px] text-primary transition-colors">06</span>
                            <p className="font-body font-bold tracking-[0.2em] uppercase text-[10px] text-on-surface">Caching</p>
                        </div>
                        <p className="font-body text-lg text-on-surface/40 group-hover:text-on-surface transition-colors duration-500">Implementing multi-tier Redis caching to achieve 50%+ reductions in API latency.</p>
                    </li>
                </CapabilityCard>
            </div>
        </div>
    </section>
  );
};

export default Capabilities;
