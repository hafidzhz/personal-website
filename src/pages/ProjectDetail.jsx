import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const projectSpecs = [
  {
    id: 'sys-01',
    title: "Flash Sale Vouchers",
    repo: "Confidential Production System",
    role: "Backend Engineer",
    industry: "Fintech / E-commerce",
    description: "High-performance voucher redemption engine engineered to maintain absolute consistency during massive scale flash-sale events. Designed for sub-second atomicity and high availability under extreme load.",
    stack: [".NET", "Redis Pub/Sub", "Amazon SQS", "K6 Testing"],
    achievements: [
      "Optimized concurrency control resulting in 100% data consistency during 10k+ concurrent request peaks.",
      "Engineered decoupled background processing through Redis Pub/Sub, increasing system throughput by 30%.",
      "Conducted extensive k6 load testing identifying critical database bottlenecks prior to production launch."
    ]
  },
  {
    id: 'sys-02',
    title: "Clinic Booking Hub",
    repo: "Healthcare Management Core",
    role: "Backend Maintainer",
    industry: "HealthTech",
    description: "Real-time appointment scheduling and medical management system serving a distributed network of 300+ clinics. Focused on secure media handling and rapid synchronization of patient data.",
    stack: ["C#", "PostgreSQL", "AWS S3", "Verihubs Integration"],
    achievements: [
      "Reduced API response times by 50% through strategic PostgreSQL indexing and multi-tier caching.",
      "Integrated secure identity verification using Verihubs to protect patient data access.",
      "Engineered secure media transfer protocols using AWS S3 for patient diagnostic reports."
    ]
  },
  {
    id: 'sys-12',
    title: "Gold Rewards Engine",
    repo: "Gamification Backend Node",
    role: "Maintainer",
    industry: "Fintech / Rewards",
    description: "High-engagement micro-service ecosystem integrated within the core Treasury gold-trading platform. Orchestrates complex reward cycles, real-time marketplace redemptions, and high-concurrency interactive modules including automated flash sales and synchronized leaderboards.",
    stack: ["Laravel", "Redis", "AWS S3", "PostgreSQL"],
    achievements: [
      "Engineered an automated reward allocation engine triggered by gold acquisition transaction events.",
      "Developed a real-time marketplace infrastructure supporting asynchronous voucher issuance and sub-second flash sale validation.",
      "Optimized interactive game-state persistence (Spinwheel & Rewards) and global leaderboards using Redis, achieving sub-millisecond state synchronization."
    ]
  },
  {
    id: 'sys-06',
    title: "Prenagen AI Platform",
    repo: "AI Context Orchestrator",
    role: "Maintainer",
    industry: "Health / Generative AI",
    description: "Sophisticated image synthesis platform engineered for Prenagen. Orchestrates high-fidelity generative AI models to predictively generate offspring imagery from parent-contributed photographic data. Managed through a high-performance NestJS architecture focused on asynchronous inference management.",
    stack: ["NestJS", "PostgreSQL", "AWS S3", "Generative AI"],
    achievements: [
      "Engineered a robust NestJS orchestrator for managing asynchronous generative AI model inference and long-polling task completion.",
      "Developed a secure, high-volume media pipeline using AWS S3 for the lifecycle management of contributed and synthesized assets.",
      "Designed a highly-available transactional system in PostgreSQL to maintain session consistency across multi-stage image generation tasks."
    ]
  },
  {
    id: 'sys-13',
    title: "Multi-Site Growth Tracker",
    repo: "Growth Calculation API",
    role: "Maintainer",
    industry: "HealthTech / Multi-Site",
    description: "Centralized child development monitoring platform engineered for seamless integration across the entire Morinaga digital ecosystem. This modular API serves as a unified backend for 10+ product-specific websites, managing complex developmental milestones and growth percentile benchmarks.",
    stack: ["NestJS", "Redis", "PostgreSQL", "AWS S3"],
    achievements: [
      "Engineered a multi-tenant service architecture that serves a unified API for tracking parent-child data across Morinaga's diverse web properties.",
      "Optimized calculation-heavy developmental milestone retrievals using a strategic Redis caching layer, ensuring sub-second response times during peak traffic.",
      "Developed a robust synchronization engine in PostgreSQL to unify historical growth data across multiple brand-specific domains."
    ]
  },
  {
    id: 'sys-10',
    title: "Hakone Content Engine",
    repo: "Enterprise Logic Core",
    role: "Maintainer",
    industry: "Enterprise / CMS",
    description: "High-fidelity Enterprise Content Management System (CMS) engineered for Hakone's digital presence. Focuses on robust content orchestration and seamless media delivery through a performant, decoupled backend architecture.",
    stack: ["Laravel", "Redis", "MySQL", "AWS S3"],
    achievements: [
      "Engineered a high-performance content delivery layer using Laravel, optimized through a strategic Redis caching implementation for sub-millisecond response times.",
      "Developed a secure and performant media asset pipeline in AWS S3 for the intensive management of high-resolution brand content.",
      "Optimized a sophisticated relational schema in MySQL to handle complex, multi-layered enterprise content hierarchies with absolute data integrity."
    ]
  },
  {
    id: 'sys-05',
    title: ".NET Agnostic Architecture",
    repo: "Personal Architecture Lab",
    role: "Owner / Lead Architect",
    industry: "Enterprise / Infrastructure",
    description: "High-fidelity, infrastructure-agnostic architectural lab designed for absolute flexibility in enterprise .NET ecosystems. Orchestrates a modular monolith baseline that maintains complete agnosticism across persistence providers (PostgreSQL, MySQL, mssql), logging nodes, and distributed caching systems.",
    stack: [".NET 8", "EF Core", "Multi-SQL Provider", "Redis"],
    achievements: [
      "Engineered a persistence-agnostic Repository node that supports seamless switching between PostgreSQL, MySQL, and mssql without core logic changes.",
      "Designed a pluggable infrastructure layer for centralized logging and distributed state management using Redis or in-memory providers.",
      "Optimized the core boilerplate with a clean-architecture mandate, delivering a mission-ready baseline for rapid mid-to-large-scale system deployments."
    ]
  },
  {
    id: 'sys-14',
    title: "FKS Reward Engine",
    repo: "Operational Logic Node",
    role: "Maintainer",
    industry: "Enterprise / Rewards",
    description: "High-integrity point accumulation and reward management micro-service built for the FKS enterprise ecosystem. Orchestrates complex transactional reward cycles, real-time point allocation, and high-concurrency interactive modules focused on long-term user engagement.",
    stack: ["Laravel", "Redis", "PostgreSQL", "AWS S3"],
    achievements: [
      "Engineered an automated points calculation engine for processing high-concurrency transactional reward events in real-time.",
      "Designed a secure, consistent point-ledger architecture in PostgreSQL to manage millions of reward events with absolute data integrity.",
      "Optimized user-state persistence and global point tracking using a high-performance Redis cache for sub-second reward synchronization."
    ]
  },
  {
    id: 'sys-09',
    title: "Chilgo Content Engine",
    repo: "Retail Support API",
    role: "Maintainer",
    industry: "Health / Retail Integration",
    description: "Enterprise content and retail support platform engineered for the Chilgo brand. Orchestrates brand-scale content delivery alongside a synchronized 3rd-party integration for real-time user reward point verification and checking.",
    stack: ["Laravel", "Redis", "MySQL", "AWS S3"],
    achievements: [
      "Engineered an authoritative content orchestration layer using Laravel and Redis, optimized for high-performance media delivery across the digital ecosystem.",
      "Integrated a secure, high-availability integration node for 3rd-party reward point verification and real-time user balance synchronization.",
      "Optimized large-scale visual asset management through AWS S3, ensuring consistent global media throughput for major digital brand campaigns."
    ]
  },
  {
    id: 'sys-04',
    title: "Promina Growth Tracker",
    repo: "Brand Loyalty Engine",
    role: "Maintainer",
    industry: "HealthTech / Recommendations",
    description: "Child development monitoring and product recommendation platform engineered for the Promina brand. Orchestrates a sophisticated assessment logic node that analyzes developmental quiz data to provide data-driven dietary and product recommendations through a performant Razor Pages interface.",
    stack: [".NET", "SQL Server", "Razor Pages", "WebAPI"],
    achievements: [
      "Engineered a high-integrity assessment engine that processes multi-dimensional quiz data for precise product matching.",
      "Optimized a robust relational data schema in SQL Server to maintain long-term development history and user progress tracking.",
      "Developed a responsive, server-side rendered frontend using Razor Pages, ensuring high performance across low-bandwidth retail user environments."
    ]
  },
  {
    id: 'sys-07',
    title: "Medical Symposium Registry",
    repo: "Medical Infrastructure BE",
    role: "Maintainer",
    industry: "Health / Event Management",
    description: "Specialized event orchestration and registration infrastructure engineered for high-end medical symposia. This .NET-based platform manages secure professional registration for pediatricians, automated session scheduling, and real-time communications through integrated notification gateways.",
    stack: [".NET Core", "Redis", "PostgreSQL", "WhatsApp API"],
    achievements: [
      "Engineered a robust .NET registration engine capable of managing high-concurrency event check-ins and complex professional practitioner profiles.",
      "Integrated an automated attendee notification layer using WhatsApp API for real-time symposium schedules and session reminders.",
      "Optimized registrant data persistence using PostgreSQL with a high-performance Redis cache for sub-second state retrieval during event peaks."
    ]
  },
  {
    id: 'sys-03',
    title: "Morinaga Generative AI",
    repo: "Asset Generation Service",
    role: "Maintainer",
    industry: "Health / Generative AI",
    description: "High-end image synthesis platform built for the Morinaga ecosystem. Orchestrates sophisticated generative AI models to predictively generate offspring imagery from parent photo data. Built on a robust NestJS architecture to handle high-concurrency inference and scaled media storage.",
    stack: ["NestJS", "PostgreSQL", "AWS S3", "Generative AI"],
    achievements: [
      "Engineered an asynchronous NestJS orchestrator for managing AI model inference and asset generation cycles.",
      "Developed a secure and performant media asset pipeline using AWS S3 for the intensive management of parent inputs and AI outputs.",
      "Optimized multi-stage state management in PostgreSQL to ensure session persistence during the predictive imagery generation process."
    ]
  },
  {
    id: 'sys-08',
    title: "Activity Audit Engine",
    repo: "Efficiency Tooling Node",
    role: "Maintainer",
    industry: "Enterprise / Productivity",
    description: "Sophisticated employee activity orchestration and performance logging ecosystem engineered for high-integrity operational tracking. Features a complex data visualization dashboard designed for sub-second analytical retrieval across massive activity datasets using a high-performance NestJS and Redis-backed architecture.",
    stack: ["NestJS", "PostgreSQL", "Redis", "Analytical Node"],
    achievements: [
      "Engineered a high-throughput activity ingestion engine in NestJS, optimized for consistent data capture across the enterprise workforce.",
      "Designed a sophisticated analytical dashboard node featuring low-latency data aggregation and retrieval through a strategic Redis caching layer.",
      "Optimized complex relational query performance in PostgreSQL to support real-time operational reporting and high-concurrency activity auditing."
    ]
  },
  {
    id: 'sys-11',
    title: "B7 Enterprise CMS & Talent Hub",
    repo: "Enterprise Content API",
    role: "Maintainer",
    industry: "Enterprise / CMS",
    description: "Sophisticated enterprise-grade Content Management System (CMS) and integrated recruitment platform engineered for the B7 ecosystem. Orchestrates mission-critical corporate content delivery alongside a high-fidelity talent acquisition node using a robust .NET and Google Cloud Storage architecture.",
    stack: [".NET", "PostgreSQL", "Redis", "Google Cloud Storage"],
    achievements: [
      "Engineered a high-performance CMS node for managing enterprise-scale corporate content and dynamic brand storytelling nodes.",
      "Developed a secure talent acquisition and recruitment engine that processes high-volume professional candidate data and resumes in real-time.",
      "Optimized media asset delivery and document storage through a high-availability Google Cloud Storage integration, ensuring globally consistent performance."
    ]
  },
];

