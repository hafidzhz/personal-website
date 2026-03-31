import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const arsenal = [
  { name: "C# / .NET", icon: "dotnet", color: "adcbda" },
  { name: "GO", icon: "go", color: "ee7d77" },
  { name: "TYPESCRIPT", icon: "typescript", color: "f9b148" },
  { name: "NESTJS", icon: "nestjs", color: "f9b148" },
  { name: "PHP / LARAVEL", icon: "php", color: "ee7d77" },
  { name: "PYTHON", icon: "python", color: "adcbda" },
  { name: "POSTGRESQL", icon: "postgresql", color: "adcbda" },
  { name: "MYSQL", icon: "mysql", color: "adcbda" },
  { name: "REDIS", icon: "redis", color: "ee7d77" },
  { name: "AWS", icon: "amazonwebservices", color: "adcbda" },
  { name: "DOCKER", icon: "docker", color: "adcbda" },
  { name: "K6 TESTING", icon: "k6", color: "ee7d77" },
];

const TechCard = ({ item, i }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative h-48 md:h-64 flex flex-col justify-between border border-white/10 p-8 transition-all duration-700 cursor-default overflow-hidden perspective-[1000px] backdrop-blur-0 hover:backdrop-blur-[24px] hover:saturate-[180%] hover:bg-[#0a0a0a]/80 shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"></div>
            
            {/* Dynamic Light Break */}
            <motion.div 
                style={{ 
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 80%)",
                    left: useTransform(mouseXSpring, [-0.5, 0.5], ["-20%", "20%"]),
                    top: useTransform(mouseYSpring, [-0.5, 0.5], ["-20%", "20%"]),
                }}
                className="absolute w-[150%] h-[150%] pointer-events-none -z-10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
            />

            <div className="flex justify-between items-start relative z-10 transition-transform duration-700 group-hover:translate-z-[40px]">
                <span className="font-label text-[10px] text-primary/40 group-hover:text-primary transition-colors tracking-widest uppercase">Node_{i+1}.sys</span>
                <img 
                    src={`https://cdn.simpleicons.org/${item.icon}/${item.color}`} 
                    alt={item.name} 
                    className="w-8 h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-20 group-hover:opacity-100"
                />
            </div>

            <div className="space-y-2 relative z-10 transition-transform duration-700 group-hover:translate-z-[60px]">
                 <div className="h-[1px] w-8 bg-white/10 group-hover:w-full transition-all duration-700"></div>
                 <h3 className="font-headline text-2xl md:text-3xl text-on-surface group-hover:text-secondary transition-all duration-500 leading-tight uppercase tracking-tightest">
                    {item.name}
                 </h3>
            </div>
        </motion.div>
    );
};

const TechnicalArsenal = () => {
  return (
    <section className="px-6 md:px-12 py-16 md:py-64 bg-surface relative overflow-hidden" id="arsenal">
        <div className="architectural-grid absolute inset-0 opacity-20 pointer-events-none"></div>
        <div className="neural-lines z-0 opacity-10"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
            {/* Massive Header Section */}
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-16 mb-16 md:mb-48">
                <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.9] tracking-tighter uppercase">
                    TECH <br /><span className="text-secondary italic">ARSENAL.</span>
                </h2>
                <div className="pb-4 md:pb-12 space-y-4">
                    <span className="font-label text-xs md:text-sm text-primary tracking-[0.5em] uppercase block">Agnostic Infrastructure // 05</span>
                    <div className="px-4 py-1.5 bg-primary/5 border border-primary/20 inline-flex items-center gap-4">
                        <div className="w-1.5 h-1.5 bg-primary animate-pulse"></div>
                        <span className="font-label text-[9px] text-on-surface tracking-[0.2em] uppercase">Persistent_Stack_Integrity</span>
                    </div>
                </div>
            </div>

            {/* Expansive Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {arsenal.map((item, i) => (
                    <TechCard key={i} item={item} i={i} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default TechnicalArsenal;
