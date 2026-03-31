import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const arsenal = [
  { name: "C# / .NET", icon: "dotnet", color: "512BD4" },
  { name: "Go", icon: "go", color: "00ADD8" },
  { name: "TypeScript", icon: "typescript", color: "3178C6" },
  { name: "NestJS", icon: "nestjs", color: "E0234E" },
  { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
  { name: "Redis", icon: "redis", color: "FF4438" },
  { name: "AWS", icon: "amazonaws", color: "FF9900" },
  { name: "Docker", icon: "docker", color: "2496ED" },
  { name: "Python", icon: "python", color: "3776AB" },
  { name: "Elasticsearch", icon: "elasticsearch", color: "005571" },
  { name: "Kubernetes", icon: "kubernetes", color: "326CE5" },
  { name: "K6 Testing", icon: "k6", color: "7D64FF" },
];

const TechCard = ({ item, i }) => {
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
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="apple-glass group relative min-h-[220px] flex flex-col justify-between p-10 md:p-12 transition-all duration-700 cursor-default rounded-[3rem] border-white/5 overflow-hidden"
        >
            <div className="flex justify-between items-start relative z-10 transition-transform duration-700">
                <span className="font-body text-xs text-white/40 group-hover:text-primary transition-colors tracking-widest uppercase italic">Node_{String(i+1).padStart(2, '0')}</span>
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-all duration-700 shadow-sm">
                    <img 
                        src={`https://cdn.simpleicons.org/${item.icon}/${item.color}`} 
                        alt={item.name} 
                        className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110"
                    />
                </div>
            </div>

            <div className="space-y-4 relative z-10 transition-transform duration-700">
                 <div className="h-[1px] w-8 bg-white/10 group-hover:w-20 transition-all duration-700"></div>
                 <h3 className="font-body font-bold text-3xl md:text-4xl text-white tracking-tightest leading-none">
                    {item.name}
                 </h3>
            </div>
            
            {/* Subtle Inner Glow on Hover */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
    );
};

const TechnicalArsenal = () => {
  return (
    <section className="px-6 md:px-16 py-64 md:py-80 relative overflow-hidden bg-[#030303]" id="arsenal">
        {/* Ambient Bloom */}
        <div className="absolute -bottom-1/4 -right-1/4 w-[70vw] h-[70vw] bg-secondary/5 blur-[160px] rounded-full pointer-events-none opacity-40" />

        <div className="max-w-screen-2xl mx-auto w-full relative z-10">
            <div className="flex flex-col items-start gap-16 mb-40 md:mb-64">
                <div className="flex items-center gap-8 overflow-hidden">
                     <div className="h-[1px] w-16 bg-primary/30"></div>
                     <span className="font-body text-xs text-primary/60 uppercase tracking-[0.8em]">Technical_Infrastructure</span>
                </div>
                
                <h2 className="font-body font-semibold text-7xl md:text-[8vw] text-white tracking-tightest leading-[0.9]">
                    System <br /><span className="text-white/20 italic font-extralight tracking-[-0.04em]">Arsenal.</span>
                </h2>

                <div className="flex items-center gap-4 opacity-40">
                    <span className="font-body text-sm text-white/40 tracking-[0.4em] uppercase italic">Stack Registry // v.26_Global</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                {arsenal.map((item, i) => (
                    <TechCard key={i} item={item} i={i} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default TechnicalArsenal;
