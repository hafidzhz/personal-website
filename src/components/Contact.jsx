import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="px-12 py-80 bg-surface relative overflow-hidden" id="contact">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-24">
                <div className="space-y-8">
                    <span className="font-label text-[10px] text-primary uppercase tracking-[0.6em] block">The Next Evolution</span>
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="font-headline italic text-5xl md:text-7xl lg:text-8xl text-on-surface tracking-tighter relative z-10 leading-[0.85]"
                    >
                        Let's build <br /><span className="text-secondary italic">tomorrow's</span> systems.
                    </motion.h2>
                </div>

                <div className="relative z-10 group flex flex-col items-center gap-12">
                    <p className="font-body text-lg text-on-surface-variant max-w-lg leading-relaxed">
                        I'm currently identifying new high-impact systems to engineer. If you're building for scale, let's initiate the conversation.
                    </p>
                    <motion.a 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block px-12 py-6 bg-primary text-surface font-label text-[11px] uppercase tracking-[0.5em] hover:bg-secondary transition-all duration-700 shadow-2xl relative"
                        href="mailto:hafidzawaluddin@gmail.com"
                    >
                        Initiate Protocol // Let's Talk
                    </motion.a>
                </div>
            </div>

            {/* Background Detail */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[1px] bg-outline-variant/10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vh] w-[1px] bg-outline-variant/10"></div>
        </section>
    );
};

export default Contact;
