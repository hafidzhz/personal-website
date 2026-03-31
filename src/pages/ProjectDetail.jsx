import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const projectSpecs = [
  {
    id: 'sys-01',
    title: "Flash Sale Vouchers",
    role: "Sr. Backend Engineer",
    industry: "Fintech / E-commerce",
    description: "High-performance voucher redemption engine engineered to maintain absolute consistency during massive scale flash-sale events. Designed for sub-second atomicity and high availability under extreme load.",
    stack: [".NET", "Redis", "SQS", "PostgreSQL"],
    achievements: [
      "Optimized concurrency control resulting in 100% data consistency during 10k+ concurrent request peaks.",
      "Engineered decoupled background processing through Redis Pub/Sub, increasing system throughput by 30%.",
      "Conducted extensive k6 load testing identifying critical database bottlenecks prior to production launch."
    ],
    metadata: {
        hash: "0xRED-REDEMPTION-NODE",
        status: "Validated::Stable",
        load: "10k+ req/s"
    }
  },
  {
    id: 'sys-02',
    title: "Clinic Booking Hub",
    role: "Backend Architect",
    industry: "HealthTech",
    description: "Real-time appointment scheduling and medical management system serving a distributed network of 300+ clinics. Focused on secure media handling and rapid synchronization of patient data.",
    stack: ["C#", "PostgreSQL", "AWS S3", "Verihubs"],
    achievements: [
      "Reduced API response times by 50% through strategic PostgreSQL indexing and multi-tier caching.",
      "Integrated secure identity verification using Verihubs to protect patient data access.",
      "Engineered secure media transfer protocols using AWS S3 for patient diagnostic reports."
    ],
    metadata: {
        hash: "0xHLT-BOOKING-HUB",
        status: "Active::Scale",
        load: "300+ Clinics"
    }
  },
  {
    id: 'sys-03',
    title: "Morinaga Gen-AI",
    role: "System Maintainer",
    industry: "Health / AI",
    description: "High-end image synthesis platform built for the Morinaga ecosystem. Orchestrates sophisticated generative AI models to predictively generate offspring imagery from parent photo data. Built on a robust NestJS architecture to handle high-concurrency inference and scaled media storage.",
    stack: ["NestJS", "PostgreSQL", "AWS S3", "Generative AI"],
    achievements: [
      "Engineered an asynchronous NestJS orchestrator for managing AI model inference and asset generation cycles.",
      "Developed a secure and performant media asset pipeline using AWS S3 for the intensive management of parent inputs and AI outputs.",
      "Optimized multi-stage state management in PostgreSQL to ensure session persistence during the predictive imagery generation process."
    ],
    metadata: {
        hash: "0xAI-INF-ORCHESTRATOR",
        status: "Active::Secure",
        load: "High Inference"
    }
  },
];

const defaultSpec = {
  title: "Archived Backend Node",
  role: "Lead Maintainer",
  industry: "Enterprise Infrastructure",
  description: "Advanced backend service part of a larger distributed ecosystem. Focused on data integrity, high availability, and secure communication across internal microservices.",
  stack: ["Backend Core", "Relational DB", "Global Caching", "Auth Cluster"],
  achievements: [
    "Refactored legacy database structures to improve application stability.",
    "Established coding standards that improved team development velocity.",
    "Optimized schemas resulting in faster data retrieval for large datasets."
  ],
  metadata: {
      hash: "0xCONFIDENTIAL-NODE",
      status: "Archived::Verified",
      load: "Enterprise Standard"
  }
};

