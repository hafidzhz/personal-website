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
    { name: "Portfolio", path: "projects", isAnchor: true },
    { name: "Services", path: "capabilities", isAnchor: true },
    { name: "Archive", path: "/projects" },
  ];

  return (
    <>
      <nav className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 w-full px-4 md:px-6 flex justify-center">
        <div className={`
          flex items-center justify-between md:justify-center gap-6 md:gap-16 px-8 md:px-12 py-3.5 md:py-5 transition-all duration-700 rounded-full w-auto max-w-fit mx-auto
          backdrop-blur-[24px] saturate-[180%] border relative overflow-hidden
          ${isScrolled 
            ? 'bg-[#121212]/70 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15)] scale-[0.98]' 
            : 'bg-white/5 border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
          }
        `}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent -z-10 opacity-50"></div>
          <Link to="/" className="font-headline text-xl md:text-2xl text-on-surface tracking-tightest group flex items-center gap-3 shrink-0">
              <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)]"></div>
              Hafidz.
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 border-l border-outline-variant/10 pl-8">
              {navLinks.map((link) => {
                  const href = link.isAnchor ? (isHome ? `#${link.path}` : `/#${link.path}`) : link.path;
                  
                  const linkContent = (
                    <>
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
                    </>
                  );

                  if (link.isAnchor && isHome) {
                    return (
                      <a 
                        key={link.name}
                        href={href}
                        className="font-label text-[10px] text-on-surface-variant/60 hover:text-primary uppercase tracking-[0.3em] transition-all relative group whitespace-nowrap"
                      >
                        {linkContent}
                      </a>
                    );
                  }

                  return (
                      <Link 
                          key={link.name}
                          to={href}
                          className="font-label text-[10px] text-on-surface-variant/60 hover:text-primary uppercase tracking-[0.3em] transition-all relative group whitespace-nowrap"
                      >
                          {linkContent}
                      </Link>
                  );
              })}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
          >
            <div className={`w-5 h-[1.5px] bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></div>
            <div className={`w-5 h-[1.5px] bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-[1.5px] bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-surface/95 backdrop-blur-2xl flex flex-col items-center justify-center p-12"
          >
            <div className="flex flex-col gap-12 text-center">
              {navLinks.map((link, i) => {
                const href = link.isAnchor ? (isHome ? `#${link.path}` : `/#${link.path}`) : link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {link.isAnchor && isHome ? (
                      <a 
                        href={href} 
                        onClick={() => setIsOpen(false)}
                        className="font-headline text-5xl text-on-surface hover:text-primary transition-colors tracking-tighter"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={href}
                        onClick={() => setIsOpen(false)}
                        className="font-headline text-5xl text-on-surface hover:text-primary transition-colors tracking-tighter"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Meta */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
                <div className="w-px h-12 bg-primary/20"></div>
                <span className="font-label text-[9px] text-primary/40 uppercase tracking-[0.5em] text-center">Backend Engineering Portfolio<br/>System // Showcase</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