const defaultSpec = {
  title: "Archived Backend Node",
  repo: "Confidential Production System",
  role: "Maintainer",
  industry: "Enterprise Service",
  description: "Advanced backend service part of a larger distributed ecosystem. Focused on data integrity, high availability, and secure communication across internal microservices.",
  stack: ["Backend Framework", "Relational DB", "Caching Layer", "Auth Service"],
  achievements: [
    "Refactored legacy database structures to improve application stability.",
    "Established coding standards that improved team development velocity.",
    "Optimized schemas resulting in faster data retrieval for large datasets."
  ]
};

function ProjectDetail() {
  const { id } = useParams();
  const spec = projectSpecs.find(p => p.id === id) || defaultSpec;

  return (
    <div className="min-h-screen bg-surface pt-16 pb-32 px-6 md:px-12 font-body relative overflow-hidden">
      <div className="architectural-grid absolute inset-0 opacity-20 pointer-events-none"></div>
      <div className="neural-lines z-0 opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Link
          to="/projects"
          className="flex items-center gap-4 text-primary/60 hover:text-primary transition-all font-label text-[10px] md:text-sm uppercase tracking-[0.4em] mb-12 md:mb-32 group"
        >
          <span className="material-symbols-outlined text-lg group-hover:-translate-x-2 transition-transform">
            arrow_back
          </span>
          Return to Registry
        </Link>

        {/* Abstract Epic Header */}
        <header className="mb-24 md:mb-64">
           <div className="flex items-center gap-6 mb-12">
            <span className="font-label text-xs text-secondary tracking-[0.5em] uppercase">System_Protocol // 0{projectSpecs.findIndex(p => p.id === id) + 1}</span>
            <div className="h-[1px] flex-grow bg-outline-variant/10"></div>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl text-on-surface leading-[0.95] mb-12 md:mb-24 tracking-tightest uppercase">
            SYSTEM <br /><span className="text-secondary italic">{spec.title}</span>
          </h1>
          <div className="flex flex-wrap gap-4 md:gap-8">
            {spec.stack.map((item, i) => (
              <span key={i} className="px-6 py-2.5 glass-tag font-label text-[10px] text-primary uppercase tracking-[0.3em] backdrop-blur-xl relative z-10">{item}</span>
            ))}
          </div>
        </header>

        {/* Technical Decomposition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-32 items-start mb-32 md:mb-64">
          <div className="md:col-span-4 space-y-12 md:space-y-24">
            <div className="space-y-8">
              <h5 className="font-label text-xs md:text-sm text-primary uppercase tracking-[0.5em] flex items-center gap-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span> Implementation
              </h5>
              <p className="font-body text-lg md:text-2xl text-on-surface-variant leading-relaxed opacity-80 font-light italic">
                "{spec.description}"
              </p>
            </div>
            
            <div className="pt-12 border-t border-outline-variant/10 space-y-6">
                <span className="font-label text-[10px] text-secondary/40 uppercase tracking-[0.4em]">Operational Industry</span>
                <div className="text-2xl md:text-3xl font-headline text-on-surface uppercase tracking-tightest">{spec.industry}</div>
            </div>
          </div>

          <div className="md:col-span-8 border border-white/10 p-8 md:p-24 bg-[#121212]/70 backdrop-blur-[24px] saturate-[180%] relative overflow-hidden group shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 -z-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"></div>

            <h5 className="font-label text-xs md:text-sm text-secondary uppercase tracking-[0.5em] flex items-center gap-6 mb-12 md:mb-24 relative z-10 transition-all duration-300">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_10px_rgba(var(--secondary-rgb),0.5)]"></span> Performance Victories
            </h5>
            <ul className="space-y-12 md:space-y-24 relative z-10">
              {spec.achievements.map((achievement, i) => (
                <li key={i} className="group border-l border-outline-variant/10 pl-8 md:pl-16 py-4 hover:border-primary transition-all duration-1000 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[100%] bg-white/2 group-hover:w-full transition-all duration-1000 -z-10 blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"></div>
                  <span className="font-label text-[10px] md:text-xs text-secondary/40 tracking-[0.6em] uppercase block mb-4 group-hover:text-primary transition-colors">Victory_ID: 0{i + 1}</span>
                  <p className="font-headline text-xl md:text-3xl text-on-surface group-hover:text-primary transition-colors leading-[1.2] tracking-tightest uppercase">
                    {achievement}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectDetail;
