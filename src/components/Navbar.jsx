import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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
    { name: "Archive", path: "/projects" },
  ];

  return (
    <>
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-full px-6 flex justify-center pointer-events-none">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            apple-glass pointer-events-auto
            flex items-center justify-between gap-12 px-8 md:px-10 py-4 transition-all duration-700 rounded-full w-auto max-w-fit mx-auto
            ${isScrolled ? 'scale-95 translate-y-2' : ''}
          `}
        >
          <Link to="/" className="font-headline font-bold text-xl md:text-2xl text-on-surface tracking-tighter group flex items-center gap-3 shrink-0">
              <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
              Hafidz<span className="text-primary group-hover:animate-pulse">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                  const href = link.isAnchor ? (isHome ? `#${link.path}` : `/#${link.path}`) : link.path;
                  
                  if (link.isAnchor && isHome) {
                    return (
                      <a 
                        key={link.name}
                        href={href}
                        className="font-label text-[10px] text-on-surface-variant/50 hover:text-on-surface uppercase tracking-[0.2em] transition-all relative group whitespace-nowrap"
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
                          className="font-label text-[10px] text-on-surface-variant/50 hover:text-on-surface uppercase tracking-[0.2em] transition-all relative group whitespace-nowrap"
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
            <div className={`w-5 h-[1px] bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></div>
            <div className={`w-5 h-[1px] bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-[1px] bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></div>
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
            className="fixed inset-0 z-[90] bg-[#030303]/95 backdrop-blur-3xl flex flex-col items-center justify-center p-12"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => {
                const href = link.isAnchor ? (isHome ? `#${link.path}` : `/#${link.path}`) : link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {link.isAnchor && isHome ? (
                      <a 
                        href={href} 
                        onClick={() => setIsOpen(false)}
                        className="headline-lg text-on-surface hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={href}
                        onClick={() => setIsOpen(false)}
                        className="headline-lg text-on-surface hover:text-primary transition-colors"
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
