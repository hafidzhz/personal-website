import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
    // Generate particles with stable state for smooth Framer Motion performance
    const particles = useMemo(() => Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 1.5,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        z: Math.random() * 600 - 300,
        duration: Math.random() * 15 + 25,
        delay: Math.random() * -30,
        // Pre-calculated target offsets to ensure stability
        targetX: Math.random() * 150 - 75,
        targetY: Math.random() * 150 - 75,
    })), []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" style={{ perspective: "1200px" }}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-primary/40 backdrop-blur-[2px] shadow-[0_0_12px_rgba(var(--primary-rgb),0.4)]"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: p.left,
                        top: p.top,
                    }}
                    animate={{
                        x: [0, p.targetX, 0],
                        y: [0, p.targetY, 0],
                        z: [p.z, p.z + 150, p.z],
                        opacity: [0.1, 0.5, 0.1],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay
                    }}
                />
            ))}

            {/* Ambient light pulse - Enhanced for visibility */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, transparent 80%)'
                }}
                className="absolute inset-0 pointer-events-none"
            />
        </div>
    );
};

export default FloatingParticles;
