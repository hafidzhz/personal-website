import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const GlassCard = ({ children, className = "", tilt = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // MOUSE TRACKING NODES
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // TILTING AXIS (RELATIVE RANGE)
    const tiltX = useMotionValue(0);
    const tiltY = useMotionValue(0);
    
    // SMOOTHING ENGINES
    const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
    const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });
    
    const tiltSpringX = useSpring(tiltX, { stiffness: 150, damping: 20 });
    const tiltSpringY = useSpring(tiltY, { stiffness: 150, damping: 20 });

    // ROTATION TRANSFORMS
    const rotateX = useTransform(tiltSpringY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(tiltSpringX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const { left, top, width, height } = rect;
        
        // SPOTLIGHT (ABSOLUTE PIXELS)
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
        
        // TILT (NORMALIZED RANGE)
        if (tilt) {
            tiltX.set((e.clientX - left) / width - 0.5);
            tiltY.set((e.clientY - top) / height - 0.5);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (tilt) {
            tiltX.set(0);
            tiltY.set(0);
        }
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={tilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
            className={`apple-glass relative overflow-hidden group transition-all duration-700 ${className}`}
        >
            {/* DYNAMIC SPOTLIGHT */}
            <motion.div 
                style={{
                    left: springX,
                    top: springY,
                    opacity: isHovered ? 1 : 0
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-white/[0.08] to-transparent blur-[100px] pointer-events-none z-0 transition-opacity duration-500"
            />
            
            {/* Static Content Overlay */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </motion.div>
    );
};

export default GlassCard;