function ProjectDetail() {
  const { id } = useParams();
  const spec = projectSpecs.find(p => p.id === id) || defaultSpec;
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="min-h-screen bg-[#030303] text-on-surface selection:bg-primary/20 pb-64 overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 bg-mesh opacity-40"></div>
      
      {/* Heavy Decorative ID */}
      <motion.div 
        style={{ y: yParallax }}
        className="fixed top-20 right-0 font-headline font-extrabold text-[30vw] leading-none tracking-tightest opacity-[0.03] select-none pointer-events-none uppercase italic"
      >
        {id}
      </motion.div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        {/* Superior Header Command */}
        <header className="pt-32 md:pt-48 pb-12 md:pb-24 border-b border-white/5">
            <Link to="/projects" className="inline-flex items-center gap-6 font-label text-[10px] text-primary uppercase tracking-[0.6em] mb-24 md:mb-32 hover:translate-x-[-10px] transition-transform">
                <span className="material-symbols-outlined text-sm">west</span>
                Return_To_Registry 
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between items-start gap-12">
                <div className="space-y-12">
                    <div className="flex items-center gap-6">
                        <div className="px-5 py-2 apple-glass rounded-full border border-primary/20">
                            <span className="font-label text-[10px] text-primary uppercase tracking-[0.4em]">{spec.metadata.status}</span>
                        </div>
                        <span className="font-label text-[10px] text-on-surface/30 uppercase tracking-[0.5em]">{spec.metadata.hash}</span>
                    </div>
                    <h1 className="font-headline font-extrabold text-6xl md:text-[8rem] lg:text-[9rem] leading-[0.8] tracking-tighter uppercase whitespace-normal break-words drop-shadow-2xl">
                        {spec.title}
                    </h1>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-6 text-left lg:text-right pl-8 lg:pl-0 lg:pr-12 py-4 relative">
                    <div className="absolute left-0 lg:left-auto lg:right-0 top-0 bottom-0 w-[1px] bg-secondary/30"></div>
                    <span className="font-label text-xs text-secondary uppercase tracking-[0.5em] block">Load Rating</span>
                    <p className="font-headline font-bold text-4xl md:text-5xl text-on-surface tracking-tighter">{spec.metadata.load}</p>
                </div>
            </div>
        </header>

        {/* Technical Decomposition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start border-b border-white/5 pb-24 md:pb-48">
            
            {/* Context Sidebar */}
            <aside className="lg:col-span-4 space-y-20 lg:pr-16 pt-20 lg:pt-48 lg:sticky lg:top-32 border-r border-white/5 pb-12 lg:pb-12">
                <div className="space-y-20">
                    <div className="space-y-10 group">
                        <span className="font-label text-[10px] text-primary uppercase tracking-[0.6em] block opacity-40">Architectural Role</span>
                        <p className="font-headline font-extrabold text-4xl md:text-5xl text-on-surface uppercase italic leading-none transition-all group-hover:text-primary">{spec.role}</p>
                    </div>

                    <div className="space-y-10">
                        <span className="font-label text-[10px] text-primary uppercase tracking-[0.6em] block opacity-40">Tech Stack Nodes</span>
                        <div className="flex flex-wrap gap-4 pt-4">
                             {spec.stack.map(s => (
                                <span key={s} className="px-5 py-2 border border-white/10 rounded-full font-label text-[10px] text-primary uppercase tracking-widest bg-primary/5 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-crosshair">{s}</span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-10">
                        <span className="font-label text-[10px] text-primary uppercase tracking-[0.6em] block opacity-40">Deployment Industry</span>
                        <p className="font-headline font-bold text-2xl lg:text-3xl text-on-surface/50 uppercase tracking-tighter">{spec.industry}</p>
                    </div>
                </div>
            </aside>

            {/* Core Implementation Deck - Focused on Logic Summary */}
            <main className="lg:col-span-8 lg:pl-16 pt-20 lg:pt-48 space-y-48">
                <section className="space-y-12">
                    <div className="flex items-center gap-12 opacity-40">
                        <div className="h-[1px] w-20 bg-white/20"></div>
                        <span className="font-label text-[10px] uppercase tracking-[0.5em]">Executive_Summary</span>
                    </div>
                    <div className="relative group">
                         <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-primary/20 group-hover:bg-primary transition-colors duration-1000"></div>
                         <p className="font-body text-3xl md:text-6xl text-on-surface/80 leading-[1.05] tracking-tight italic pl-6 max-w-5xl">
                            "{spec.description}"
                         </p>
                    </div>
                    
                    {/* Log Snippet for Balance */}
                    <div className="mt-20 pt-12 border-t border-white/5 opacity-30 font-mono text-[10px] md:text-xs">
                         <p className="tracking-widest uppercase">SYSLOG: INF_SYNC_NODE_VERIFIED {" >> "} LATENCY: OPTIMAL</p>
                         <p className="tracking-widest uppercase mt-2">DEPLOY_HASH: {spec.metadata.hash}</p>
                    </div>
                </section>
            </main>
        </div>

        {/* Operational Victories - Full Width Panorama */}
        <section className="pt-32 md:pt-64 space-y-24 md:space-y-48">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="space-y-12">
                    <div className="flex items-center gap-12 opacity-40">
                        <div className="h-[1px] w-20 bg-white/20"></div>
                        <span className="font-label text-xs uppercase tracking-[0.5em]">Operational_Victories</span>
                    </div>
                    <h3 className="font-headline font-extrabold text-5xl md:text-[8rem] text-on-surface leading-none tracking-tighter uppercase whitespace-nowrap">
                        Impact <br /><span className="text-secondary italic">Registry.</span>
                    </h3>
                </div>
                <div className="px-8 py-4 apple-glass rounded-full border border-white/10 hidden md:block">
                     <span className="font-label text-[10px] text-secondary uppercase tracking-[0.6em]">Verified Accomplishments: 0{spec.achievements.length}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                {spec.achievements.map((a, i) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 1 }}
                        key={i} 
                        className="group apple-glass p-12 md:p-20 rounded-[3.5rem] relative overflow-hidden transition-all duration-700 hover:-translate-y-4 border-white/10 hover:border-primary/40 shadow-2xl"
                    >
                        <div className="absolute top-0 bottom-0 left-0 w-0 h-full bg-primary/5 group-hover:w-full transition-all duration-1000 -z-10"></div>
                        <div className="space-y-12">
                            <span className="font-headline font-extrabold text-6xl md:text-9xl text-secondary/10 group-hover:text-primary transition-colors duration-700 leading-none block">0{i+1}</span>
                            <p className="font-headline font-semibold text-2xl md:text-4xl text-on-surface leading-tight tracking-tight uppercase">
                                {a}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectDetail;
