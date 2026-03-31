import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const projectSpecs = [
  {
    id: 'sys-01',
    title: "Flash Sale Vouchers",
    role: "Backend Engineer",
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
        load: "10k+",
        loadLabel: "Req /sec"
    }
  },
  {
    id: 'sys-02',
    title: "Clinic Booking Hub",
    role: "Backend Engineer",
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
        load: "300+",
        loadLabel: "Nodes Active"
    }
  },
  {
    id: 'sys-03',
    title: "Morinaga Gen-AI",
    role: "Backend Engineer",
    industry: "Health / AI",
    description: "High-end image synthesis platform built for the Morinaga ecosystem. Orchestrates sophisticated generative AI models to predictively generate offspring imagery from parent photo data. Built on a robust NestJS architecture for high-concurrency inference.",
    stack: ["NestJS", "PostgreSQL", "AWS S3", "Generative AI"],
    achievements: [
      "Engineered an asynchronous NestJS orchestrator for managing AI model inference and asset generation cycles.",
      "Developed a secure and performant media asset pipeline using AWS S3 for intensive management of AI outputs.",
      "Optimized multi-stage state management in PostgreSQL to ensure session persistence during inference."
    ],
    metadata: {
        hash: "0xAI-INF-ORCHESTRATOR",
        status: "Active::Secure",
        load: "Inference",
        loadLabel: "Orchestration"
    }
  },
  {
    id: 'sys-09',
    title: "Teramedik Cloud",
    role: "Backend Engineer",
    industry: "HealthTech / SaaS",
    description: "Architecting the cloud-native evolution of Teramedik. Focused on modernizing legacy in-house PHP architectures into high-performance Laravel/PostgreSQL ecosystems to disrupt the medical infrastructure market with extreme cost efficiency.",
    stack: ["Laravel", "PostgreSQL", "Cloud Architecture"],
    achievements: [
      "Engineered the modernization of legacy PHP frameworks into a scalable Laravel ecosystem, dramatically reducing maintenance overhead.",
      "Strategically restructured deployment models, reducing implementation barriers from 1Bn+ IDR to a 150k monthly SaaS subscription.",
      "Optimized multi-tenant database architectures to support rapid, low-cost scaling for distributed medical clinics."
    ],
    metadata: {
        hash: "0xMED-CLOUD-MODERN",
        status: "Stable::Cloud",
        load: "99%+",
        loadLabel: "Cost Reduction"
    }
  },
  {
    id: 'sys-10',
    title: "Profile Gen-Engine",
    role: "Backend Engineer",
    industry: "Enterprise SaaS / Automation",
    description: "Architecting a centralized orchestration engine for the rapid generation and deployment of enterprise profile websites. Engineered to manage the entire lifecycle from CI/CD pipeline automation to real-time cross-repository synchronization across distributed nodes.",
    stack: ["Laravel", "Redis", "MySQL", "React", "CI/CD Pipelines"],
    achievements: [
      "Engineered an automated orchestration layer for generating entire company profile websites with integrated, zero-config CI/CD pipelines.",
      "Developed a robust cross-repository synchronization system to push architectural updates simultaneously to hundreds of generated project nodes.",
      "Implemented a high-availability custom domain mapping and SSL provisioning system for dynamic enterprise deployments."
    ],
    metadata: {
        hash: "0xGEN-PROFILE-NODE",
        status: "Active::Sync",
        load: "100+",
        loadLabel: "Repos Synced"
    }
  }
];

const defaultSpec = {
  title: "Archived Backend Node",
  role: "Lead Maintainer",
  industry: "Enterprise Infrastructure",
  description: "Advanced backend service part of a larger distributed ecosystem. Focused on data integrity, high availability, and secure communication across internal microservices.",
  stack: ["Backend Core", "Relational DB", "Global Caching"],
  achievements: [
    "Refactored legacy database structures to improve application stability.",
    "Established coding standards that improved team development velocity.",
    "Optimized schemas resulting in faster data retrieval for large datasets."
  ],
  metadata: {
      hash: "0xCONFIDENTIAL-NODE",
      status: "Archived::Verified",
      load: "Enterprise",
      loadLabel: "Standard"
  }
};

