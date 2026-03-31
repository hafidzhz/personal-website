import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // DYNAMIC CURSOR TRACKING
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Registry", path: "projects", isAnchor: true },
    { name: "Capabilities", path: "capabilities", isAnchor: true },
    { name: "Archive", path: "/archive" },
  ];

  return (
    <>
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[9999] w-full px-6 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            apple-glass pointer-events-auto relative overflow-hidden
            flex items-center justify-between gap-12 px-8 md:px-10 py-4 transition-all duration-700 rounded-full w-auto max-w-fit mx-auto
            ${isScrolled ? 'scale-95 translate-y-2' : ''}
          `}
        >
          {/* CURSOR SPOTLIGHT EFFECT */}
          <motion.div
            style={{
              left: springX,
              top: springY,
              opacity: isHovered ? 1 : 0
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-white/[0.08] to-transparent blur-[60px] pointer-events-none z-0 transition-opacity duration-500"
          />
          <Link to="/" className="font-body font-bold text-2xl md:text-3xl text-white tracking-tightest group flex items-center gap-3 shrink-0">
            <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"></div>
            Hafidz<span className="text-secondary italic group-hover:animate-pulse">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => {
              const href = link.isAnchor ? (isHome ? `#${link.path}` : `/#${link.path}`) : link.path;

              if (link.isAnchor && isHome) {
                return (
                  <a
                    key={link.name}
                    href={href}
                    className="font-body text-[10px] text-white/40 hover:text-white uppercase tracking-[0.4em] transition-all relative group whitespace-nowrap"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={href}
                  className="font-body text-[10px] text-white/40 hover:text-white uppercase tracking-[0.4em] transition-all relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <div className={`w-6 h-[1px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></div>
            <div className={`w-6 h-[1px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-[1px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></div>
          </button>
        </motion.div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[#030303]/98 backdrop-blur-3xl flex flex-col items-center justify-center p-12"
          >
            <div className="flex flex-col gap-12 text-center">
              {navLinks.map((link, i) => {
                const href = link.isAnchor ? (isHome ? `#${link.path}` : `/#${link.path}`) : link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                  >
                    {link.isAnchor && isHome ? (
                      <a
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className="font-body font-semibold text-5xl md:text-7xl text-white hover:text-primary transition-colors tracking-tightest"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={href}
                        onClick={() => setIsOpen(false)}
                        className="font-body font-semibold text-5xl md:text-7xl text-white hover:text-primary transition-colors tracking-tightest"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
