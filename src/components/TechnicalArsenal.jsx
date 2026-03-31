import React from 'react';
import GlassCard from './GlassCard';

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
    return (
        <GlassCard
            tilt={true}
            className="group relative min-h-[180px] md:min-h-[220px] flex flex-col justify-between p-8 md:p-12 transition-all duration-700 cursor-default rounded-[2.5rem] md:rounded-[3rem] border-white/5 hover:border-primary/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transform hover:-translate-y-2"
        >
            <div className="flex justify-between items-start relative z-10">
                <span className="font-body text-[10px] md:text-xs text-white/40 group-hover:text-primary transition-colors tracking-widest uppercase italic">Infrastructure Layer</span>
                <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center p-2.5 md:p-3 bg-white/[0.03] border border-white/5 rounded-2xl group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-700 shadow-sm">
                    <img
                        src={`https://cdn.simpleicons.org/${item.icon}/${item.color}`}
                        alt={item.name}
                        className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0 group-hover:brightness-110"
                    />
                </div>
            </div>

            <div className="space-y-4 relative z-10">
                <div className="h-[1px] w-8 bg-white/10 group-hover:w-16 group-hover:bg-primary/40 transition-all duration-700"></div>
                <h3 className="font-body font-bold text-xl md:text-3xl text-white group-hover:text-primary transition-all duration-500 tracking-tightest leading-none">
                    {item.name}
                </h3>
            </div>
        </GlassCard>
    );
};

const TechnicalArsenal = () => {
    return (
        <section className="px-4 sm:px-6 md:px-16 py-32 md:py-80 relative overflow-hidden bg-[#030303] scroll-mt-32" id="arsenal">
            {/* Ambient Bloom */}
            <div className="absolute -bottom-1/4 -right-1/4 w-[70vw] h-[70vw] bg-secondary/5 blur-[160px] rounded-full pointer-events-none opacity-40" />

            <div className="max-w-screen-2xl mx-auto w-full relative z-10">
                <div className="flex flex-col items-start gap-12 sm:gap-16 mb-24 md:mb-64">
                    <div className="flex items-center gap-6 sm:gap-8 overflow-hidden">
                        <div className="h-[1px] w-12 sm:w-16 bg-primary/30"></div>
                        <span className="font-body text-[10px] sm:text-xs text-primary/60 uppercase tracking-[0.4em] sm:tracking-[0.8em]">Technical Stack</span>
                    </div>

                    <h2 className="section-title">
                        System <br /><span className="text-white/20 italic font-extralight tracking-[-0.04em]">Arsenal.</span>
                    </h2>

                    <div className="flex items-center gap-4 opacity-40">
                        <span className="font-body text-sm text-white/40 tracking-[0.4em] uppercase italic">Engineering Registry</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
                    {arsenal.map((item, i) => (
                        <TechCard key={i} item={item} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalArsenal;
