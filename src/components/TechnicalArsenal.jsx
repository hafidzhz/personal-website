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
  { name: "AWS", icon: "amazonaws", color: "adcbda" },
  { name: "DOCKER", icon: "docker", color: "adcbda" },
  { name: "K6 TESTING", icon: "k6", color: "ee7d77" },
];

const TechCard = ({ item, i }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
        
        // Update local hover light position for CSS
        e.currentTarget.style.setProperty('--mouse-x', `${(mouseX / width) * 100}%`);
        e.currentTarget.style.setProperty('--mouse-y', `${(mouseY / height) * 100}%`);
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
            className="apple-glass group relative min-h-[160px] md:min-h-[220px] flex flex-col justify-between p-6 md:p-10 transition-all duration-700 cursor-default perspective-[1000px] rounded-[2rem] md:rounded-[3rem]"
        >
            <div className="flex justify-between items-start relative z-10 transition-transform duration-700 group-hover:translate-z-[40px]">
                <span className="font-label text-[9px] text-primary/30 group-hover:text-primary transition-colors tracking-widest uppercase">Node_{i+1}</span>
                <img 
                    src={`https://cdn.simpleicons.org/${item.icon}/${item.color}`} 
                    alt={item.name} 
                    className="w-8 h-8 md:w-10 md:h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-20 group-hover:opacity-100"
                />
            </div>

            <div className="space-y-4 relative z-10 transition-transform duration-700 group-hover:translate-z-[60px]">
                 <div className="h-[1px] w-6 bg-white/10 group-hover:w-full transition-all duration-700"></div>
                 <h3 className="font-headline font-bold text-xl md:text-2xl text-on-surface group-hover:text-secondary uppercase tracking-tighter leading-none">
                    {item.name}
                 </h3>
            </div>
        </motion.div>
    );
};

const TechnicalArsenal = () => {
  return (
    <section className="px-6 md:px-12 py-32 md:py-64 relative overflow-hidden" id="arsenal">
        <div className="max-w-7xl mx-auto w-full relative z-10">
            {/* Massive Header Section */}
            <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-16 mb-24 md:mb-48">
                <h2 className="headline-lg text-on-surface">
                    TECH <br /><span className="text-secondary italic">Registry.</span>
                </h2>
                <div className="space-y-4">
                    <span className="font-label text-xs md:text-sm text-primary tracking-[0.5em] uppercase block">Infrastructure // Global_Stack</span>
                    <div className="px-6 py-2 apple-glass inline-flex items-center gap-4 rounded-full">
                        <div className="w-2 h-2 bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)] rounded-full"></div>
                        <span className="font-label text-[10px] text-on-surface/60 tracking-[0.2em] uppercase">Persistent_Integrity</span>
                    </div>
                </div>
            </div>

            {/* Expansive Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {arsenal.map((item, i) => (
                    <TechCard key={i} item={item} i={i} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default TechnicalArsenal;