function ProjectDetail() {
  const { id } = useParams();
  const spec = projectSpecs.find(p => p.id === id) || defaultSpec;

  return (
    <div className="min-h-screen bg-[#030303] selection:bg-primary/20 overflow-x-hidden">
      <div className="fixed inset-0 z-0 bg-mesh opacity-40"></div>
      
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-24 relative z-10">
        {/* Monolithic Header Expansion */}
        <header className="pt-32 md:pt-80 pb-16 md:pb-64">
             <Link to="/projects" className="inline-flex items-center gap-6 font-body text-xs text-primary/60 uppercase tracking-[0.3em] sm:tracking-[0.6em] group hover:translate-x-[-10px] transition-transform mb-12 sm:mb-24">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  Archive_Registry
             </Link>

             <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-24 items-start w-full">
                    <div className="lg:col-span-8 flex flex-col items-start gap-8 sm:gap-12">
                        <div className="flex items-center gap-6 sm:gap-8">
                            <div className="px-5 py-2 apple-glass rounded-full border border-primary/20">
                                <span className="font-body text-[10px] sm:text-xs text-primary uppercase tracking-[0.4em]">{spec.metadata.status}</span>
                            </div>
                            <span className="font-body text-[9px] sm:text-[11px] text-white/20 uppercase tracking-[0.3em] sm:tracking-[0.5em] italic">{spec.metadata.hash}</span>
                        </div>
    
                        <h1 className="font-body font-semibold text-4xl sm:text-7xl md:text-[5.5vw] text-white tracking-tightest leading-[1.0] break-words max-w-2xl lg:max-w-3xl">
                            {spec.title}
                        </h1>
                    </div>

                <div className="lg:col-span-4 flex flex-col items-start text-left space-y-4 self-center lg:pb-4 border-l border-white/10 pl-8 lg:pl-10">
                    <span className="font-body text-[10px] sm:text-xs text-secondary uppercase tracking-[0.4em] sm:tracking-[0.5em] block opacity-40 italic">Key Peak Metric</span>
                    <div className="flex flex-col items-start lg:items-end">
                        <span className="font-body font-bold text-6xl sm:text-7xl md:text-8xl text-white tracking-tightest leading-none drop-shadow-lg tabular-nums">{spec.metadata.load}</span>
                        <span className="font-body text-xs text-white/20 uppercase tracking-[0.4em] mt-3">{spec.metadata.loadLabel}</span>
                    </div>
                </div>
             </div>
        </header>

        {/* Technical Registry Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 pb-32 md:pb-64">
            
            {/* Architectural Meta Sidebar */}
            <aside className="lg:col-span-4 space-y-16 sm:space-y-24">
                <div className="apple-glass p-10 sm:p-20 md:p-24 rounded-[2.5rem] md:rounded-[4rem] border-white/5 space-y-16 sm:space-y-20">
                    <div className="space-y-6">
                        <span className="font-body text-[9px] sm:text-[10px] text-primary uppercase tracking-[0.4em] sm:tracking-[0.6em] block opacity-40">Professional Role</span>
                        <p className="font-body font-semibold text-2xl sm:text-3xl text-white tracking-tight leading-tight">{spec.role}</p>
                    </div>
    
                    <div className="h-[1px] w-full bg-white/5"></div>
    
                    <div className="space-y-6">
                        <span className="font-body text-[9px] sm:text-[10px] text-primary uppercase tracking-[0.4em] sm:tracking-[0.6em] block opacity-40">Technical Stack</span>
                        <div className="flex flex-wrap gap-4">
                             {spec.stack.map(s => (
                                <span key={s} className="px-6 py-2 border border-white/10 rounded-full font-body text-[11px] text-white/50 uppercase tracking-widest">{s}</span>
                            ))}
                        </div>
                    </div>

                    <div className="h-[1px] w-full bg-white/5"></div>

                    <div className="space-y-4">
                        <span className="font-body text-[9px] sm:text-[10px] text-primary uppercase tracking-[0.4em] sm:tracking-[0.6em] block opacity-40">Target Industry</span>
                        <p className="font-body font-medium text-lg sm:text-xl text-white/30 uppercase tracking-widest">{spec.industry}</p>
                    </div>
                </div>

                {/* System Readout Snippet */}
                <div className="px-10 py-8 border-l border-white/10 font-mono text-[11px] text-white/20 uppercase tracking-[0.3em] leading-relaxed italic">
                     NODE_STATE: VALIDATED<br />
                     RUNTIME_SEC: OPTIMAL<br />
                     ARCHIVE_REF: {spec.id}
                </div>
            </aside>

            {/* Implementation Summary */}
            <main className="lg:col-span-8 space-y-64">
                <section className="space-y-16">
                    <div className="flex items-center gap-6 sm:gap-12 opacity-40">
                         <div className="h-[1px] w-12 sm:w-20 bg-primary/30"></div>
                         <span className="font-body text-[10px] sm:text-xs text-primary uppercase tracking-[0.4em] sm:tracking-[0.6em]">Project Overview</span>
                    </div>
                    
                    <div className="relative group">
                         <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-primary/10 group-hover:bg-primary transition-colors duration-1000"></div>
                         <p className="font-body font-light text-2xl sm:text-4xl md:text-5xl text-white/60 group-hover:text-white transition-colors leading-tight tracking-tight pl-4 md:pl-0">
                            {spec.description}
                         </p>
                    </div>
                </section>

                <section className="space-y-24">
                    <div className="flex items-center gap-6 sm:gap-12 opacity-40">
                         <div className="h-[1px] w-12 sm:w-20 bg-secondary/30"></div>
                         <span className="font-body text-[10px] sm:text-xs text-secondary uppercase tracking-[0.4em] sm:tracking-[0.6em]">Project Impact</span>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {spec.achievements.map((a, i) => (
                             <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 1 }}
                                key={i}
                                className="apple-glass p-10 sm:p-16 md:p-24 rounded-[2.5rem] md:rounded-[3.5rem] border-white/5 group hover:bg-white/[0.03] transition-all duration-700"
                             >
                                <div className="flex flex-col md:grid md:grid-cols-12 gap-12 items-start md:items-center">
                                    <div className="md:col-span-2">
                                        <span className="font-body font-bold text-6xl md:text-8xl text-secondary/5 group-hover:text-primary transition-colors duration-700 leading-none tabular-nums">0{i+1}</span>
                                    </div>
                                    <div className="md:col-span-10">
                                        <p className="font-body text-lg sm:text-2xl md:text-3xl text-white/70 group-hover:text-white transition-colors leading-snug">
                                            {a}
                                        </p>
                                    </div>
                                </div>
                             </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
      </div>

      {/* Atmospheric Background Depth */}
      <div className="fixed top-1/4 -right-1/4 w-[70vw] h-[70vw] bg-primary/5 blur-[160px] rounded-full pointer-events-none opacity-40 -z-10" />
      <div className="fixed bottom-0 -left-1/4 w-[60vw] h-[60vw] bg-secondary/5 blur-[140px] rounded-full pointer-events-none opacity-30 -z-10" />
    </div>
  );
}

export default ProjectDetail;
